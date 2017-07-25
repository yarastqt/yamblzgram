import React from 'react'

import { Logo, Icon, Button } from 'components/atoms'
import { NavigationBar, Content, Feed, TabBar } from 'components/organisms'

const Feeds = ({
    photos,
    handleTakePhotoFromCamera,
    handleTakePhotoFromLibrary,
    handleDeletePhoto,
    handleToggleLikePhoto
}) => (
    <div>
        <NavigationBar>
            <Button
                icon={ <Icon
                    kind="camera"
                    width="24"
                    height="24" /> }
                onClick={ handleTakePhotoFromCamera }>
            </Button>
            <Logo />
        </NavigationBar>
        <Content>
            { photos.map((photo) => (
                <Feed
                    key={ photo.id }
                    handleDeletePhoto={ handleDeletePhoto }
                    handleToggleLikePhoto={ handleToggleLikePhoto }
                    { ...photo } />
            )) }
        </Content>
        <TabBar>
            <Button
                icon={ <Icon
                    kind="select"
                    width="24"
                    height="24" /> }
                onClick={ handleTakePhotoFromLibrary }>
            </Button>            
        </TabBar>
    </div>
)

export default Feeds
