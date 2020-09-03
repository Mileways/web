import Axios from 'axios'

async function _fetchFlightData(axios, id) {
  try {
    const result = await axios.get('trips/shared/' + id)

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
