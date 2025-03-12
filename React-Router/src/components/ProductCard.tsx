import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types/product"; // Make sure your Product type is defined

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded overflow-hidden transform transition duration-300 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-2"
      />
      <div className="p-4">
        <h6 className="text-lg font-semibold">{product.title}</h6>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
