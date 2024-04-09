import React from "react";
import "./HomePage.css";
import Divider from "@mui/material/Divider";
import collectionImg from "../../../assets/collection/collection.webp";
import { JewelryStoreTimeline } from "./components/Timeline";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import StorefrontIcon from "@mui/icons-material/Storefront";

export const HomePage = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="content">
        <div className="header">
          <h1>Welcome to Our Jewelry Store</h1>
          <p>Discover Our Latest Collection</p>
        </div>
        <div className="collection">
          <h2>New Arrival</h2>
          <div className="collection-items">
            <div className="collection-item">
              <div className="image-container">
                <img
                  src={collectionImg}
                  alt="New jewelry collection"
                  className="collection-image"
                />
              </div>
              <div className="product-description">
                <p>
                  Product Description. This unique bracelet is a perfect blend of
                  elegance and style. Crafted from the highest quality 925
                  sterling silver, adorned with delicate Swarovski crystals, this
                  piece of jewelry will captivate any woman. Ideal for special
                  occasions such as weddings, engagements, or important business
                  meetings. Its exceptionally refined design makes this bracelet a
                  perfect addition to any wardrobe. Treat yourself to luxury and
                  sophistication with this exceptional jewelry piece that catches
                  the eye and adds sparkle to every outfit.
                </p>
              </div>
            </div>
            <div className="collection-item">
              <div className="image-container">
                <img
                  src={collectionImg}
                  alt="New jewelry collection"
                  className="collection-image"
                />
              </div>
              <div className="product-description">
                <p>
                  Product Description. This unique bracelet is a perfect blend of
                  elegance and style. Crafted from the highest quality 925
                  sterling silver, adorned with delicate Swarovski crystals, this
                  piece of jewelry will captivate any woman. Ideal for special
                  occasions such as weddings, engagements, or important business
                  meetings. Its exceptionally refined design makes this bracelet a
                  perfect addition to any wardrobe. Treat yourself to luxury and
                  sophistication with this exceptional jewelry piece that catches
                  the eye and adds sparkle to every outfit.
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <h2>Collection history</h2>
          <JewelryStoreTimeline />
          <Divider />
          <p className="product-description">
            Our journey began with a passion for crafting exquisite jewelry
            pieces that tell stories and evoke emotions. Inspired by the beauty
            of nature, the elegance of classic designs, and the allure of modern
            trends, we embarked on a creative exploration to bring our vision to
            life. Months of meticulous planning, sketching, and sourcing the
            finest materials culminated in the birth of our collection. Each
            piece is a labor of love, meticulously crafted by skilled artisans
            who pour their heart and soul into every detail. From the initial
            concept to the final execution, we spared no effort to ensure that
            each jewelry piece reflects our commitment to quality,
            craftsmanship, and timeless beauty. Every gemstone is carefully
            selected for its clarity, color, and brilliance, while every metal
            setting is crafted with precision and care. As our collection
            evolved, so did our dedication to creating jewelry that celebrates
            life's special moments and enhances the beauty of those who wear it.
            With every piece, we strive to create a connection between the
            wearer and the jewelry, a bond that transcends time and space.
            Today, we are proud to present our collection, a testament to our
            passion for excellence and our dedication to creating jewelry that
            inspires, delights, and enchants. We invite you to explore our world
            of beauty, elegance, and sophistication, and discover the perfect
            piece that speaks to your heart.
          </p>
        </div>
        <Divider />
        <div className="about">
          <h2>Our Mission</h2>
          <p>
            Welcome to our jewelry store! We are passionate about creating
            stunning and timeless jewelry pieces that reflect the beauty of life
            and love.
          </p>
          <p>
            Explore our collection and find the perfect piece for every
            occasion.
          </p>
          <p>
            If you have your own project in mind, feel free to{" "}
            <Button
              variant="outlined"
              startIcon={<ContactMailIcon />}
              href="/contact"
            >
              Contact Us
            </Button>{" "}
            and let us know your ideas! You can also browse our available items
            in our{" "}
            <Button
              variant="outlined"
              startIcon={<StorefrontIcon />}
              href="/products"
            >
              Products
            </Button>{" "}
            section.
          </p>
        </div>
        <div className="buttons-container">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ShoppingCartIcon />}
            href="/cart"
          >
            View Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
