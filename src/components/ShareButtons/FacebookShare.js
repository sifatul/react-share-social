import { FacebookShareButton, FacebookIcon } from "react-share";
import React from "react";

const FacebookShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <FacebookShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <FacebookIcon
                size={40}
                round
            />
        </FacebookShareButton>
    )
}

export default FacebookShare