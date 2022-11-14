import { LivejournalShareButton, LivejournalIcon } from "react-share";
import React from "react";
import Tooltip from '@material-ui/core/Tooltip';


const LivejournalShare = ({ url, title, onSocialButtonClicked=()=>{}, socialType }) => {
    return (
        <Tooltip title="Livejournal" placement="top">
            <LivejournalShareButton
                url={url}
                quote={title}
                onClick={() => onSocialButtonClicked(`${socialType || 'button'} clicked.`)}
            >
                <LivejournalIcon
                    size={40}
                    round
                />
            </LivejournalShareButton>
        </Tooltip>
    )
}

export default LivejournalShare;