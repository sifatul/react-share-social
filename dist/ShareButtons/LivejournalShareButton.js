import { LivejournalShareButton, LivejournalIcon } from "react-share";
import React from "react";

const LivejournalShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(LivejournalShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(LivejournalIcon, {
    size: 40,
    round: true
  }));
};

export default LivejournalShare;