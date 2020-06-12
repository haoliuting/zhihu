<template>
  <div class="wrapper">
    <h1>这是vue项目</h1>
    <h2>您当前的城市是：{{city}}</h2>
    <div id="main"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data() {
    return {
      city: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    getCity() {
      var _this=this;
      var map = new BMap.Map("main"); // 创建地图实例
      var point = new BMap.Point(116.524819, 39.930772); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

      var geolocation = new BMap.Geolocation();
      // 开启SDK辅助定位
      geolocation.enableSDKLocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          console.log(r);
          _this.city=r.address.city
        } else {
          alert("failed" + this.getStatus());
        }
      });
    }
  },
  mounted() {
    this.getCity();
  }
};
</script>
<style  scoped>
#main {
  width: 0px;
  height: 0px;
  overflow: hidden;
}
</style>
