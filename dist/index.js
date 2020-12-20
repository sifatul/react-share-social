import React from 'react';
import { FacebookShare, TwitterShare, RedditShare, KakaoShare } from "./ShareButtons";
import Styles from './Styles/main.module.css';
import { initialize, getData } from './ShareButtons/contexts/share_ctx';

function ShareSocial(props) {
  initialize(props);
  const {
    title,
    socialTypes = ['facebook', 'twitter'],
    style,
    url = 'url_to_share.com'
  } = props;

  const copyToClipboard = text => {
    if (navigator && navigator.clipboard) navigator.clipboard.writeText(text).then(() => {
      alert(`Copied!`);
    }).catch(error => {
      alert(`Copy failed! ${error}`);
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: Styles.container,
    style: style
  }, title && /*#__PURE__*/React.createElement("h1", {
    className: Styles.title
  }, " ", title, " "), /*#__PURE__*/React.createElement("div", {
    className: Styles.iconContainer
  }, Array.isArray(socialTypes) && socialTypes.map((type, idx) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: "social_item_" + idx
  }, type === 'facebook' && /*#__PURE__*/React.createElement(FacebookShare, null), type === 'twitter' && /*#__PURE__*/React.createElement(TwitterShare, null), type === 'reddit' && /*#__PURE__*/React.createElement(RedditShare, null), type === 'kakao' && /*#__PURE__*/React.createElement(KakaoShare, null)))), /*#__PURE__*/React.createElement("div", {
    className: Styles.copyContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "copyUrl"
  }, getData().url), /*#__PURE__*/React.createElement("div", {
    className: Styles.copyIcon,
    onClick: () => copyToClipboard(getData().url)
  }, /*#__PURE__*/React.createElement("p", null, " Copy "))));
}

export default ShareSocial;