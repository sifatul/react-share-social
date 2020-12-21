import { InstapaperShareButton, InstapaperIcon } from "react-share";
import React from "react";

const InstapaperShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(InstapaperShareButton, {
    url: url,
    title: title,
    onClick: () => onSocialButtonClicked(`${socialType} clicked.`)
  }, /*#__PURE__*/React.createElement(InstapaperIcon, {
    size: 40,
    round: true
  }));
};

export default InstapaperShare;