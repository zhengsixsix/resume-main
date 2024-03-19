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
        <span class="mx-1">实现旅游资源的普查、分类、管理、统计、分析、展示</span>，为旅游资源的开发利用提供数据依据 从而进行旅游的 <span>招商引资</span>
        进而推动旅游资源的开发利用
      </div>
      <div class="level2">角色</div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 数据管理项目的<span class="mx-1">前端主要负责⼈</span>
      </div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 运维项目的<span class="ml-1">前端主要负责⼈</span>
      </div>
      <div class="level3">
        甘肃省旅游资源普查综合管理系统 旅游官网的<span class="ml-1">前端主要负责⼈</span>
      </div>
      <div class="level2">行动</div>
      <div class="level3">
        完成 甘肃省旅游资源普查综合管理系统 数据管理、官网、运维系统的前期<span class="mx-1">技术选型</span>和 <span class="ml-1">确立政府审批流程</span>、完成官网<span
          class="ml-1">架构设计</span>
      </div>
      <div class="level3">
        完成数据管理中<span class="ml-1">表格视图</span>、<span>表单视图</span>、 <span>看板视图</span>、<span>OA审批流</span>
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
        <span
          class="mx-1">首页</span>、<span>普查一张图</span>、<span>三维实景</span>、<span>普查产品</span>、<span>业务应用</span>、<span>新闻动态</span>
      </div>
      <div class="level3">
        完成旅游大屏开发
        通过<span>cesium</span>开发大屏三维地图。封装<span>自适应插件</span>、<span>动画插件</span>
      </div>
      <div class="level2">遇到的挑战</div>
      <div class="level3">
        普查一张图：因为省级普查数据较多，且
        <span class="ml-1">缺乏大批量数据处理</span>
        ，因此经过调研，核⼼逻辑使用了<span class="mx-1">requestAnimationFrame</span>进行渲染，大批量处理数据 通过
        <span class="mx-1">web worker</span>进行处理，从而<span class="ml-1">提高渲染效率</span>
        同时保证
        <span class="ml-1">数据的安全性</span>
      </div>
      <div class="level3">
        三维问题：因客户需要，官网要展示旅游资源的<span class="ml-1">全景</span>以及某个地区的<span class="ml-1">景点模型</span>
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

    <div class="project">
      <div class="level1">
        地质分析一张图
      </div>
      <div class="level2">背景</div>
      <div class="level3">
        是由甘肃地质局领头开发的一款<span class="ml-1">对地质进行分析管理</span>
        <span class="mx-1">监测灾害</span>的一套系统
      </div>
      <div class="level2">角色</div>
      <div class="level3">
        地质分析一张图的<span class="mx-1">前端主力成员</span>
      </div>
      <div class="level2">行动</div>
      <div class="level3">
        在职期间对<span class="mx-1">package.json</span>中的大部分框架和库做了升级和兼容，并且完成 地质分析一张图部分功能开发
      </div>
      <div class="level3">
        集成<span class="mx-1">Sentry</span>
        并通过开发的错误通知服务，实现<span className="mx-1">异常上报</span>
        功能，及时处理错误，使得项目异常<span className="ml-1">减少了 80%</span>
      </div>
      <div class="level3">
        完成图层分析、热力图分析、图层渲染上地图、shp导入、影像数据叠加等功能模块开发
      </div>
      <div class="level2">遇到的挑战</div>
      <div class="level3">
        因为第一次做gis项目 导致技术陌生 为快速上手 在业余时间 通过看 openlayer的官网 和公司的代码示例
        <span class="ml-1">快速学习</span> 不妨碍项目进度 最终可以上手一些 基本的 <span>gis 功能</span> 到项目中期 已经可以写一些<span>复杂的功能</span>
      </div>
      <div class="level2">结果</div>
      <div class="level3">
        成功落地<span class="mx-1">地质分析一张图</span>的项目
      </div>
      <div class="level3">
        并出差甘肃 对接地质调查院 协助该院 操作此项目
      </div>
    </div>

    <div class="project">
      <div class="level1">
        Element-plus
      </div>
      <div class="level2">背景</div>
      <div class="level3">
        由于公司绝⼤多数业务系统都在使⽤ Element-plus
        系列的组件库，有时候遇到问题或是总结的⼀些新特性，希望能够在官⽅库中得到⽀持，⽅便更多的业务团队能够收益，故参与了
        Element-plus 项⽬的开源贡献，通过业务驱动开源
      </div>
      <div class="level2">角色</div>
      <div class="level3">
        公司内部<span class="ml-1">开源贡献牵头⼈</span>
      </div>
      <div class="level2">遇到的挑战</div>
      <div class='level3'>
        前期<span class="mx-1">⽆⼈指引</span>
        ，⾸次参与开源项⽬的共建，很多需要注意的地⽅都不懂，公司内部也
        <span class="mx-1">没有引路⼈</span>
        ，靠⾃⼰
        <span class="ml-1">翻阅各类博客、⽂章、分享以及请教⽬标项⽬的核⼼贡献者</span>
        ，逐步掌握参与开源社区贡献的各种技巧
      </div>
      <div class="level2">结果</div>
      <div class="level3">
        针对 inputNumber 组件 添加了 max min 的效验 重写聚焦样式 添加单元测试
      </div>
      <div class="level3">
        time-picker 组件 重写了计算高度的方法 保证了 rem 转 px 不会进行四舍五入样式错乱
      </div>
      <div class="level3">
        table 组件 修复了 getSelectionRows 方法第一次获取不到数据
      </div>
      <div class="level3">
        checkbox 重写了样式
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
span.mx-1 {
  margin: 0 0.25rem
    /* 4px */
  ;
}

span.ml-1 {
  margin-left: 0.25rem
    /* 4px */
  ;
}

span.mr-1 {
  margin-right: 0.25rem
    /* 4px */
  ;
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
