import { HatenaShareButton, HatenaIcon } from "react-share";
import React from "react";

const HatenaShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType = ''
}) => {
  return /*#__PURE__*/React.createElement(HatenaShareButton, {
    url: url,
    title: title,
    onClick: () => onSocialButtonClicked(`${socialType} clicked.`)
  }, /*#__PURE__*/React.createElement(HatenaIcon, {
    size: 40,
    round: true
  }));
};

export default HatenaShare;