import React from 'react';
import FacebookShare from "./ShareButtons/FacebookShare";
import TwitterShare from "./ShareButtons/TwitterShare";
import RedditShare from "./ShareButtons/RedditShare";
import KakaoShare from "./ShareButtons/KakaoShare";
import HatenaShare from "./ShareButtons/HatenaShare";
import InstapaperShare from "./ShareButtons/InstapaperShare";
import LineShare from "./ShareButtons/LineShareButton";
import LinkedinShare from "./ShareButtons/LinkedinShareButton";
import LivejournalShare from "./ShareButtons/LivejournalShareButton";
import MailruShare from "./ShareButtons/MailruShareButton";
import OKShare from "./ShareButtons/OKShareButton";
import PinterestShare from "./ShareButtons/PinterestShareButton";
import Styles from './Styles/main.module.css';

function ShareSocial(props) {
  const {
    title,
    socialTypes = ['facebook', 'twitter'],
    style
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
  }, type === 'facebook' && /*#__PURE__*/React.createElement(FacebookShare, props), type === 'twitter' && /*#__PURE__*/React.createElement(TwitterShare, props), type === 'reddit' && /*#__PURE__*/React.createElement(RedditShare, props), type === 'hatena' && /*#__PURE__*/React.createElement(HatenaShare, props), type === 'instapaper' && /*#__PURE__*/React.createElement(InstapaperShare, props), type === 'line' && /*#__PURE__*/React.createElement(LineShare, props), type === 'linkedin' && /*#__PURE__*/React.createElement(LinkedinShare, props), type === 'livejournal' && /*#__PURE__*/React.createElement(LivejournalShare, props), type === 'mailru' && /*#__PURE__*/React.createElement(MailruShare, props), type === 'ok' && /*#__PURE__*/React.createElement(OKShare, props)))), /*#__PURE__*/React.createElement("div", {
    className: Styles.copyContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "copyUrl"
  }, props.url), /*#__PURE__*/React.createElement("div", {
    className: Styles.copyIcon,
    onClick: () => copyToClipboard(props.url)
  }, /*#__PURE__*/React.createElement("p", null, " Copy "))));
}

export default ShareSocial;