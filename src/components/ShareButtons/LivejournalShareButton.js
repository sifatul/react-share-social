import { LivejournalShareButton, LivejournalIcon } from "react-share";
import React from "react";

const LivejournalShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <LivejournalShareButton
            url={url}
            quote={title}
            onClick={() => onSocialButtonClicked(`${socialType||'button'} clicked.`)}
        >
            <LivejournalIcon
                size={40}
                round
            />
        </LivejournalShareButton>
    )
}

export default LivejournalShare;