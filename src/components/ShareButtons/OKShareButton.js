import { OKShareButton, OKIcon } from "react-share";
import React from "react";

const OKShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <OKShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <OKIcon
                size={40}
                round
            />
        </OKShareButton>
    )
}

export default OKShare