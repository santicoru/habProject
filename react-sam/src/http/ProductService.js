import axios from 'axios';

export function createProductCo(formData, config) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product`, formData, config)
}

// export function getProductCo() {
//   return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product`);
// }

async function getProductCo() {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/api/product`
  );
  console.log(response.data);
  return response.data
}

export { getProductCo }