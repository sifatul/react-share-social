export const share_prop_ctx = {};
export const initialize = ({
  socialTypes,
  url,
  title,
  onSocialButtonClicked,
  kakaoAPIKey,
  thumbnail
}) => {
  share_prop_ctx.socialTypes = socialTypes;
  share_prop_ctx.url = url;
  share_prop_ctx.title = title;

  share_prop_ctx.onSocialButtonClicked = data => onSocialButtonClicked(data);

  share_prop_ctx.kakaoAPIKey = kakaoAPIKey;
  share_prop_ctx.thumbnail = thumbnail;
};
export const setData = (key, val) => {
  share_prop_ctx[key] = val;
};
export const getData = () => {
  return share_prop_ctx;
};
export default {
  initialize,
  setData,
  getData
};