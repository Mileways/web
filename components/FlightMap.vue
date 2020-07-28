<template>
  <div ref="map" style="height: 500px;" />
</template>

<script>
  import Vue from 'vue'

  import tailwindConfig from '../tailwind.config'

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

      await this.loadMapkit()

      this.initializeMap()
    },

    methods: {
      loadMapkit() {
        const script = document.createElement('script')

        script.setAttribute('type', 'text/javascript')
        script.setAttribute('src', 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js')

        document.head.appendChild(script)

        return new Promise((resolve => {
          const intervalId =
            setInterval(() => {
              if (!window.mapkit) return

              clearInterval(intervalId)

              resolve(true)
            }, 100)
        }))
      },

      addPointToMap(Leaflet, coordinates, map) {
        Leaflet.circleMarker(coordinates, {radius: 8, fillOpacity: 1, color: 'rgba(0, 0, 0, 0.1)', fill: true}).addTo(map)
        Leaflet.circleMarker(coordinates, {radius: 5, fillOpacity: 1, color: 'white', fill: true}).addTo(map)
        Leaflet.circleMarker(coordinates, {radius: 3, fillOpacity: 1, fill: true}).addTo(map)
      },

      initializeMap() {
        const Leaflet = require('leaflet')

        require('@elfalem/leaflet-curve')
        require('leaflet.mapkitmutant')

        const map = Leaflet.map(this.$refs['map'], {
          center: [
            (this.destinationCoordinates[0] + this.departureCoordinates[0]) / 2,
            (this.destinationCoordinates[1] + this.departureCoordinates[1]) / 2
          ],
          zoom: 4,
          minZoom: 4,
          attributionControl: false,
          zoomControl: false
        })

        Leaflet.mapkitMutant({
          type: 'muted',

          authorizationCallback: function(done) {
            done(process.env.APPLE_MAPKIT_TOKEN)
          },

          language: 'en'
        }).addTo(map)

        const vecAB = [
          this.destinationCoordinates[0] - this.departureCoordinates[0],
          this.destinationCoordinates[1] - this.departureCoordinates[1]
        ]

        const normVec = [vecAB[1], -vecAB[0]]

        const normVecLength = Math.sqrt(Math.pow(normVec[0], 2) + Math.pow(normVec[1], 2))

        const normUnitVec = [normVec[0] / normVecLength, normVec[1] / normVecLength]

        const curvature = 3

        const controlA = [
          this.departureCoordinates[0] + normUnitVec[0] * curvature,
          this.departureCoordinates[1] + normUnitVec[1] * curvature
        ]

        const controlB = [
          this.destinationCoordinates[0] + normUnitVec[0] * curvature,
          this.destinationCoordinates[1] + normUnitVec[1] * curvature
        ]

        this.addPointToMap(Leaflet, this.destinationCoordinates, map)
        this.addPointToMap(Leaflet, this.departureCoordinates, map)

        Leaflet.curve(
          [ 'M', this.departureCoordinates, 'C', controlA, controlB, this.destinationCoordinates ],
          {
            color: tailwindConfig.theme.extend.colors.primary,
            animate: {
              duration: 2000,
              easing: 'ease'
            }
          }
        ).addTo(map)
      }
    }
  })
</script>

<style>
  @import 'leaflet';

  .leaflet-mapkit-mutant .mk-controls-container {
    z-index: 1000 !important;
  }
</style>
