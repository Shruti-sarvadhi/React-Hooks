import React, { useEffect, useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProducts } from '@/store/slices/product/productSlice';
import { Link } from 'react-router-dom';
import { useDebounce } from '@/hooks';

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.product.product);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on the debounced search query.
  const filteredProducts = useMemo(() => {
    if (!debouncedSearchQuery) return products;
    return products.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [debouncedSearchQuery, products]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        All Products
      </Typography>
      
      {/* Search bar */}
      <Box sx={{ mb: 4 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      
      {loading ? (
        <Typography variant="body1">Loading products...</Typography>
      ) : error ? (
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain', p: 1 }}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    component={Link}
                    to={`/product/${product.id}`}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Products;
