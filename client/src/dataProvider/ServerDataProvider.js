import axios from 'axios';


//从服务器获取数据
export default class ServerDataProvider {
	static getDefaultTNBJson() {
		return axios.get('http://127.0.0.1:3000/TNB_BC');
	}
	static getBCJson() {
		return axios.get('http://127.0.0.1:3000/TNB_BC');
	}
	static getFCJson() {
		return axios.get('http://127.0.0.1:3000/TNB_FC');
	}
	static getJYJson() {
		return axios.get('http://127.0.0.1:3000/TNB_JY');
	}
	static getPWJson() {
		return axios.get('http://127.0.0.1:3000/TNB_PW');
	}
	static getSTJson() {
		return axios.get('http://127.0.0.1:3000/TNB_ST');
	}
	static getYXJson() {
		return axios.get('http://127.0.0.1:3000/TNB_YX');
	}
	static getZTJson() {
		return axios.get('http://127.0.0.1:3000/TNB_ZT');
	}

	static getYTJson() {
		return axios.get('http://127.0.0.1:3000/TNB_YT');
	}
	static getAXJson() {
		return axios.get('http://127.0.0.1:3000/TNB_AX');
	}


}
