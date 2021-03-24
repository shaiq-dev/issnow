import axios from 'axios';
import store from '../store'

const axiosInstance = axios.create({
	baseURL: store.serverURL,
});
export default axiosInstance;
