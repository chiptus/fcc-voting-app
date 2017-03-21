export const SERVER_URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_SERVER_URL
  : process.env.REACT_APP_SERVER_URL_DEV;
export const FB_APPID = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_FB_APPID
  : process.env.REACT_APP_FB_APPID_DEV;

console.log('config', SERVER_URL, FB_APPID);
