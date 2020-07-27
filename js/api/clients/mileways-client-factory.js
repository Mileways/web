import Axios from 'axios'

async function _authenticateAnonymously(axios) {
  const result = await axios.get('auth/anon')

  return result.data
}

async function _fetchFlightData(axios, id) {
  const tokenInfo = await _authenticateAnonymously(axios)

  try {
    const result = await axios.get('flights/' + id, {
      headers: {
        Authorization: tokenInfo.tokenType + ' ' + tokenInfo.accessToken
      }
    })

    return result.data
  } catch(e) {
    console.log('Error while fetching flight', e)
  }

  return Error('Flight data could not be fetched')
}

export default baseURL => {
  const axiosInstance = Axios.create({
    baseURL
  })

  return {
    async fetchFlightData(id) {
      return _fetchFlightData(axiosInstance, id)
    }
  }
}
