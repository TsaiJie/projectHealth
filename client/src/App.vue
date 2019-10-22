<template>
  <div id="app">
    <div class="left">
      <div class="main">
      </div>

      <div class="footer">
        <div class="footerBox"></div>
        <parallel-chart :parallelData="chartsData.parallelData.data" class="parallel_chart"></parallel-chart>
      </div>
    </div>
    <div class="right">
    </div>

  </div>
</template>

<script>

	import DataProxy from "./dataProvider/DataProxy";
  import ParallelChart from "./components/ParallelChart";
  // import $ from "jQuery"
	export default {
		name: 'app',
		data() {
			return {
				chartsData: {
					baseData: {},
					parallelData: {
						data:[]
          }
				}
			}
		},
		components: {
			ParallelChart
		},
		created: async function() {
				await DataProxy.initChartsData(this.chartsData);
				console.log(this.$);

		},

	}
</script>

<style lang="less">

/*为body指定高度 子元素都依赖body的高度*/
  html,body{
    height:100%;
    #app {
      height: 100%;
      .left {
        width: 70%;
        height: 100%;
        background-color: #ccc;
        float: left;
      }
      .main {
        position: relative;
        float: left;
        width: 100%;
        background-color: orange;
        height: 50%;
      }
      .footer {
        position: relative;
        float: left;
        width: 100%;
        background-color: #fff;
        height: 50%;

        .parallel_chart {
          position: absolute;
          right: 1%;
        }
      }
      .right {
        position: relative;
        width: 30%;
        background-color: yellowgreen;
        height: 100%;
        float: right;
      }
    }
  }







  .footerBox {

  }


</style>
