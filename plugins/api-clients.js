/**
 * This plugin is used for registering the api clients to the Vuex instance
 */

import Vuex from 'vuex'

import milewaysClientFactory from '@/js/api/clients/mileways-client-factory'

export default ({ env }) => {
  if (Vuex.apiClientsRegistered && process.env.NODE_ENV !== 'development')
    return

  Vuex.Store.prototype.$milewaysApiClient = milewaysClientFactory(
    env.API_BASE_URL
  )

  Vuex.apiClientsRegistered = true
}
