<template>
  <div ref="map" class="flight-map" />
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

      animateRoute(route, map) {
        const turf = require('@turf/turf')

        const steps = 100

        const origin = route.geometry.coordinates[0]
        const destination = route.geometry.coordinates[1]

        let lineDistance = turf.length(route, { units: 'kilometers' })

        map.addSource('route', { 'type': 'geojson', 'data': route })

        map.addLayer({
          'id': 'route',
          'source': 'route',
          'type': 'line',
          'paint': {
            'line-width': 2,
            'line-color': tailwindConfig.theme.extend.colors.primary
          }
        })

        route.geometry.coordinates = []

        const animate = currentPosition => {
          let segment = turf.along({
            'type': 'Feature',
            'geometry': {
              'type': 'LineString',
              'coordinates': [origin, destination]
            }
          }, currentPosition, {units: 'kilometers'})

          route.geometry.coordinates.push(segment.geometry.coordinates)

          map.getSource('route').setData(route)

          if (currentPosition < lineDistance)
            requestAnimationFrame(() => animate(currentPosition + lineDistance / steps))
        }

        animate(0)
      },

      initializeMap() {
        const mapboxgl = require('mapbox-gl')

        mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

        // flip lat long pairs for mapbox
        let origin = [this.departureCoordinates[1], this.departureCoordinates[0]]
        let destination = [this.destinationCoordinates[1], this.destinationCoordinates[0]]

        let route = {
          'type': 'Feature',
          'geometry': {
            'type': 'LineString',
            'coordinates': [origin, destination]
          }
        }

        const map = new mapboxgl.Map({
          container: this.$refs['map'],
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [
            (destination[0] + origin[0]) / 2,
            (destination[1] + origin[1]) / 2
          ],
          bounds: [origin, destination],
          fitBoundsOptions: { padding: 50 }
        })

        map.dragPan.disable()

        map.on('touchstart', event => {
          const e = event.originalEvent

          if (!e || !'touches' in e) return

          if (e.touches.length > 1) map.dragPan.enable()

          else map.dragPan.disable()
        })

        map.on('mousedown', () => map.dragPan.enable())

        window.addEventListener('mouseup', () => map.dragPan.disable())

        this.addMarker(mapboxgl, map, origin)
        this.addMarker(mapboxgl, map, destination)

        map.addControl(new mapboxgl.AttributionControl({
          compact: true
        }))

        map.on('load', () => {
          this.animateRoute(route, map)
        })
      }
    }
  })
</script>

<style>
  @import 'mapbox-gl';

  .flight-map {
    height: 300px;
  }

  @screen sm {
    .flight-map {
      height: 400px;
    }
  }

  @screen md {
    .flight-map {
      height: 500px;
    }
  }
</style>
