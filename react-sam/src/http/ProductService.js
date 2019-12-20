import axios from 'axios';

export function createProductCo({ name, description, category, image, initPrice, discount, finalPrice }) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
    name,
    description,
    category,
    image,
    initPrice,
    discount,
    finalPrice,
  })
}