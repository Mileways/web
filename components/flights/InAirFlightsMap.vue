<template>
  <div class="w-full h-full">
    <p v-if="isLoading" class="text-center">Map is loading...</p>
    <div ref="map" class="flight-map" />
  </div>
</template>

<script>
import Vue from 'vue'
import tailwindConfig from '../../tailwind.config'
import 'mapbox-gl/dist/mapbox-gl.css';

export default Vue.extend({
  name: 'InAirFlightsMap',

  data() {
    return {
      flights: [],
      isLoading: true
    }
  },

  async mounted() {
    this.fetchDataAndInitializeMap()
  },

  methods: {
    addMarker(mapboxgl, map, coordinates) {
      const el = document.createElement('div')
      el.className = 'marker'
      el.style.backgroundImage = 'url(/images/icons/marker-large.svg)';
      el.style.width = '25px';
      el.style.height = '25px';

      const marker = new mapboxgl.Marker(el)
      marker.setLngLat(coordinates)
      marker.addTo(map)
    },

    animateRoutes(routes, map) {
      const turf = require('@turf/turf')

      const steps = 100

      routes.forEach((route, index) => {
        const origin = route[0]
        const destination = route[1]

        const line = turf.lineString([origin, destination])
        const lineDistance = turf.length(line, { units: 'kilometers' })

        const geojson = {
          "type": "Feature",
          "geometry": {
            "type": "LineString",
            "coordinates": [origin]
          }
        }

        map.addSource(`route-${index}`, { 'type': 'geojson', 'data': geojson })

        map.addLayer({
          'id': `route-${index}`,
          'source': `route-${index}`,
          'type': 'line',
          'paint': {
            'line-width': 2,
            'line-color': tailwindConfig.theme.extend.colors.primary
          }
        })

        const animate = currentPosition => {
          let segment = turf.along(line, currentPosition, { units: 'kilometers' })

          geojson.geometry.coordinates.push(segment.geometry.coordinates)

          map.getSource(`route-${index}`).setData(geojson)

          if (currentPosition < lineDistance)
            requestAnimationFrame(() => animate(currentPosition + lineDistance / steps))
        }
        animate(0)
      })
    }
    ,

    async fetchDataAndInitializeMap() {
      try {
        const url = 'https://mileways-flieger.xyz/api/v1/flights/allInAir';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();

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
          map.zoomTo(1.5, { duration: 500 });
          let routesArray = [];

          data.forEach(flight => {
            let departureCoordinates = [flight.departure.lon, flight.departure.lat];
            let arrivalCoordinates = [flight.arrival.lon, flight.arrival.lat];

            this.addMarker(mapboxgl, map, departureCoordinates);
            this.addMarker(mapboxgl, map, arrivalCoordinates);

            routesArray.push([[flight.departure.lon, flight.departure.lat], [flight.arrival.lon, flight.arrival.lat]]);
          });

          this.animateRoutes(routesArray, map);
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
.flight-map
{
  height: 80vh;
  width: 100%;
  overflow: hidden;
}
</style>
