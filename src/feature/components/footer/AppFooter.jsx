import React from 'react';
import 'rc-footer/assets/index.css';
import Footer from 'rc-footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const AppFooter = () => {
  return (
    <Footer
      backgroundColor="#808080"
      columns={[
        {
          title: 'Company',
          items: [
            {
              title: 'About Us',
              url: '/about',
            },
            {
              title: 'Contact',
              url: '/contact',
            },
            {
              title: 'Blog',
              url: '/blog',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              title: 'Rings',
              url: '/rings',
            },
            {
              title: 'Necklaces',
              url: '/necklaces',
            },
            {
              title: 'Earrings',
              url: '/earrings',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              icon: <FontAwesomeIcon icon={faFacebook} />,
              url: 'https://www.facebook.com/example',
            },
            {
              icon: <FontAwesomeIcon icon={faTwitter} />,
              url: 'https://twitter.com/example',
            },
            {
              icon: <FontAwesomeIcon icon={faInstagram} />,
              url: 'https://www.instagram.com/example',
            },
          ],
        },
      ]}
      bottom="© 2024 Jewellery Store. All Rights Reserved."
    />
  );
};
