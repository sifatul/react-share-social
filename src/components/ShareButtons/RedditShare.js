import {RedditShareButton, RedditIcon, FacebookShareButton} from "react-share";
import React from "react";
import ShareCtx from './contexts/share_ctx'


const RedditShare = () => {
    const {getData} = ShareCtx

    return (
        <RedditShareButton
            url={getData().url}
            title={getData().title}
            onClick={() => getData().onSocialButtonClicked({socialType: "reddit"})}
        >
            <RedditIcon
                size={40}
                round
            />
        </RedditShareButton>
    )
}

export default RedditShare;