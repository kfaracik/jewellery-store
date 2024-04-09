import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import { AnimatePresence, motion } from "framer-motion";

const AnimatedCard = styled(motion(Card))(({ theme }) => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

export const Product = (props) => {
  const { id, productName, price, productImage, rating } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const cartItemCount = cartItems[id];

  return (
    <AnimatePresence>
      {isLoaded && (
        <AnimatedCard
          className="product"
          sx={{ backgroundColor: '#f0f0f0', borderRadius: '10px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <CardMedia
            component="img"
            height="200"
            image={productImage}
            alt={productName}
          />
          <CardContent className="description">
            <Rating name="customized-color" value={rating} precision={0.5} sx={{ mt: 1 }} />
            <p>
              <b>{productName}</b>
            </p>
            <p> ${price}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(id)}
              sx={{ mt: 1 }}
            >
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </Button>
          </CardContent>
        </AnimatedCard>
      )}
    </AnimatePresence>
  );
};
