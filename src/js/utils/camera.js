function getCameraSettings(options) {
    return {
        quality: 100,
        allowEdit: true,
        saveToPhotoAlbum: false,
        correctOrientation: true,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        destinationType: Camera.DestinationType.FILE_URI,
        ...options
    }
}

function getPhotoWithSettings(settings) {
    return new Promise((resolve) => {
        navigator.camera.getPicture((source) => {
            resolve(source)
        }, null, settings)
    })
}

class CameraService {
    getPhotoFromCamera() {
        const cameraSettings = getCameraSettings({
            cameraDirection: Camera.Direction.BACK,
            sourceType: Camera.PictureSourceType.CAMERA
        })

        return getPhotoWithSettings(cameraSettings)
    }

    getPhotoFromLibrary() {
        const cameraSettings = getCameraSettings({
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY
        })

        return getPhotoWithSettings(cameraSettings)
    }
}

export default new CameraService()
