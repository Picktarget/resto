<template>
	<div class="navigate">
			<ul class="menu-bar">
					<li class="menu">
							<router-link to="/home">
								<span class="title">首页</span>
							</router-link>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(12)">糕点</span>
							<ul class="sub">
									<li v-for="item in test.submenu" :key="item.id" v-on:click="routerPush(test.id,item.id)">{{item.id}}</li>
							</ul>
					</li>
					<li class="menu">
							<router-link to="/about">
									<span class="title">小食</span>
							</router-link>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(3)">果干</span>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(4)">坚果</span>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(5)">牛奶</span>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(6)">咖啡</span>
					</li>
					<li class="menu">
							<span class="title" v-on:click="routerPush(7)">酒水</span>
					</li>
			</ul>
	</div>
</template>
<script>
export default {
  name: "Navigate",
  props: {
    menu: Array
  },
  data: function() {
    return {
      test: {
        id: 12,
        submenu: [
          {
            id: 1
          },
          { id: 2 },
          { id: 3 }
        ]
      }
    };
  },
  methods: {
    routerPush: function(id, sub) {
      if (sub) {
        // console.log(id + "_" + sub);
        this.$router.push({
          name: "about",
          params: { id: sub }
        });
      } else {
        this.$router.push({ name: "about" });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.navigate {
  width: 1200px;
  margin: 0 auto;
  ul.menu-bar {
    width: 100%;
    margin: 0;
    padding: 0;
    text-align: left;
    li.menu {
      display: inline-block;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      width: 32px;
      font-size: 16px;
      margin: 0 52px;
      span {
        padding: 2px 0;
        &:hover {
          border-bottom: 2px solid #bab280;
          color: #bab280;
        }
      }
      a {
        padding: 2px 0;
        color: #333;
      }
      .router-link-active {
        border-bottom: 2px solid #bab280;
        color: #bab280;
      }
      &:hover {
        ul.sub {
          display: block;
          max-height: 250px;
          overflow-y: auto;
          animation: slide-down 0.2s ease-in;
          -webkit-animation: slide-down 0.2s ease-in;
          transition: 250px 0.3s ease-in;
          transform-origin: 100% 0;
        }
      }
      ul.sub {
        &:hover {
          display: block;
        }
        padding: 12px 0;
        display: none;
        position: absolute;
        z-index: 9;
        width: 1200px;
        left: -137px;
        text-align: left;
        background-color: #fff;
        box-shadow: 2px 2px 2px #f8f8f8;
        border: 1px solid #f8f8f8;
        border-top: 0;
        li {
          display: inline-block;
          padding: 12px 52px;
          &:hover {
            color: #bab280;
          }
        }
      }
    }
  }
}
@-webkit-keyframes slide-down {
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes slide-down {
  0% {
    transform: scale(1, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
