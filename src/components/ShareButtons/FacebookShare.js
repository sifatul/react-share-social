import { FacebookShareButton, FacebookIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
const FacebookShare = ({ url, title, onSocialButtonClicked=()=>{}, socialType }) => {
    return (
        <Tooltip title="Facebook" placement="top">
            <FacebookShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <FacebookIcon
                    size={40}
                    round
                />
            </FacebookShareButton>
        </Tooltip>
    )
}

export default FacebookShare