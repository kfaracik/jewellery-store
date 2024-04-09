import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./CartItem.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <Card className="cartItem">
      <CardMedia
        component="img"
        height="140"
        image={productImage}
        alt={productName}
        className="productImage"
      />
           <Rating name="no-value" value={null} />

      <CardContent className="description">
        <Typography variant="body1">
          <b>{productName}</b>
        </Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="btn">
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="quantityInput"
          />
          <button onClick={() => addToCart(id)} className="btn">
            +
          </button>
          <Typography component="legend">Custom icon and color</Typography>
          <Rating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) =>
              `${value} Heart${value !== 1 ? "s" : ""}`
            }
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          
           <Rating name="no-value" value={null} />
        </div>
      </CardContent>
    </Card>
  );
};
