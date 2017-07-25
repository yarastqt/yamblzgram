export function getPhotos(photos) {
    return photos.sort((a, b) => b.id - a.id)
}
