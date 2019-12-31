import axios from 'axios';

export function createProductCo(formData, config) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product`, formData, config)
}

export function getProductCo() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product`);
}

export function deleteProduct(productId) {
  return axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/product/${productId}`);
}

export function updateProduct(productId, formData) {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/product/${productId}`, formData)
}