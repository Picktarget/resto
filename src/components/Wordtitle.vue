<template>
  <div class="word-box">
      <span>{{content}}</span>
      <span class="horizitoalLine"></span>
  </div>
</template>
<script>
export default {
  name: "Wordtitle",
  props: {
    content: String
  }
};
</script>
<style lang="less" scoped>
.word-box {
  font-size: 26px;
  position: relative;
  color: #bab280;
  margin-bottom: 32px;
  .horizitoalLine {
    display: block;
    position: absolute;
    width: 45px;
    height: 3px;
    background-color: #bab280;
    left: 50%;
    margin-left: -23px;
  }
}
</style>
