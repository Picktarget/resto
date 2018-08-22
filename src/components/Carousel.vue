<template>
    <Carousel autoplay v-model="value1" loop>
        <CarouselItem>
        <div class="demo-carousel">
          <img src="../assets/1.jpg" alt="" srcset="">
        </div>
        </CarouselItem>
        <CarouselItem>
        <div class="demo-carousel">
           <img src="../assets/2.jpg" alt="" srcset="">
        </div>
        </CarouselItem>
        <CarouselItem>
        <div class="demo-carousel">
           <img src="../assets/3.jpg" alt="" srcset="">
        </div>
        </CarouselItem>
        <CarouselItem>
           <div class="demo-carousel">
            <img src="../assets/2.jpg" alt="" srcset="">
           </div>
        </CarouselItem>
    </Carousel>  
</template>
<script>
export default {
  name: "MyCarousel",
  data() {
    return {
      value1: 0
    };
  }
};
</script>
<style lang="less" scoped>
.ivu-carousel {
  max-width: 1920px;
  height: 375px;
  background-color: slategray;
  margin: 20px 0 55px 0;
}
.demo-carousel {
  height: 375px;
  line-height: 375px;
  font-size: 14px;
  color: #fff;
}
</style>


