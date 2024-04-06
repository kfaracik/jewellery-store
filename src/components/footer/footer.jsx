import React from 'react';
import 'rc-footer/assets/index.css';
import Footer from 'rc-footer';

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
                icon: <i className="fab fa-facebook"></i>,
                url: 'https://www.facebook.com/example',
              },
              {
                icon: <i className="fab fa-twitter"></i>,
                url: 'https://twitter.com/example',
              },
              {
                icon: <i className="fab fa-instagram"></i>,
                url: 'https://www.instagram.com/example',
              },
            ],
          },
        ]}
        bottom="© 2024 Jewellery Store. All Rights Reserved."
      />
  );
};
