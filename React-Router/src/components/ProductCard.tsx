import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/product"; // Ensure Product type is correctly defined
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card 
      sx={{ maxWidth: 345, transition: "0.3s", "&:hover": { transform: "scale(1.05)" } }} 
      onClick={handleClick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: "contain", padding: 2 }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
