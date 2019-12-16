import axios from 'axios';

export function getSam() {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api`)
}