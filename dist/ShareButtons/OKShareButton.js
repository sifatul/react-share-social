import { OKShareButton, OKIcon } from "react-share";
import React from "react";

const OKShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(OKShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(OKIcon, {
    size: 40,
    round: true
  }));
};

export default OKShare;