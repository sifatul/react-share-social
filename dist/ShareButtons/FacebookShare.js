import { FacebookShareButton, FacebookIcon } from "react-share";
import React from "react";
import ShareCtx from './contexts/share_ctx';

const FacebookShare = () => {
  const {
    getData
  } = ShareCtx;
  return /*#__PURE__*/React.createElement(FacebookShareButton, {
    url: getData().url,
    quote: getData().title,
    onClick: () => getData().onSocialButtonClicked({
      socialType: "facebook"
    })
  }, /*#__PURE__*/React.createElement(FacebookIcon, {
    size: 40,
    round: true
  }));
};

export default FacebookShare;