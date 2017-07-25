import React from 'react'
import styled, { css } from 'styled-components'

import { Icon, Button } from 'components/atoms'

const FeedContainer = styled.div`
    margin-bottom: 8px;
    padding-bottom: 8px;

    &:last-of-type {
        margin-bottom: 0;
    }
`

const FeedHeading = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 54px;
    border-bottom: 1px solid ${props => props.theme.palette.gray[2]};

    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        border-bottom-width: 0.5px;
    }

    button {
        margin-left: auto;
    }
`

const FeedAvatar = styled.div`
    flex: 0 0 32px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #fee11b;
    margin-right: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 1.6rem;
`

const FeedUser = styled.div`
    display: flex;
    flex-direction: column;
`

const FeedText = styled.span`
    font-size: 1.4rem;

    ${props => props.weight === 'bold' && css`
        font-weight: 500;
    `}

    ${props => props.text === 'overflow' && css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `}
`

const FeedPhotoContainer = styled.div`
    background-color: #efefef;
    padding-bottom: 100%;
    position: relative;
    margin-bottom: 14px;
`

const FeedPhoto = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
`

const FeedMeta = styled.div`
    padding: 0 10px;
`

const FeedDate = styled.div`
    margin-top: 8px;
    font-size: 1rem;
    color: ${props => props.theme.palette.gray[3]};
    text-transform: uppercase;
`

const Feed = ({
    id,
    date,
    source,
    liked,
    author,
    caption,
    geolocation,
    handleToggleLikePhoto,
    handleDeletePhoto
}) => (
    <FeedContainer>
        <FeedHeading>
            <FeedAvatar>{ author[0] }</FeedAvatar>
            <FeedUser>
                <FeedText text="overflow" weight="bold">
                    { author }
                </FeedText>
                { geolocation && (
                    <FeedText text="overflow">
                        { geolocation }
                    </FeedText>
                ) }
            </FeedUser>
            <Button
                icon={ <Icon
                    kind="more"
                    width="24"
                    height="24" /> }
                onClick={ handleDeletePhoto(id) }>
            </Button>
        </FeedHeading>
        <FeedPhotoContainer>
            <FeedPhoto src={ source } />
        </FeedPhotoContainer>
        <FeedMeta>
            <div>
                <Button
                    icon={ <Icon
                        kind={ liked ? 'like' : 'unlike' }
                        width="24"
                        height="24" /> }
                    onClick={ handleToggleLikePhoto(id) }>
                </Button>
            </div>
            <FeedText weight="bold">
                Нравится: { liked ? 1 : 0 }
            </FeedText>
            { caption && (
                <div>
                    <FeedText weight="bold">
                        { author }
                    </FeedText>
                    { ' ' }
                    <FeedText>
                        { caption }
                    </FeedText>
                </div>
            ) }
            <FeedDate>{ date }</FeedDate>
        </FeedMeta>
    </FeedContainer>
)

export default Feed
