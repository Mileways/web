import Vue from 'vue'

export const state = () => ({
  trips: {}
})

export const getters = {
  tripById: state => id => state.trips[id] || null
}

export const mutations = {
  setTripData(state, trip) {
    Vue.set(state.trips, trip.id, trip)
  }
}

export const actions = {
  async loadTripData(context, { tripId, userId, flightId }) {
    const baseString = `userId=${userId}&flightId=${flightId}&tripId=${tripId}`

    const identifier = btoa(baseString)

    const trip = await this.$milewaysApiClient.fetchTripData(identifier)

    if (trip instanceof Error) return

    context.commit('setTripData', {
      ...trip,
      id: tripId
    })
  }
}
