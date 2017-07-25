import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GeolocationService from 'utils/geolocation'
import { PhotoCreateModal } from 'components/organisms'

class PhotoCreateModalContainer extends Component {
    static propTypes = {
        props: PropTypes.shape({
            source: PropTypes.string.isRequired
        }).isRequired,
        visible: PropTypes.bool.isRequired,
        handleCreatePhoto: PropTypes.func.isRequired,
        hidePhotoCreateModal: PropTypes.func.isRequired
    }

    state = {
        form: {
            source: '',
            caption: '',
            geolocation: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.props.source !== this.props.source) {
            this.setState({
                form: {
                    ...this.state.form,
                    source: nextProps.props.source
                }
            })
        }
    }

    addGeolocation = () => {
        GeolocationService.getGeolocation().then((geolocation) => {
            this.setState({
                form: {
                    ...this.state.form,
                    geolocation
                }
            })
        })
    }

    onValueChange = (event) => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.handleCreatePhoto(this.state.form)
        this.setState({
            form: {
                source: '',
                caption: '',
                geolocation: ''
            }
        }, this.props.hidePhotoCreateModal)
    }

    render() {
        return (
            <PhotoCreateModal
                handleSubmit={ this.handleSubmit }
                onValueChange={ this.onValueChange }
                addGeolocation={ this.addGeolocation }
                { ...this.props }
                { ...this.state.form } />
        )
    }
}

export default PhotoCreateModalContainer
