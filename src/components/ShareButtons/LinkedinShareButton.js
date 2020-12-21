import { LinkedinShareButton, LinkedinIcon } from "react-share";
import React from "react";

const LinkedinShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <LinkedinShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <LinkedinIcon
                size={40}
                round
            />
        </LinkedinShareButton>
    )
}

export default LinkedinShare;