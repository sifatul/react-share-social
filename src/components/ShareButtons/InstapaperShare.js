import { InstapaperShareButton, InstapaperIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const InstapaperShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <Tooltip title="Instapaper" placement="top">
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
        </Tooltip>
    )
}

export default InstapaperShare;