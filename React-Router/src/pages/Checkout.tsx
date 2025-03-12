import React from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useNotificationContext } from '@/context/NotificationContext';
import { useNavigate } from 'react-router-dom';

interface CheckoutFormData {
  address: string;
  city: string;
  postalCode: string;
}

const Checkout: React.FC = () => {
  // Using the notification context to add notifications
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  // Persist checkout data in local storage
  const [checkoutData, setCheckoutData] = useLocalStorage<CheckoutFormData>('checkoutData', {
    address: '',
    city: '',
    postalCode: '',
  });

  // Initialize react-hook-form with default values from local storage
  const { register, handleSubmit, reset } = useForm<CheckoutFormData>({
    defaultValues: checkoutData,
  });

  const onSubmit = (data: CheckoutFormData) => {
    // Process checkout (e.g., submit order to API)
    alert('Checkout data:' + JSON.stringify(data));
    
    // Notify user of successful order placement
    addNotification({ type: 'success', message: 'Order placed successfully!' });
    
    // Clear the form and update local storage with empty values
    const emptyData = { address: '', city: '', postalCode: '' };
    reset(emptyData);
    setCheckoutData(emptyData);
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Checkout
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('address', { required: true })}
            label="Address"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            {...register('city', { required: true })}
            label="City"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            {...register('postalCode', { required: true })}
            label="Postal Code"
            fullWidth
            margin="normal"
            required
          />
          <Box mt={2} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Place Order
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Checkout;
