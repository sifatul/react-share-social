import { HatenaShareButton, HatenaIcon } from "react-share";
import React from "react";


const HatenaShare = ({ url, title, onSocialButtonClicked,socialType='' }) => {
    return (
        <HatenaShareButton
            url={url}
            title={title}
            onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
        >
            <HatenaIcon
                size={40}
                round
            />
        </HatenaShareButton>
    )
}

export default HatenaShare;