<template>
  <div class="educational">
    <div class="title">教育经历</div>
    <div class="item" v-for="item of universityList" :key="item.name">
      <div class="universitys">
        <div class="row1">
          {{ item.name }}
          <span>{{ item.time }}</span>
        </div>
        <div class="row2">
          <div>{{ item.major }}</div>
          <div>{{ item.level }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const universityList = [
  {
    name: "荆州理工职业学院",
    major: "电子商务技术",
    level: "大专",
    time: "2020/09 - 2023/06",
  },
];
</script>
<style lang="scss" scoped>
.educational {
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
  .universitys {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .row1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #404040;
      font-size: 16px;
      line-height: 28px;
      font-weight: 700;
      span {
        font-size: 15px;
        line-height: 24px;
        font-weight: 400;
      }
    }
    .row2 {
      color: #404040;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
  }
}
</style>
