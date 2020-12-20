import {TwitterShareButton, TwitterIcon, RedditShareButton} from "react-share";
import React from "react";
import ShareCtx from './contexts/share_ctx'


const TwitterShare = (props) => {
    const {getData} = ShareCtx

    return (
        <TwitterShareButton
            url={getData().url}
            title={getData().title}
            onClick={() => getData().onSocialButtonClicked({socialType: "twitter"})}
        >
            <TwitterIcon
                size={40}
                round
            />
        </TwitterShareButton>
    )
}

export default TwitterShare;