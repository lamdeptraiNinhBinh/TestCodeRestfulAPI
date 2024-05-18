import React, { useState } from "react";
import { useParams } from "react-router";
import { deleteItem } from "../../Api/handleApi";

function DeleteProduct() {
  const { id } = useParams();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await deleteItem(`${id}`);
        const data = await response.json();
        setDeleted(true);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      {deleted ? (
        <div>Product will be deleted.</div>
      ) : (
        <div>DeleteProduct</div>
      )}
    </>
  );
}

export default DeleteProduct;
