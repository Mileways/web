import Vue from 'vue'

export const state = () => ({
  flights: {}
})

export const getters = {
  flightById: state => id => state.flights[id] || null
}

export const mutations = {
  setFlightData(state, flight) {
    Vue.set(state.flights, flight.id, flight)
  }
}

export const actions = {
  async loadFlightData(context, id) {
    const flight = await this.$milewaysApiClient.fetchFlightData(id)

    if (flight instanceof Error) return

    context.commit('setFlightData', flight)
  }
}
