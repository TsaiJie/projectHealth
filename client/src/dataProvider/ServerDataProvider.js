import axios from 'axios';


//从服务器获取数据
export default class ServerDataProvider {
	static getTNBJson() {
		return axios.get('http://127.0.0.1:3000/TNB_BC');
	}
	static getMapData() {
		return axios.get('http://127.0.0.1:3000/mianyangMap');
	}

}
