const url = "https://localhost:7257/Petrol/Petol/";

export const put = async (path, values) => {
  const init = {
    method: "PUT", // Cập nhật thông tin
    mode: "cors", // Chế độ CORS

    headers: {
      "Content-Type": "application/json", // Loại dữ liệu nhận về
      Authorization: "TOKEN", // Token được server cung cấp để xác thực
    },

    body: JSON.stringify(values),
  };
  const response = await fetch(url + path, init);
  const data = response.json();

  return data;
};
//

export const post = async (values) => {
  const options = {
    method: "POST",
    mode: "cors", // Chế độ CORS
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  const response = await fetch(url, options);
  const data = response.json();

  return data;
};
//

export const get = async (path) => {
  const response = await fetch(url + path, {
    method: "GET",
    mode: "cors", // Chế độ CORS
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = response.json();

  return data;
};

export const deleteItem = async (path) => {
  const deleteMethod = {
    method: "DELETE", // Method itself
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    // No need to have body, because we don't send nothing to the server.
  };
  // Make the HTTP Delete call using fetch api

  const response = await fetch(url + path, deleteMethod);
  
  const data = response.json();

  return data;
};
