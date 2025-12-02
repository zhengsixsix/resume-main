<template>
  <div class="skill-list">
    <div class="title">相关技能</div>
    <ul>
      <li>
        <strong>前端框架</strong>：精通<span class="mx-1">Vue 2/3</span>全家桶（Vue Router、Vuex/Pinia、Vue CLI/Vite），
        熟练使用<span class="ml-1">TypeScript</span>进行类型安全开发，具备<span class="mx-1">3年+</span>Vue + TS 实战经验
      </li>
      <li>
        <strong>跨端开发</strong>：熟练使用<span class="mx-1">uni-app</span>进行小程序、H5、App跨端开发，
        了解<span class="ml-1">React Native</span>、<span>Flutter</span>等跨端技术
      </li>
      <li>
        <strong>地图开发</strong>：精通<span class="mx-1">OpenLayers</span>、<span class="mx-1">Cesium</span>等GIS框架，
        具备二维、三维地图应用开发经验，熟悉地理信息系统业务场景
      </li>
      <li>
        <strong>性能优化</strong>：具备丰富的前端性能优化经验，包括<span class="ml-1">代码分割</span>、
        <span>懒加载</span>、<span>缓存策略</span>、<span>打包优化</span>等，能够针对具体业务场景制定优化方案
      </li>
      <li>
        <strong>工程化</strong>：熟练掌握<span class="mx-1">Webpack</span>、<span class="mx-1">Vite</span>等构建工具，
        能够进行<span class="ml-1">脚手架开发</span>、<span>CI/CD配置</span>，搭建标准化开发环境
      </li>
      <li>
        <strong>开源贡献</strong>：活跃于<span class="mx-1">GitHub</span>开源社区，为
        <span class="ml-1">Element-plus</span>、<span class="mr-1">xijs</span>、<span class="mr-1">BongoCat</span>等知名项目贡献代码，
        具备良好的代码规范和协作能力
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
<script setup></script>
<style lang="scss" scoped>
.skill-list {
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

  ul {
    margin: 0;
    padding-inline-start: 20px;

    li {
      color: $text-secondary;
      font-size: 15px;
      font-weight: 400;
      text-align: left;
      line-height: 1.8;
      margin-bottom: 8px;

      &::marker {
        color: $primary-color;
      }

      strong {
        color: $text-primary;
        font-weight: 600;
      }

      span {
        color: $text-primary;
        font-weight: 500;
      }
    }
  }
}
</style>
