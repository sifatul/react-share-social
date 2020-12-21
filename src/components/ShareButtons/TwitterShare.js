import { TwitterShareButton, TwitterIcon } from "react-share";
import React from "react";


const TwitterShare = ({ url, title, onSocialButtonClicked, socialType }) => {
    return (
        <TwitterShareButton
            url={url}
            title={title}
            onClick={() => onSocialButtonClicked(`${socialType} clicked.`)}
        >
            <TwitterIcon
                size={40}
                round
            />
        </TwitterShareButton>
    )
}

export default TwitterShare;

// EmailShareButton,
 
   
//   InstapaperShareButton,
//   LineShareButton,
//   LinkedinShareButton,
//   LivejournalShareButton,
//   MailruShareButton,
//   OKShareButton,
//   PinterestShareButton,
//   PocketShareButton,
//   RedditShareButton,
//   TelegramShareButton,
//   TumblrShareButton,
//   TwitterShareButton,
//   ViberShareButton,
//   VKShareButton,
//   WhatsappShareButton,
//   WorkplaceShareButton