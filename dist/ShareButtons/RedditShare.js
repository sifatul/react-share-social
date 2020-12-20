import { RedditShareButton, RedditIcon, FacebookShareButton } from "react-share";
import React from "react";
import ShareCtx from './contexts/share_ctx';

const RedditShare = () => {
  const {
    getData
  } = ShareCtx;
  return /*#__PURE__*/React.createElement(RedditShareButton, {
    url: getData().url,
    title: getData().title,
    onClick: () => getData().onSocialButtonClicked({
      socialType: "reddit"
    })
  }, /*#__PURE__*/React.createElement(RedditIcon, {
    size: 40,
    round: true
  }));
};

export default RedditShare;