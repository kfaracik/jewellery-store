import React from "react";
import "rc-footer/assets/index.css";
import Footer from "rc-footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export const AppFooter = () => {
  return (
    <Footer
      backgroundColor="#808080"
      style={{ borderRadius: 12 }}
      columns={[
        {
          title: "Company",
          items: [
            {
              title: "About Us",
              url: "/about-us",
            },
            {
              title: "Contact",
              url: "/contact",
            },
            {
              title: "News",
              url: "/",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              title: "Rings",
              url: "/products",
            },
            {
              title: "Necklaces",
              url: "/products",
            },
            {
              title: "Earrings",
              url: "/products",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              icon: <FontAwesomeIcon icon={faFacebook} />,
              url: "https://www.facebook.com/example",
            },
            {
              icon: <FontAwesomeIcon icon={faTwitter} />,
              url: "https://twitter.com/example",
            },
            {
              icon: <FontAwesomeIcon icon={faInstagram} />,
              url: "https://www.instagram.com/example",
            },
          ],
        },
      ]}
      bottom="© 2024 Jewellery Store. All Rights Reserved."
    />
  );
};
