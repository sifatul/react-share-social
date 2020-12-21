import { LineShareButton, LineIcon } from "react-share";
import React from "react";

const LineShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(LineShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    size: 40,
    round: true
  }));
};

export default LineShare;