import ProductGallery from "../Sections/ProductGallery";
import SimilarProducts from "../Sections/SimilarProducts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation()
  const product = location.state?.product

  return (
    <div>
      <ProductGallery pro={product}  />
      <SimilarProducts />
    </div>
  );
};

export default ProductDetails;
