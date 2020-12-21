import { RedditShareButton, RedditIcon } from "react-share";
import React from "react";

const RedditShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(RedditShareButton, {
    url: url,
    title: title,
    onClick: () => onSocialButtonClicked(`${socialType} clicked.`)
  }, /*#__PURE__*/React.createElement(RedditIcon, {
    size: 40,
    round: true
  }));
};

export default RedditShare;