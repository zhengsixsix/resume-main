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
  width: 100%;
  margin: 0 auto;
  
  .title {
    color: $text-primary;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    border-bottom: 2px solid $border-color;
    line-height: 1.5;
    margin: 24px 0 16px;
    padding-bottom: 8px;
  }
  
  .item {
    color: $text-secondary;
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    line-height: 1.8;
    
    a {
      font-size: 15px;
      font-weight: 500;
      color: $primary-color;
      margin-left: 8px;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
