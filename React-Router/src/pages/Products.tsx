import React, { useEffect, useState, useMemo } from 'react';
import { Container, Typography, TextField, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/store';
import { fetchProducts } from '@/store/slices/product/productSlice';
import { useDebounce } from '@/hooks';
import ProductCard from '@/components/ProductCard';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
};

export default Products;
