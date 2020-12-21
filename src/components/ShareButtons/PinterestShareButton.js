import { PinterestShareButton, PinterestIcon } from "react-share";
import React from "react";

const PinterestShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <PinterestShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <PinterestIcon
                size={40}
                round
            />
        </PinterestShareButton>
    )
}

export default PinterestShare;