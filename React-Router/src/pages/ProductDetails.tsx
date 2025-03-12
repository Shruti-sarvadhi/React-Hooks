// src/pages/ProductDetails.tsx
import React, { useEffect } from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProductById } from '@/store/slices/product/productSlice';
import { addCart } from '@/store';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedProduct, loading, error } = useAppSelector((state) => state.product.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [id, dispatch]);

  return (
    <Container maxWidth="md">
      {loading ? (
        <Typography>Loading product details...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : selectedProduct ? (
        <Paper sx={{ p: 4, mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            {selectedProduct.title}
          </Typography>
          <Box
            component="img"
            src={selectedProduct.image}
            alt={selectedProduct.title}
            sx={{ width: '100%', maxHeight: 400, objectFit: 'contain' }}
          />
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            ${selectedProduct.price}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {selectedProduct.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            onClick={() => {
              const cartItem = {
                userId: 1, // Replace with actual userId
                date: new Date().toISOString(),
                products: [{ productId: selectedProduct.id, quantity: 1 }]
              };
              dispatch(addCart(cartItem));
              alert('Product added to cart!');
            }}
          >
            Add to Cart
          </Button>
        </Paper>
      ) : (
        <Typography>No product found.</Typography>
      )}
    </Container>
  );
};

export default ProductDetails;
