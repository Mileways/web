export default baseUrl => ({
  fetchFlightData(id) {
    return {
      "id": id,
      "departureTime": "2020-07-24T11:25:00Z",
      "estimatedDepartureTime": "2020-07-24T11:25:00Z",
      "arrivalTime": "2020-07-24T15:10:00Z",
      "estimatedArrivalTime": "2020-07-24T15:10:00Z",
      "lastUpdated": "2020-07-24T11:55:44Z",
      "miles": 836,
      "fsCode": "TK",
      "flightNumber": "1630",
      "airline": {
        "id": "81",
        "name": "Turkish Airlines",
        "fs": "TK"
      },
      "airplane": "Airbus A321",
      "departureTimeZoned": "2020-07-24T09:25:00+0000",
      "arrivalTimeZoned": "2020-07-24T12:10:00+0000",
      "estimatedDepartureTimeZoned": "2020-07-24T09:25:00+0000",
      "estimatedArrivalTimeZoned": "2020-07-24T12:10:00+0000",
      "wifi": false,
      "baggage": null,
      "duration": 9900,
      "arrivalGate": null,
      "arrivalTerminal": null,
      "departureGate": "C6",
      "departureTerminal": "1",
      "status": "arrived",
      "statusDetail": null,
      "shareUrl": "https://mileways-flieger.xyz/flights/2004",
      "delay": null,
      "departure": {
        "id": "10592",
        "fs": "MUC",
        "name": "Franz Josef Strauss Airport",
        "city": "Munich",
        "countryCode": "DE",
        "countryName": "Germany",
        "timeZoneRegionName": "Europe/Berlin",
        "latitude": 48.353005,
        "longitude": 11.790143
      },
      "arrival": {
        "id": "7424",
        "fs": "ISL",
        "name": "Istanbul Airport",
        "city": "Istanbul",
        "countryCode": "TR",
        "countryName": "Turkey",
        "timeZoneRegionName": "Europe/Istanbul",
        "latitude": 41.260278,
        "longitude": 28.741944
      },
      "details": null,
      "positions": [],
      "isFollowed": false
    }
  }
})
