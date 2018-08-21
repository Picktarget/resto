<template>
    <div class="header">
        <div class="left">
        <img alt="Vue logo" src="../assets/logo.png">
        </div>
        <div class="right">
        <ul class="top-menu">
            <li class="option dropdown">
            <Dropdown :transfer="true"  @on-click="changeLangEvent">
                <a href="javascript:void(0)">
                    {{ $t('language.name') }}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem name="zh-CN">简体中文</DropdownItem>
                    <DropdownItem name="es-US">English</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </li>
            <li class="option">
            <Icon type="ios-contact" :size="24"/>
            </li>
            <li class="option">
            <Icon type="ios-cart" :size="24"/>
            </li>
            <li class="option">
            <Icon type="ios-log-out" :size="24" />
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    changeLangEvent: function(name) {
      if (name === "zh-CN") {
        this.$i18n.locale = name; //关键语句
      } else {
        this.$i18n.locale = name; //关键语句
      }
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  width: 1200px;
  height: 64px;
  margin: 0 auto;
  font-size: 14px;
  .left,
  .right {
    float: left;
    height: 100%;
    width: 50%;
    line-height: 1;
  }
  .left {
    text-align: left;
    img {
      width: 50px;
      height: 50px;
      position: relative;
      top: 7px;
    }
  }
  .right {
    text-align: right;
    .top-menu {
      width: 100%;
      margin: 0;
      padding: 0;
      height: 100%;
      line-height: 64px;
      li.option {
        cursor: pointer;
        display: inline-block;
        padding: 0 12px;
        &.dropdown {
          text-align: left;
          line-height: 0;
        }
      }
    }
  }
}
</style>
