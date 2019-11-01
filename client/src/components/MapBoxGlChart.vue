<template>
    <div id="map"></div>
</template>

<script>
	import ServerDataProvider from "../dataProvider/ServerDataProvider";
	import * as d3 from 'd3';
	import axios from 'axios';
	export default {
		name: "MapBoxGlChart",
		mounted(){
			this.initMapChart();
		},
		methods: {
			initMapChart(){
        let width = 600,
            height = 600;
        let svg = d3.select("#map").append("svg")
                    .attr("width", width)
                    .attr("height", height);
      //  定义地图的投影
        let projection = d3.geoMercator()
                          .center([105,30])
                          .scale(10000)
                          .translate([width/2, height/0.95]);

      //  定义地理路径生成器
        let path = d3.geoPath().projection(projection);//设定投影
      //  请求mianyang.json
        axios.get("../mianyang.json").then((response)=>{
        	const geoRoot = response.data;
					let groups = svg.append("g");
					//绘制地图
					groups.selectAll("path")
					.data(geoRoot.features)
					.enter()
					.append("path")
					.attr("class", "community")
					.style("fill", function (d,i) {
						return "#aaa";
					})
					.attr("stroke","black")
					.attr("d", path);

					//为地图绑定事件
					groups.selectAll("path")
                .on("click",  (d,i) => {
                  //点击前先让所有的区域的颜色都恢复为默认颜色
                  let communities = d3.selectAll(".community")["_groups"][0];
                  for (let j = 0 ; j < communities.length; j++){
                    if (j===i){
                      communities[j].style.transition = "0.9s";
                      communities[j].style.fill = "#eee";
                      continue;
                    }
                    communities[j].style.transition = "0.9s";
                    communities[j].style.fill = "#aaa";
                  }
                  console.log(d);
                  this.getCurrentAreaJsonData(d);
                });
					//添加文字
					svg.selectAll("text")
					.data(geoRoot.features)
					.enter()
					.append("text")
					.attr("transform", function (d,i) {
						if (d.properties.id == "510726") {
							return "translate("+(path.centroid(d)[0]-40)+","+ (path.centroid(d)[1]+10)+")";
						}
						return "translate("+(path.centroid(d)[0]-20)+","+ (path.centroid(d)[1]+10)+")";
					})
					.text(function(d){
						return d.properties.name;
					});
        })

      },
			getCurrentAreaJsonData(Georoot) {
				switch (Georoot.properties.name) {
          case "平武县":
          	ServerDataProvider.getPWJson().then(response => {
          	  console.log(response.data)
            });
          	break;
          case "北川羌族自治县":
          	ServerDataProvider.getBCJson().then(response => {
          		console.log(response.data);
            });
            break;
					case "江油市":
						ServerDataProvider.getJYJson().then(response => {
							console.log(response.data);
						});
						break;
					case "梓潼县":
						ServerDataProvider.getZTJson().then(response => {
							console.log(response.data);
						});
						break;
					case "游仙区":
						ServerDataProvider.getYXJson().then(response => {
							console.log(response.data);
						});
						break;
					case "涪城区":
						ServerDataProvider.getFCJson().then(response => {
							console.log(response.data);
						});
						break;
					// case "盐亭县":
					// 	ServerDataProvider.getYTJson().then(response => {
					// 		console.log(response.data);
					// 	});
					// 	break;
					case "三台县":
						ServerDataProvider.getSTJson().then(response => {
							console.log(response.data);
						});
						break;
					case "安县":
						ServerDataProvider.getAXJson().then(response => {
							console.log(response.data);
						});
						break;

				}
      }
		}
	}
</script>

<style lang="less">
  .community:hover {
    cursor: pointer;
  }
</style>