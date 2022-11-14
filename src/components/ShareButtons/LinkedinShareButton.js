import { LinkedinShareButton, LinkedinIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const LinkedinShare = ({ url, title, onSocialButtonClicked=()=>{}, socialType }) => {
    return (
        <Tooltip title="Linkedin" placement="top">
            <LinkedinShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <LinkedinIcon
                    size={40}
                    round
                />
            </LinkedinShareButton>
        </Tooltip>
    )
}

export default LinkedinShare;