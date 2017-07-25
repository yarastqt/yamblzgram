import React, { Component } from 'react'

import API from 'api'
import StatusBarService from 'utils/statusbar'
import { FeedsContainer, PhotoCreateModalContainer } from 'containers'

class Application extends Component {
    state = {
        modal: {
            visible: false,
            props: {
                source: ''
            }
        },
        photos: []
    }

    componentDidMount() {
        API.getPhotos().then((photos) => {
            this.setState({ photos })
        })
    }

    showPhotoCreateModal = (source) => {
        this.setState({
            modal: {
                visible: true,
                props: {
                    source
                }
            }
        }, StatusBarService.hideStatusBar)
    }

    hidePhotoCreateModal = () => {
        this.setState({
            modal: {
                visible: false,
                props: {
                    source: ''
                }
            }
        }, StatusBarService.showStatusBar)
    }

    handleCreatePhoto = (data) => {
        API.savePhoto(data).then((photos) => {
            this.setState({ photos })
        })
    }

    handleDeletePhoto = (photoId) => () => {
        const options = {
            androidTheme: plugins.actionsheet.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT,
            androidEnableCancelButton : true,
            addCancelButtonWithLabel: 'Отмена',
            addDestructiveButtonWithLabel : 'Удалить',
            destructiveButtonLast: true
        }

        plugins.actionsheet.show(options, (actionButtonIndex) => {
            if (actionButtonIndex === 1) {
                navigator.notification.confirm('', (confirmButtonIndex) => {
                    if (confirmButtonIndex === 2) {
                        API.deletePhoto(photoId).then((photos) => {
                            this.setState({ photos })
                        })
                    }
                }, 'Удалить публикацию?', ['Отмена', 'Удалить'])
            }
        })
    }

    handleToggleLikePhoto = (photoId) => () => {
        API.toggleLikePhoto(photoId).then((photos) => {
            this.setState({ photos })
        })
    }

    render() {
        const { modal, photos } = this.state

        return (
            <div>
                <FeedsContainer
                    photos={ photos }
                    handleDeletePhoto={ this.handleDeletePhoto }
                    showPhotoCreateModal={ this.showPhotoCreateModal }
                    handleToggleLikePhoto={ this.handleToggleLikePhoto } />
                <PhotoCreateModalContainer
                    hidePhotoCreateModal={ this.hidePhotoCreateModal }
                    handleCreatePhoto={ this.handleCreatePhoto }
                    { ...modal } />
            </div>
        )
    }
}

export default Application
