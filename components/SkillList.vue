<template>
  <div class="socialInfo">
    <div class="title">相关技能</div>
    <ul>
      <li>
        活跃于<span class="mx-1">GitHub</span>开源社区，给
        <span class="ml-1">element-plus</span>、<span class="mr-1">xijs</span>
        等众多开源库贡献过 PR
      </li>
      <li>
        熟悉<span class="mx-1">Vue</span>及其周边生态，熟悉<span class="ml-1"
          >TypeScript</span
        >，拥有丰富的
        <span class="mx-1">Vue + TS</span>
        实战经验
      </li>
      <li>能够使用<span class="mx-1">uni-app</span>进行跨端开发</li>
      <li>
        熟悉<span>gis</span>开发框架，如<span class="mx-1">open layer</span
        >、<span class="mx-1">cesium</span>，能够使用其对二维、三维地图进行开发
      </li>
      <li>
        熟悉前端性能优化的实现，例如<span class="ml-1">代码优化</span>、<span
          >打包优化</span
        >
        、<span>资源优化</span>，能结合实际业务场景进行优化
      </li>
      <li>
        熟悉<span class="mx-1">webpack / vite</span>等打包工具的基本配置，
        能够对以上工具进行
        <span class="ml-1">二次封装</span>、基于以上工具搭建通用的开发环境
      </li>
      <li>
        熟悉<span class="mx-1">prettier / eslint</span
        >基本配置，有良好且严格的编码习惯， <span>唯客户论</span>，<span
          >实用主义者</span
        >
      </li>
      <li>
        熟悉代码开发到上线全流程，对<span class="ml-1">协同开发</span
        >，<span>分支管理</span>等都有较深刻的最佳实践
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
span.mx-1 {
  margin: 0 0.25rem /* 4px */;
}

span.ml-1 {
  margin-left: 0.25rem /* 4px */;
}

span.mr-1 {
  margin-right: 0.25rem /* 4px */;
}
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
      span {
        color: #000;
        font-weight: 600;
      }
    }
  }
}
</style>
