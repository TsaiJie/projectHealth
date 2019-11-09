//从ServerDataProvider获取源数据，从APP获取数据对象，把对源数据进行处理之后绑定到数据对象上
import ServerDataProvider from "./ServerDataProvider";

import pubSub from "pubsub-js";
export default class DataProxy {
	static async initChartsData (chartsData) {
			ServerDataProvider.getDefaultTNBJson().then(
					(response) => {
						// chartsData.baseData = response.data;
						// console.log(chartsData);
						// //从源数据中抽取初平行坐标需要的数据
						chartsData.parallelData.data = response.data.parallel;
						// console.log(chartsData);
						// console.log(chartsData);
						// console.log(response.data);

					},
					(error) => {
						console.log('unable to get group data from sever')
					}
			)
	}

	static async getDataPW(chartsData){

		pubSub.subscribe('data_PW', (dataName,data) => {
			console.log(dataName);
			console.log(data);
			chartsData.parallelData.data = data.parallel;

		})
	}

	static async getDataBC(chartsData){
		pubSub.subscribe('data_BC', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}
	static async getDataJY(chartsData){
		pubSub.subscribe('data_JY', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

	static async getDataZT(chartsData){
		pubSub.subscribe('data_ZT', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

	static async getDataYX(chartsData){
		pubSub.subscribe('data_YX', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

	static async getDataFC(chartsData){
		pubSub.subscribe('data_FC', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

	static async getDataST(chartsData){
		pubSub.subscribe('data_ST', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

	static async getDataAX(chartsData){
		pubSub.subscribe('data_AX', (dataName,data) => {
			console.log(dataName);
			chartsData.parallelData.data = data.parallel;
		})
	}

}


