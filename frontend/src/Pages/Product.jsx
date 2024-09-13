import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Correctly import useParams
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Bredcrum/Breadcrum'; // Correct the import path
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProducts/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productID } = useParams();
  
  const product = all_product.find((e) => e.id === Number(productID));

  if (!product) return <div>Product not found</div>; // Handle case where product is not found

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
}

export default Product;