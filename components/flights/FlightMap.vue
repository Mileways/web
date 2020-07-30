<template>
  <div ref="map" style="height: 500px" />
</template>

<script>
  import Vue from 'vue'

  import tailwindConfig from '../../tailwind.config'

  export default Vue.extend({
    name: 'FlightMap',

    props: {
      departureCoordinates: { type: Array, required: true },
      destinationCoordinates: { type: Array, required: true }
    },

    async mounted() {
      if (
        !process.client ||
        !this.departureCoordinates ||
        !this.destinationCoordinates
      ) return

      this.initializeMap()
    },

    methods: {
      addMarker(mapboxgl, map, coordinates) {
        const el = document.createElement('div')

        el.className = 'marker'
        el.style.backgroundImage = 'url(/images/icons/marker.svg)'
        el.style.width = '20px'
        el.style.height = '20px'

        const marker = new mapboxgl.Marker(el)

        marker.setLngLat(coordinates)

        marker.addTo(map)
      },

      initializeMap() {
        const mapboxgl = require('mapbox-gl')
        const turf = require('@turf/turf')

        mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

        const map = new mapboxgl.Map({
          container: this.$refs['map'],
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [
            (this.destinationCoordinates[1] + this.departureCoordinates[1]) / 2,
            (this.destinationCoordinates[0] + this.departureCoordinates[0]) / 2
          ],
          zoom: 3
        })

        let origin = [this.departureCoordinates[1], this.departureCoordinates[0]]
        let destination = [this.destinationCoordinates[1], this.destinationCoordinates[0]]

        this.addMarker(mapboxgl, map, origin)
        this.addMarker(mapboxgl, map, destination)

        map.addControl(new mapboxgl.AttributionControl({
          compact: true
        }))

        let route = {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'LineString',
                'coordinates': [origin, destination]
              }
            }
          ]
        }

        let lineDistance = turf.length(route.features[0], {units: 'kilometers'})

        const arc = []

        const steps = 100

        map.on('load', function() {
          map.addSource('route', {
            'type': 'geojson',
            'data': route
          })

          map.addLayer({
            'id': 'route',
            'source': 'route',
            'type': 'line',
            'paint': {
              'line-width': 2,
              'line-color': tailwindConfig.theme.extend.colors.primary
            }
          })

          function animate(currentPosition) {
            let segment = turf.along({
              'type': 'Feature',
              'geometry': {
                'type': 'LineString',
                'coordinates': [origin, destination]
              }
            }, currentPosition, {units: 'kilometers'})

            arc.push(segment.geometry.coordinates)

            // Update the source with this new data.
            route.features[0].geometry.coordinates = arc
            map.getSource('route').setData(route)

            if (currentPosition < lineDistance) {
              requestAnimationFrame(() => animate(currentPosition + lineDistance / steps))
            }
          }

          animate(0)
        })
      }
    }
  })
</script>

<style>
  @import 'mapbox-gl'
</style>
