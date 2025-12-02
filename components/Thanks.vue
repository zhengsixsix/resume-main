<template>
  <div class="thanks">
    <div class="title">致谢</div>
    <div class="item">感谢您花时间阅读我的简历，期待有机会能和您共事。</div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.thanks {
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
  }
}
</style>
