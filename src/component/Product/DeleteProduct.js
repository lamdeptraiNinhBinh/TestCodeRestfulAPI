import React, { useState } from "react";
import { useParams } from "react-router";
import { deleteItem } from "../../Api/handleApi";

function DeleteProduct() {
  const { id } = useParams();
  const [deleteItem, setDeleteItem] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await deleteItem(`${id}`);
        const data = await response.json();
        setDeleteItem(true);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchApi();
  }, [id]);

  return (
    <>
      {deleteItem ? (
        <div>Product will be deleted.</div>
      ) : (
        <div>DeleteProduct</div>
      )}
    </>
  );
}

export default DeleteProduct;
