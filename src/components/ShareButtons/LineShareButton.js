import { LineShareButton, LineIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const LineShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <Tooltip title="Line" placement="top">
            <LineShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <LineIcon
                    size={40}
                    round
                />
            </LineShareButton>
        </Tooltip>
    )
}

export default LineShare