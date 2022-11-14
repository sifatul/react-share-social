import { RedditShareButton, RedditIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const RedditShare = ({ url, title, onSocialButtonClicked=()=>{}, socialType }) => {
    return (
        <Tooltip title="Reddit" placement="top">
            <RedditShareButton
                url={url}
                title={title}
                onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
            >
                <RedditIcon
                    size={40}
                    round
                />
            </RedditShareButton>
        </Tooltip>
    )
}

export default RedditShare;