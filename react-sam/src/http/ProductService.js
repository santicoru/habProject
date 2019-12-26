import axios from 'axios';

export function createProductCo({ name, description, category, file, init_price, discount, final_price }) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
    file,
    datos: {
      name,
      description,
      category,
      init_price,
      discount,
      final_price
    }
  },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Accept": "application/json",
        "type": "formData"
      }
    })
}