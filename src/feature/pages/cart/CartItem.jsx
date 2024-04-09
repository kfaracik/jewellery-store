import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
        </div>
      </CardContent>
    </Card>
  );
};
