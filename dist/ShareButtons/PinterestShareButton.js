import { PinterestShareButton, PinterestIcon } from "react-share";
import React from "react";

const PinterestShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(PinterestShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(PinterestIcon, {
    size: 40,
    round: true
  }));
};

export default PinterestShare;