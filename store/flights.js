import Vue from "vue";

export const state = () => ({
  trips: {},
  flightLoading: true,
});

export const getters = {
  tripById: (state) => (id) => state.trips[id] || null,
  flightLoading: (state) => state.flightLoading,
};

export const mutations = {
  setTripData(state, trip) {
    Vue.set(state.trips, trip.id, trip);
  },
  setFlightLoading(state, value) {
    state.flightLoading = value;
  },
};

export const actions = {
  async loadTripData(context, { tripId, userId, flightId }) {
    const baseString = `userId=${userId}&flightId=${flightId}&tripId=${tripId}`;

    const identifier = Buffer.from(baseString).toString("base64");

    context.commit("setFlightLoading", true);
    try {
      const trip = await this.$milewaysApiClient.fetchTripData(identifier);

      if (trip instanceof Error) return;

      context.commit("setTripData", {
        ...trip,
        id: tripId,
      });
    } finally {
      context.commit("setFlightLoading", false);
    }
  },
};
