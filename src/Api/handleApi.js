const url = "https://localhost:7257/Petrol/Petol/";

export const put = async (url, values) => {
  const init = {
    method: "PUT", // Cập nhật thông tin
    mode: "cors", // Chế độ CORS

    headers: {
      "Content-Type": "application/json", // Loại dữ liệu nhận về
      Authorization: "TOKEN", // Token được server cung cấp để xác thực
    },

    body: JSON.stringify(values),
  };

  let response = '';

  try {
    response = await fetch(url, init);

    // Kiểm tra nếu trạng thái phản hồi là OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Thử phân tích thân phản hồi thành JSON
    const data = await response.json();
    return data;
  } catch (error) {
    // Log lỗi và phản hồi để debug
    console.error('Fetch error:', error);

    // Debug bổ sung: Kiểm tra văn bản phản hồi nếu nó không phải JSON
    if (response) {
      const responseText = await response.text();
      console.error('Response text:', responseText);
    }

    // Ném lại lỗi hoặc xử lý nó thích hợp
    throw error;
  }
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

export const deleteItem = async (url) => {
  const deleteMethod = {
    method: "DELETE", // Method itself
    mode: "cors", // Chế độ CORS
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
    // No need to have body, because we don't send nothing to the server.
  };
  // Make the HTTP Delete call using fetch api

  const response = await fetch(url, deleteMethod);
  
  const data = response.json();

  return data;
};
