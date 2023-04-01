<template>
  <div class="w-full h-full">
    <p v-if="isLoading" class="text-center">Map is loading...</p>
    <div ref="map" class="flight-map" />
  </div>
</template>

<script>
  import Vue from 'vue'
  import 'mapbox-gl/dist/mapbox-gl.css';

  export default Vue.extend({
    name: 'ScrapersMap',

    data() {
      return {
        scrapedAirports: [],
        isLoading: true
      }
    },

    async mounted() {
      this.fetchDataAndInitializeMap()
    },

    methods: {
      async fetchDataAndInitializeMap() {
        try {
          const url = 'https://mileways-flieger.xyz/internal/allScrapedAirports';
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const data = await response.json();
          const scrapedAirports = data;

          const mapboxgl = require('mapbox-gl');
          mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

          const map = new mapboxgl.Map({
            container: this.$refs['map'],
            projection: 'globe',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [13.4050, 52.5200],
            zoom: 1.3,
          });

          map.on('load', () => {
            map.resize();
            map.fitBounds([
              [13.4050, 52.5200],
              [106.8456, 6.2088]
            ], { padding: 50 });

            scrapedAirports.forEach(obj => {
              const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                `<div class="flex flex-col space-y-1 text-center">
                  <h1 class="text-lg font-medium">${obj.airport.name} (${obj.airport.iata})</h1>
                  <p class="text-sm">${obj.airport.city}, ${obj.airport.countryCode}</p>
                  <p class="text-primary font-bold">Processed ${obj.flightsCount} flights</p>
                </div>`
              );

              const el = document.createElement('div');
              el.className = 'marker';
              el.style.backgroundImage = 'url(/images/icons/marker-large.svg)';
              el.style.width = '25px';
              el.style.height = '25px';

              const marker = new mapboxgl.Marker(el);
              marker.setLngLat([obj.airport.longitude, obj.airport.latitude]);
              marker.addTo(map);
              marker.setPopup(popup);
            });
            this.isLoading = false;
          });
        } catch (error) {
          console.error(error);
          this.isLoading = false;
        }
      }
    }
  })
</script>

<style>
  .flight-map {
    height: 80vh;
    width: 100%;
    overflow: hidden;
  }
</style>
