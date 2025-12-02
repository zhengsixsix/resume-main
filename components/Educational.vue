<template>
  <div class="educational">
    <div class="title">教育背景</div>
    <div class="item" v-for="item of learningList" :key="item.name">
      <div class="universitys">
        <div class="row1">
          {{ item.name }}
          <span>{{ item.time }}</span>
        </div>
        <div class="row2" v-if="item.subtitle">
          {{ item.subtitle }}
        </div>
        <div class="row3" v-if="item.description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const learningList = [
  {
    name: "荆州理工职业学院",
    subtitle: "",
    time: "2020 - 2023",
    description: "在校期间专注前端开发技术，通过实战项目积累工程经验，具备独立解决问题的能力"
  },
];
</script>
<style lang="scss" scoped>
.educational {
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

  .universitys {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 16px;
    
    .row1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $text-primary;
      font-size: 16px;
      line-height: 1.5;
      font-weight: 700;
      
      span {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
        color: $text-light;
      }
    }

    .row2 {
      color: $text-light;
      width: 100%;
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      margin-top: 2px;
    }

    .row3 {
      color: $text-light;
      width: 100%;
      font-size: 13px;
      font-weight: 400;
      line-height: 1.5;
      margin-top: 6px;
      font-style: italic;
    }
  }
}
</style>
