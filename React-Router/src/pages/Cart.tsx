import React from 'react';
import { Container, Typography, Box, List, Button } from '@mui/material';
import { useAppSelector } from '@/store';
import { useWindowDimensions } from '@/hooks';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  // Assuming cart items are stored in state.cart.cart.carts
  const cartItems = useAppSelector((state) => state.cart.cart.carts);
  const { width } = useWindowDimensions();
  const isMobile = width < 600;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <Box>
          <List>
            {cartItems.map((item) => (
              <Box
                key={item.id}
                sx={{
                  mb: 2,
                  border: '1px solid #ccc',
                  borderRadius: 1,
                  p: 2,
                }}
              >
                <Typography variant="subtitle1">
                  Cart ID: {item.id} | User ID: {item.userId}
                </Typography>
                <Typography variant="body2">Date: {item.date}</Typography>
                {item.products && item.products.length > 0 && (
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="subtitle2">Products:</Typography>
                    {item.products.map((prod, idx) => (
                      <Box key={idx} sx={{ ml: 2 }}>
                        <Typography variant="body2">
                          Product ID: {prod.productId} | Quantity: {prod.quantity}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ))}
          </List>
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              size={isMobile ? 'small' : 'medium'}
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default Cart;
