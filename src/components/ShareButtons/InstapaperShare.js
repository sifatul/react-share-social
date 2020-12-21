import { InstapaperShareButton,InstapaperIcon } from "react-share";
import React from "react";


const InstapaperShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <InstapaperShareButton
            url={url}
            title={title}
            onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
        >
            <InstapaperIcon
                size={40}
                round
            />
        </InstapaperShareButton>
    )
}

export default InstapaperShare;