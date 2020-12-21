import { MailruShareButton, MailruIcon } from "react-share";
import React from "react";

const MailruShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <MailruShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <MailruIcon
                size={40}
                round
            />
        </MailruShareButton>
    )
}

export default MailruShare;