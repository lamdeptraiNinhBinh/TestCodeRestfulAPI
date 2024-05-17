const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

export const patch = async () => {
    const init = {
        method: 'PATCH', // Cập nhật thông tin 
        
        headers: {
        'Content-Type': 'application/json',  // Loại dữ liệu nhận về
        Authorization: 'TOKEN' // Token được server cung cấp để xác thực
        },
    
        body: JSON.stringify({ creature: "poultry" }),
    }
    const response = await fetch(url, init);
    const data = response.json();

    return data;
}
//

export const post = async (values) => {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
    };
    const response = await fetch(url, options);
    const data = response.json();

    return data;
}
//