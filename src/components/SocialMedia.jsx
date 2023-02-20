import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/MHMD9Khatib'>
      <BsGithub  />
      </a>
    </div>
    <div>
    <a href='https://www.linkedin.com/in/mohammed-alkhatib-a1334a243/'>
    <BsLinkedin />
      </a>
      </div>

  </div>
);

export default SocialMedia;