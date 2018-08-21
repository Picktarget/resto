<template>
<div class="home">
  <MyCarousel></MyCarousel>
  <Wordtitle content="我们在哪里"></Wordtitle>
  <div class="map-box map"></div>
  <div class="map-box bussiness-hours"></div> 
  <Wordtitle content="企业简介"></Wordtitle>
  <div class="map-box bussiness-hours"></div> 
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyCarousel from "@/components/Carousel.vue";
import Wordtitle from "@/components/Wordtitle.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    MyCarousel,
    Wordtitle
  }
};
</script>
<style lang="less" scoped>
.map-box {
  width: 1200px;
  margin: 0 auto;
  background-color: orange;
  margin-bottom: 34px;
  &.map {
    height: 365px;
  }
  &.bussiness-hours {
    height: 205px;
  }
}
</style>


