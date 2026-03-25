import React from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
          {product.discount}% OFF
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-gray-800 text-lg">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm line-through ml-2">
              ${(product.price * (1 + product.discount / 100)).toFixed(2)}
              
            </span>
          </div>
       
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;