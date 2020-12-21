import { MailruShareButton, MailruIcon } from "react-share";
import React from "react";

const MailruShare = ({
  url,
  title,
  onSocialButtonClicked,
  socialType
}) => {
  return /*#__PURE__*/React.createElement(MailruShareButton, {
    url: url,
    quote: title,
    onClick: () => onSocialButtonClicked(`${socialType || 'button'} clicked.`)
  }, /*#__PURE__*/React.createElement(MailruIcon, {
    size: 40,
    round: true
  }));
};

export default MailruShare;