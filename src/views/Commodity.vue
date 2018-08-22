<template>
  <div class="commodity">
    <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img" @click="purchase = true">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
       <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/sp.png" alt="" srcset="">
      </div>
      <div class="commodity-info">
        <p class="name">麻辣小龙虾</p>
        <p class="price">
          <span class="line"><span>￥</span>198</span>
        </p>
        <p class="description">麻辣鲜香，柔嫩美味</p>
      </div>
    </div>
    <Modal
        v-model="purchase"
        width="960"
        class-name="vertical-center-modal"
        :footer-hide="true"
        :mask-closable="false">
        <div class="modal-inner">
          <div class="left"></div>
          <div class="right"></div>
        </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Commodity",
  data() {
    return {
      purchase: false
    };
  }
};
</script>

<style lang="less" scoped>
.commodity {
  width: 1200px;
  margin: 0 auto;
  margin-top: 55px;
  &:after {
    content: "";
    clear: both;
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
  }
  .commodity-box {
    width: 223px;
    height: 389px;
    padding-bottom: 78px;
    float: left;
    margin: 0 8px;
    .commodity-img {
      width: 223px;
      height: 201px;
      background-color: #f4f4f4;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      img {
        vertical-align: middle;
      }
    }
    .commodity-info {
      margin-top: 15px;
      p.name {
        font-size: 20px;
        color: #333;
        font-weight: 600;
      }
      p.price {
        font-size: 14px;
        color: red;
        margin: 12px 0;
        span.line {
          display: block;
          width: 120px;
          margin: 0 auto;
          border-bottom: 1px solid #333;
          text-align: center;
        }
      }
      p.description {
        font-size: 16px;
        color: #333;
        font-weight: 500;
      }
    }
  }
}
</style>
<style lang="less">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
  .modal-inner {
    padding: 35px;
    &:after {
      content: "";
      clear: both;
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
    .left {
      float: left;
      width: 580px;
      height: 420px;
      background-color: #f4f4f4;
    }
  }
}
</style>

