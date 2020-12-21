import { TwitterShareButton, TwitterIcon } from "react-share";
import React from "react";

const TwitterShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(TwitterShareButton, {
    url: url,
    title: title,
    onClick: () => onSocialButtonClicked(`${socialType} clicked.`)
  }, /*#__PURE__*/React.createElement(TwitterIcon, {
    size: 40,
    round: true
  }));
};

export default TwitterShare; // EmailShareButton,
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