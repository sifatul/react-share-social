import { OKShareButton, OKIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const OKShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <Tooltip title="OKShare" placement="top">
            <OKShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <OKIcon
                    size={40}
                    round
                />
            </OKShareButton>
        </Tooltip>
    )
}

export default OKShare