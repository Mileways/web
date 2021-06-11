import Axios from 'axios'

async function _fetchTripData(axios, encodedIdentifiers) {
  try {
    const result = await axios.get('trips/shared/' + encodedIdentifiers)

    return result.data
  } catch(e) {
    console.log('Error while fetching trip', e)
  }

  return Error('trip data could not be fetched')
}

export default baseURL => {
  const axiosInstance = Axios.create({
    baseURL
  })

  return {
    async fetchTripData(encodedIdentifiers) {
      return _fetchTripData(axiosInstance, encodedIdentifiers)
    }
  }
}
