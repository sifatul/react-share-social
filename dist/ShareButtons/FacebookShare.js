import { FacebookShareButton, FacebookIcon } from "react-share";
import React from "react";

const FacebookShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(FacebookShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(FacebookIcon, {
    size: 40,
    round: true
  }));
};

export default FacebookShare;