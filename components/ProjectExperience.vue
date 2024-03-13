<template>
  <div class="projects">
    <div class="title">项目经历</div>
    <div class="project">
      <div class="level1">
        甘肃省旅游资源普查综合管理系统
        <a href="http://60.13.8.238:7701/TPWeb/" target="_blank">
          http://60.13.8.238:7701/TPWeb/
        </a>
      </div>
      <div class="level2">背景</div>
      <div class="level3">
        为提升甘肃省<span class="ml-1">旅游知名度</span>
        <span class="mx-1"
          >实现旅游资源的普查、分类、管理、统计、分析、展示</span
        >，为旅游资源的开发利用提供数据依据 从而进行旅游的 <span>招商引资</span>
        进而推动旅游资源的开发利用
      </div>
      <div class="level2">角色</div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 数据管理项目的<span class="mx-1"
          >前端主要负责⼈</span
        >
      </div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 运维项目的<span class="ml-1"
          >前端主要负责⼈</span
        >
      </div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 旅游官网的<span class="ml-1"
          >前端主要负责⼈</span
        >
      </div>
      <div class="level2">行动</div>
      <div class="level3">
        完成 甘肃省旅游资源普查综合管理系统 数据管理、官网、运维系统的前期<span
          class="mx-1"
          >技术选型</span
        >和 <span class="ml-1">确立政府审批流程</span>、完成官网<span
          class="ml-1"
          >架构设计</span
        >
      </div>
      <div class="level3">
        完成数据管理中<span class="ml-1">表格视图</span
        >、<span>表单视图</span>、 <span>看板视图</span>、<span>OA审批流</span>
        等核⼼模块的设计与开发⼯作
      </div>
      <div class="level3">
        完成表格视图中<span class="mx-1">精确到按钮级</span>
        的权限控制
      </div>
      <div class="level3">
        依赖<span class="mx-1">websocket</span>
        通信，实现OA审批流数据 实时同步到甘肃省旅游厅上的大屏
      </div>
      <div class="level3">
        完成官网中
        <span class="mx-1">首页</span
        >、<span>普查一张图</span>、<span>三维实景</span>、<span>普查产品</span>、<span>业务应用</span>、<span
          >新闻动态</span
        >
      </div>
      <div class="level3">
        完成旅游大屏开发
        通过<span>cesium</span>开发大屏三维地图。封装<span>自适应插件</span>、<span
          >动画插件</span
        >
      </div>
      <div class="level2">遇到的挑战</div>
      <div class="level3">
        普查一张图：因为省级普查数据较多，且
        <span class="ml-1">缺乏大批量数据处理</span>
        ，因此经过调研，核⼼逻辑使用了<span class="mx-1"
          >requestAnimationFrame</span
        >进行渲染，大批量处理数据 通过
        <span class="mx-1">web worker</span>进行处理，从而<span class="ml-1"
          >提高渲染效率</span
        >
        同时保证
        <span class="ml-1">数据的安全性</span>
      </div>
      <div class="level3">
        三维问题：因客户需要，官网要展示旅游资源的<span class="ml-1">全景</span
        >以及某个地区的<span class="ml-1">景点模型</span>
        因此选型官网加入
        <span class="mx-1">three.js</span>，实现<span class="ml-1">全景</span>
        和<span class="ml-1">cesium</span>进行模型展示 由于模型数据较大
        运维端采用了
        <span>分片上传</span>的策略上传模型采用表格的形式进行管理模型
      </div>

      <div class="level3">
        App：App开发过程中 因客户需要在野外保存图片 由于野外没有网络要保证数据的
        <span class="ml-1">安全性</span> 以及<span class="ml-1">稳定性</span>
        因此采用 plus离线数据库 又由于上传图片 需要上传原图
        <span>plus离线数据库</span>不支持
        <span>2MB以上的数据</span> 所以采用存入临时路径的办法
        同时另一个问题也暴露出来 如果存入原图
        <span>UniApp在安卓10</span>
        以后不持支拿沙盒外的文件 经过研究官方文档 采用安卓插件
        允许UniApp拿到沙盒外的文件权限 从而解决 <span>上传图片的问题</span>
      </div>
      <div class="level2">结果</div>
      <div class="level3">
        成功落地上线并<span class="mx-1">承载超过5000+/月</span>的审批数量
      </div>
      <div class="level3">
        产出了
        <span class="mx-1">20+</span>的<span class="ml-1">功能大模块</span>
      </div>
      <div class="level3">
        是甘肃省内<span class="ml-1">⽬前准备推广的的旅游领域项⽬</span>
      </div>
    </div>
  </div>
</template>
<script setup></script>
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
.projects {
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
  .project {
    .level1 {
      font-size: 18px;
      line-height: 32px;
      color: #404040;
      font-weight: 700;
      margin-top: 16px;
      a {
        font-size: 15px;
        font-weight: bold;
        color: #1677ff;
        margin-left: 16px;
      }
    }
    .level2 {
      font-size: 16px;
      line-height: 32px;
      color: #404040;
      font-weight: 700;
      margin-top: 4px;
    }
    .level3 {
      font-size: 15px;
      line-height: 24px;
      color: #404040;
      position: relative;
      font-weight: 400;
      margin-left: 20px;
      &::before {
        content: "❀";
        position: absolute;
        color: #404040;
        left: -20px;
      }
      span {
        color: #f5222d;
        font-weight: 500;
      }
    }
  }
}
</style>
