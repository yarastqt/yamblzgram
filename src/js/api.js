import localforage from 'localforage'

import { getCurrentDate } from 'utils/date'
import { getPhotos } from 'selectors/photos'

class API {
    getPhotos() {
        return new Promise((resolve) => {
            localforage.getItem('photos').then((photos) => {
                if (photos === null) {
                    localforage.setItem('photos', []).then(() => {
                        resolve([])
                    })
                } else {
                    resolve(getPhotos(photos))
                }
            })
        })
    }

    savePhoto(data) {
        return new Promise((resolve, reject) => {
            cordova.plugins.photoLibrary.saveImage(data.source, 'Yamblzgram', (item) => {
                localforage.getItem('photos').then((photos) => {
                    const photo = {
                        id: new Date().getTime(),
                        date: getCurrentDate(),
                        liked: false,
                        author: 'yamblzgram',
                        source: item.photoURL,
                        geolocation: data.geolocation,
                        caption: data.caption
                    }

                    const updatedPhotos = [...photos, photo]

                    localforage.setItem('photos', updatedPhotos).then(() => {
                        resolve(getPhotos(updatedPhotos))
                    })
                })
            })
        })
    }

    deletePhoto(photoId) {
        return new Promise((resolve) => {
            localforage.getItem('photos').then((photos) => {
                const updatedPhotos = photos.filter((photo) => photo.id !== photoId)

                localforage.setItem('photos', updatedPhotos).then(() => {
                    resolve(getPhotos(updatedPhotos))
                })
            })
        })
    }

    toggleLikePhoto(photoId) {
        return new Promise((resolve) => {
            localforage.getItem('photos').then((photos) => {
                const updatedPhotos = photos.map((photo) => {
                    if (photo.id === photoId) {
                        return { ...photo, liked: !photo.liked }
                    }

                    return photo
                })

                localforage.setItem('photos', updatedPhotos).then(() => {
                    resolve(getPhotos(updatedPhotos))
                })
            })
        })
    }
}

export default new API()
