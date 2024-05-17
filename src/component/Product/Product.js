import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      //
      setProducts(data.products);
    };

    fetchApi();
  }, []);
  return (
    <>
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Product;
