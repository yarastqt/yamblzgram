import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CameraService from 'utils/camera'
import { Feeds } from 'components/pages'

class FeedsContainer extends Component {
    static propTypes = {
        handleDeletePhoto: PropTypes.func.isRequired,
        showPhotoCreateModal: PropTypes.func.isRequired,
        handleToggleLikePhoto: PropTypes.func.isRequired,
        photos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            author: PropTypes.string.isRequired,
            source: PropTypes.string.isRequired,
            caption: PropTypes.string,
            geolocation: PropTypes.string
        })).isRequired
    }

    handleTakePhotoFromCamera = () => {
        CameraService.getPhotoFromCamera().then((source) => {
            this.props.showPhotoCreateModal(source)
        })
    }

    handleTakePhotoFromLibrary = () => {
        CameraService.getPhotoFromLibrary().then((source) => {
            this.props.showPhotoCreateModal(source)
        })
    }

    render() {
        return (
            <Feeds
                handleTakePhotoFromCamera={ this.handleTakePhotoFromCamera }
                handleTakePhotoFromLibrary={ this.handleTakePhotoFromLibrary }
                { ...this.props } />
        )
    }
}

export default FeedsContainer
