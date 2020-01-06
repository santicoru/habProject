import axios from 'axios';

export function getCatalogue() {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/catalogue`);
}

export function getCatalogueProduct(productId) {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/catalogue/${productId}`);
}