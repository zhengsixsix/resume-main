<template>
  <div class="work">
    <div class="title">工作经历</div>
    <div class="company" v-for="item of workList" :key="item.name">
      <div class="row1">
        <div class="name">
          {{ item.name }}
        </div>
        <div class="time">
          {{ item.time }}
        </div>
      </div>
      <div class="row2">
        <div>{{ item.title }}</div>
        <div>{{ item.department }}</div>
      </div>
      <ul>
        <li v-for="v of item.responsibilities" :key="v">
          {{ v }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
const workList = [
  {
    name: "武汉智慧畅享科技有限公司",
    time: "2022/6 - 2024/4",
    title: "前端工程师",
    department: "平台技术部 前端组",
    responsibilities: [
      "在职期间负责微信小程序、H5项目、GIS项目的前端开发工作，独立负责项目从初期框架搭建到项目上线",
      "负责组内 项目重构 技术框架迭代更新",
      "负责出差对接甲方需求根据需求搭建框架并完成开发",
      "清理技术债，进行项目瘦身，删除掉5000多行冗余代码，封装多个组件，提高日常开发效率",
    ],
  },
];
</script>
<style lang="scss" scoped>
.work {
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
  .company {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px 0;
    .row1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #404040;
      .name {
        font-size: 18px;
        line-height: 32px;
        font-weight: 700;
      }
      .time {
        font-size: 16px;
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
      gap: 16px;
      font-size: 16px;
      font-weight: 700;
      line-height: 32px;
    }
    ul {
      margin: 0;
      width: calc(100% - 20px);
      padding-inline-start: 20px;
      li {
        color: #404040;
        font-size: 15px;
        font-weight: 400;
        text-align: left;
        line-height: 24px;
      }
    }
  }
}
</style>
