import { WhatsappShareButton, WhatsappIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const TwitterShare = ({ url, title, onSocialButtonClicked = () => { }, socialType }) => {
    return (
        <Tooltip title="Twitter" placement="top">
            <WhatsappShareButton
                url={url}
                title={title}
                onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
            >
                <WhatsappIcon
                    size={40}
                    round
                />
            </WhatsappShareButton>
        </Tooltip>
    )
}

export default TwitterShare;