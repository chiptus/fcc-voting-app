import React, { PropTypes } from 'react';
import { IconButton } from 'material-ui';
const ShareIcon = ({ url, sn }) => (
  <a href={url} target="_blank">
    <IconButton iconClassName={`fa fa-${sn}`} />
  </a>
);

const FacebookShareIcon = ({ fbAppId }) => {
  if (!fbAppId) {
    return null;
  }
  const currentUrl = document.URL;
  const facebookUrl = `http://www.facebook.com/dialog/send?app_id=${fbAppId}&redirectUrl=${currentUrl}&link=${currentUrl}`;
  return <ShareIcon url={facebookUrl} sn={'facebook'} />;
};

const TwitterShareIcon = () => {
  const msg = 'View my poll';
  const currentUrl = document.URL;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${currentUrl}&text=${msg}`;
  return <ShareIcon url={twitterUrl} sn={'twitter'} />;
};

const SocialBar = ({ fbAppId }) => {
  return (
    <div>
      Share with:
      <TwitterShareIcon />
      <FacebookShareIcon fbAppId={fbAppId} />
    </div>
  );
};

SocialBar.propTypes = {
  fbAppId: PropTypes.string,
};

export default SocialBar;
