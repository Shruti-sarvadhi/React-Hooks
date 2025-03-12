import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Typography,
  Container,
  Box,
  Button,
  
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store";
import { fetchProducts } from "@/store/slices/product/productSlice";
import {ProductCard,Footer} from "@/components"

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.product.product);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleShopNow = () => {
    navigate("/products");
  };

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('https://picsum.photos/1920/1080?random=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to the E-Commerce Store
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Discover the best products at unbeatable prices.
        </Typography>
        <Button variant="contained" color="secondary" size="large" onClick={handleShopNow}>
          Shop Now
        </Button>
      </Box>

      {/* Featured Products Section */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Featured Products
        </Typography>
        {loading ? (
          <Typography align="center">Loading products...</Typography>
        ) : error ? (
          <Typography align="center" color="error">
            {error}
          </Typography>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        )}
      </Container>

      {/* Nested routes will render here */}
      <Outlet />

      {/* Footer Component */}
      <Footer />
    </>
  );
};

export default Home;
