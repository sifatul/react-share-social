import { HatenaShareButton, HatenaIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const HatenaShare = ({ url, title, onSocialButtonClicked, socialType = '' }) => {
    return (
        <Tooltip title="Hatena" placement="top">
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
        </Tooltip>
    )
}

export default HatenaShare;