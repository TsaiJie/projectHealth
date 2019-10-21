import axios from 'axios';

const service = axios.create({
	headers: {
		'Cache-Control': 'no-cache'
	}
});
//从服务器获取数据
export default class ServerDataProvider {
	static getTNBJson() {
		return service.get('http://127.0.0.1:3000/TNBData');
	}

}
