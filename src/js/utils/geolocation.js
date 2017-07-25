import 'whatwg-fetch'

const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

function createDecodeGeoURL(latitude, longitude) {
    return `${GOOGLE_API_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}&result_type=locality`
}

class GeolocationService {
    getGeolocation() {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords
                const decodeGeoURL = createDecodeGeoURL(latitude, longitude)

                fetch(decodeGeoURL)
                    .then((response) => response.json())
                    .then((response) => {
                        resolve(response.results[0].formatted_address)
                    })
            })
        })
    }
}

export default new GeolocationService()
