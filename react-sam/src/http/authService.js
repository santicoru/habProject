import axios from 'axios';

export function register({ user_type, name, surname, email, password, phone, birth_date, document_type, document_number }) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/account`, {
		user_type,
		name,
		surname,
		email,
		password,
		phone,
		birth_date,
		document_type,
		document_number,
	});
}

export function login(email, password) {
	return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth`, {
		email,
		password
	});
}