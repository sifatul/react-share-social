import { LineShareButton, LineIcon } from "react-share";
import React from "react";

const LineShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <LineShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <LineIcon
                size={40}
                round
            />
        </LineShareButton>
    )
}

export default LineShare