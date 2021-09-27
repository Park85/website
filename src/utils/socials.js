import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiYoutube, SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si';
const social = [
  {
    icon_1: <FaFacebookF />,
    icon_2: <SiFacebook />,
    link: 'https://facebook.com'
  },
  {
    icon_1: <FaTwitter />,
    icon_2: <SiTwitter />,
    link: 'https://twitter.com'
  },
  {
    icon_1: <FaInstagram />,
    icon_2: <SiInstagram />,
    link: 'https://instagram.com'
  },
  {
    icon_1: <FaYoutube />,
    icon_2: <SiYoutube />,
    link: 'https://youtube.com'
  }
];

export default social;
