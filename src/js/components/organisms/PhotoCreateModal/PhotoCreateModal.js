import React from 'react'

import { Modal } from 'components/organisms'
import { Form, FormField, FormAction } from 'components/molecules'
import { PhotoPreview, Input, TextArea, Button } from 'components/atoms'

const PhotoCreateModal = ({
    props,
    visible,
    caption,
    geolocation,
    handleSubmit,
    onValueChange,
    addGeolocation,
    hidePhotoCreateModal
}) => (
    <Modal
        visible={ visible }
        heading="Новая публикация">
        <Form onSubmit={ handleSubmit }>
            <FormField>
                <PhotoPreview
                    src={ props.source }  />
                <TextArea
                    name="caption"
                    value={ caption }
                    onChange={ onValueChange }
                    placeholder="Добавьте подпись..." />
            </FormField>
            <FormField>
                <Input
                    readonly
                    name="geolocation"
                    value={ geolocation }
                    onClick={ addGeolocation }
                    placeholder="Добавить геопозицию" />
            </FormField>
            <FormAction>
                <Button
                    type="button"
                    view="secondary"
                    responsive="full"
                    onClick={ hidePhotoCreateModal }>
                Отмена</Button>
                <Button
                    type="submit"
                    view="primary"
                    responsive="full">
                Поделиться</Button>
            </FormAction>
        </Form>
    </Modal>
)

export default PhotoCreateModal
