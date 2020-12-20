import { TwitterShareButton, TwitterIcon, RedditShareButton } from "react-share";
import React from "react";
import ShareCtx from './contexts/share_ctx';

const TwitterShare = props => {
  const {
    getData
  } = ShareCtx;
  return /*#__PURE__*/React.createElement(TwitterShareButton, {
    url: getData().url,
    title: getData().title,
    onClick: () => getData().onSocialButtonClicked({
      socialType: "twitter"
    })
  }, /*#__PURE__*/React.createElement(TwitterIcon, {
    size: 40,
    round: true
  }));
};

export default TwitterShare;