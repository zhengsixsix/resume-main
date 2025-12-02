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
<script setup>
const workList = [
  {
    name: "广量集团",
    time: "2024/5 - 至今",
    title: "高级前端工程师",
    department: "技术部",
    responsibilities: [
      "负责前端技术架构设计和技术选型，制定开发规范和最佳实践",
      "参与复杂业务系统的前端开发，包括数据可视化、地图应用等",
      "持续优化项目性能，通过代码分割、懒加载等技术手段提升用户体验",
      "负责代码审查和技术分享，推动团队技术水平提升",
      "积极参与开源社区，为多个知名项目贡献代码和文档",
    ],
  },
  {
    name: "武汉智慧畅享科技有限公司",
    time: "2022/6 - 2024/4",
    title: "前端工程师",
    department: "平台技术部 前端组",
    responsibilities: [
      "负责微信小程序、H5项目、GIS项目的前端开发工作，独立完成项目从框架搭建到上线部署",
      "主导组内项目重构和技术框架升级，提升开发效率和代码质量",
      "出差对接客户需求，根据业务场景进行技术选型和架构设计",
      "优化代码结构，清理技术债务，删除5000+行冗余代码，封装通用组件库",
      "负责甘肃省旅游资源普查系统等大型政府项目的前端开发",
    ],
  },
];
</script>
<style lang="scss" scoped>
.work {
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

  .company {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 24px;
    
    .row1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $text-primary;
      margin-bottom: 4px;
      
      .name {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 700;
      }
      
      .time {
        font-size: 15px;
        line-height: 1.5;
        font-weight: 500;
        color: $text-secondary;
      }
    }

    .row2 {
      color: $text-secondary;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 16px;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    ul {
      margin: 0;
      padding-inline-start: 18px;
      
      li {
        color: $text-secondary;
        font-size: 15px;
        font-weight: 400;
        text-align: left;
        line-height: 1.6;
        margin-bottom: 4px;
        
        &::marker {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
