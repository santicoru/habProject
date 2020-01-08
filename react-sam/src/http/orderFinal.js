import axios from 'axios';

export function orderF({ orderFinal }) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/orderFinal`, orderFinal);
}
