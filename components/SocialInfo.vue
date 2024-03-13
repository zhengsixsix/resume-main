<template>
  <div class="socialInfo">
    <div className="title">社交信息</div>
    <div class="item" v-for="item of dataLst" :key="item.name">
      {{ item.name }}
      <a :href="item.link" target="_blank"> {{ item.link }} </a>
    </div>
  </div>
</template>
<script setup>
const dataLst = [
  { name: "GitHub", link: "https://github.com/zhengsixsix" },
  { name: "掘金", link: "https://juejin.cn/user/1201089584303517/posts" },
];
</script>
<style lang="scss" scoped>
.socialInfo {
  width: 780px;
  margin: 0 auto;
  .title {
    color: #404040;
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    border-bottom: 2px solid #404040;
    line-height: 32px;
    margin: 8px 0 4px;
  }
  .item {
    color: #404040;
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    line-height: 24px;
    a {
      font-size: 15px;
      font-weight: bold;
      color: #1677ff;
    }
  }
}
</style>
