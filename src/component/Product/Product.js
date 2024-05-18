import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch('https://localhost:7257/Petrol/Petol', {
          method: 'GET',
          mode: 'cors', // Chế độ CORS
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        

        setProducts(data || []); // Đảm bảo data.products tồn tại
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>edit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{product.id}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{product.name}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{product.price}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}><Link to={`/edit/id=${product.id}`}>edit</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Product;
