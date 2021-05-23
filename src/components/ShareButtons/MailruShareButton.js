import { MailruShareButton, MailruIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

const MailruShare = ({ url, title, onSocialButtonClicked=()=>{}, socialType }) => {
    return (
        <Tooltip title="Mailru" placement="top">

            <MailruShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <MailruIcon
                    size={40}
                    round
                />
            </MailruShareButton>
        </Tooltip>
    )
}

export default MailruShare;