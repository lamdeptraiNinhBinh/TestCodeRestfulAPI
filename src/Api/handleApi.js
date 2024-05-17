const url = 'https://localhost:7257/Petrol/Petol';

export const put = async (values) => {
    const init = {
        method: 'PUT', // Cập nhật thông tin 
        
        headers: {
        'Content-Type': 'application/json',  // Loại dữ liệu nhận về
        Authorization: 'TOKEN' // Token được server cung cấp để xác thực
        },
    
        body: JSON.stringify(values),
    }
    const response = await fetch(url, init);
    const data = response.json();

    return data;
}
//

export const post = async (values) => {
    const options = {
        method: 'POST',
        mode: 'cors', // Chế độ CORS
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    };
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}
//