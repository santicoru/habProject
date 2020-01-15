import axios from 'axios';

export function createPack({ createP }) {
  return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/packageP`, createP);
}

export function getCodePack({ getCode }) {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/packageP/${getCode}`);
}

export function getPack() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/packageP`);
}

export function updateProductPack(idProductPack, formData) {
  return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/packageP/${idProductPack}`, formData)
}