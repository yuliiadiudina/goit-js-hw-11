import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '38024534-bf97a1c6c6875f539670f21a6';

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};



