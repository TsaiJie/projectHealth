<template>
  <div id="app">

    <div class="left">
      <div class="main">
        <MapBoxGlChart class="mapbox-chart"></MapBoxGlChart>
<!--        <div class="mainBox"></div>-->
<!--        <div class="mainBox2"></div>-->
      </div>

      <div class="footer">
        <div class="footerBox"></div>
        <parallel-chart :parallelData="chartsData.parallelData.data" class="parallel_chart"></parallel-chart>

      </div>
    </div>
    <div class="right">
      <div class="rightBox">
      </div>
      <div class="rightBox2">

      </div>
    </div>

  </div>
</template>

<script>

	import DataProxy from "./dataProvider/DataProxy";
  import ParallelChart from "./components/ParallelChart";
  import MapBoxGlChart from "./components/MapBoxGlChart";
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
				},
        mapData:{},

			}
		},
		components: {
			ParallelChart,
			MapBoxGlChart
		},
		created: async function() {
				await DataProxy.initChartsData(this.chartsData);
		},

	}
</script>

<style lang="less">

/*为body指定高度 子元素都依赖body的高度*/
  html,body{
    height:100%;
    margin: 0;
    padding: 0;
    #app {
      .mapbox-chart {
        /*top: 0;*/
        /*z-index:0;*/
        position: absolute;
        /*left: 20%;*/
      }
      height: 100%;
      .left {
        width: 70%;
        height: 100%;
        /*background-color: #ccc;*/
        float: left;
      }
      .main {
        /*position: relative;*/
        float: left;
        width: 100%;
        /*background-color: orange;*/
        height: 50%;
        .mainBox {
          position: absolute;
          height: 50%;
          width: 30%;
          background-color: red;
          opacity: 0.4;
        }
      }
      .footer {
        /*position: relative;*/
        float: left;
        width: 100%;
        /*background-color: #fff;*/
        height: 50%;
        .footerBox {
          position: absolute;
          height: 50%;
          width: 30%;
          background-color: deepskyblue;
          opacity: 0.4;
        }
        .parallel_chart {
          position: absolute;
          left: 33%;
        }
      }
      .right {
        /*position: relative;*/
        width: 30%;
        /*background-color: yellowgreen;*/
        height: 100%;
        float: right;
        .rightBox{
          position: absolute;
          width: 30%;
          height: 50%;
          background-color: yellow;
          opacity: 0.4;
        }
        .rightBox2 {
          position: absolute;
          width: 30%;
          height: 50%;
          top: 50%;
          background-color: orangered;
          opacity: 0.4;
        }
      }

    }
  }

  .footerBox {

  }


</style>
