import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href='https://x.com/IliassmedAffani?t=CMgvQegGVSY_cY897nXsZA&s=09'>
        <BsTwitter />
        </a>
      </div>
      <div >
        <a href='https://www.linkedin.com/in/mohammed-iliass-affani/'>
        <BsLinkedin  />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
