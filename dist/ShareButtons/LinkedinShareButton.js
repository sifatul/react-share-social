import { LinkedinShareButton, LinkedinIcon } from "react-share";
import React from "react";

const LinkedinShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(LinkedinShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(LinkedinIcon, {
    size: 40,
    round: true
  }));
};

export default LinkedinShare;