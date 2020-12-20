import {FacebookShareButton, FacebookIcon} from "react-share";
import React from "react";

import ShareCtx from './contexts/share_ctx'


const FacebookShare = () => {

    const {getData} = ShareCtx

    return (
        <FacebookShareButton
            url={getData().url}
            quote={getData().title}
            onClick={() => getData().onSocialButtonClicked({socialType: "facebook"})}
        >
            <FacebookIcon
                size={40}
                round
            />
        </FacebookShareButton>
    )
}

export default FacebookShare