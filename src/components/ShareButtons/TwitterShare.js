import { TwitterShareButton, TwitterIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const TwitterShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <Tooltip title="Twitter" placement="top">
            <TwitterShareButton
                url={url}
                title={title}
                onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
            >
                <TwitterIcon
                    size={40}
                    round
                />
            </TwitterShareButton>
        </Tooltip>
    )
}

export default TwitterShare;