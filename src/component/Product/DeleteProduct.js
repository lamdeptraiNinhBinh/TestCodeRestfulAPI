import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { deleteItem } from "../../Api/handleApi";

function DeleteProduct() {
  const { id } = useParams();
  console.log(id)
  const [deleteIt, setDeleteIt] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await deleteItem(`https://localhost:7257/Petrol/Petol/delete?${id}`);
        setDeleteIt(true);
        // setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      {deleteIt ? (
        <div>Product will be deleted.</div>
      ) : (
        <div>DeleteProduct</div>
      )}
    </>
  );
}

export default DeleteProduct;
