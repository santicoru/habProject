import axios from 'axios';

export function rate(formData, productId) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/rateProduct/${productId}`, formData);
}
