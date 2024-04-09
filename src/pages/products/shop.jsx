import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import "./shop.css";
import { Pagination, Grid } from "@mui/material";

const CenteredContainer = ({ children }) => (
  <div className="centeredContainer">{children}</div>
);

export const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CenteredContainer>
      <div className="shop" style={{ marginLeft: "20%", marginRight: "20%" }}>
        <div className="searchBar">
          <TextField
            id="search"
            placeholder="Search"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            fullWidth
            size="large"
            InputProps={{ style: { fontSize: 16 } }}
            style={{ margin: "32px 0" }}
          />
        </div>

        <Grid container spacing={3} justifyContent="center">
          {filteredProducts.length === 0 ? (
            <div className="noResults">
              <SearchIcon className="searchIcon" />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                No results found
              </Typography>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product data={product} />
              </Grid>
            ))
          )}
        </Grid>

        <div style={{ marginTop: "20px" }}>
          <Pagination count={3} defaultPage={1} boundaryCount={2} />
        </div>
      </div>
    </CenteredContainer>
  );
};
