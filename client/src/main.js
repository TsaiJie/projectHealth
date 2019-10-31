import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'

import $ from 'jquery'
import 'jquery/dist/jquery.min.js'
//使用mapBoxGl
import mapBoxGl from 'mapbox-gl'
Vue.prototype.mbgl = mapBoxGl;

Vue.prototype.$echarts = echarts;
Vue.prototype.$ = $;

Vue.prototype.$chartData = {
	baseData: {},
	parallelData: {
		data:[]
	}
};
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
