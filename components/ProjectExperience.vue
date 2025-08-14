<template>
  <div class="projects">
    <div class="title">项目经历</div>

    <div class="project">
      <div class="level1">
        智慧乡村平台
      </div>
      <div class="level2">背景</div>
      <div class="level3">
        为乡村振兴战略开发的<span class="mx-1">智慧乡村综合管理平台</span>，
        涵盖<span class="ml-1">智慧党群</span>、<span>智慧网格</span>、<span>智慧三资</span>、<span>智慧城管</span>、<span>智慧养老</span>、<span>智慧便民</span>六大核心模块
      </div>
      <div class="level2">角色</div>
      <div class="level3">
        项目<span class="mx-1">前端技术负责人</span>，负责整体架构设计和核心功能开发
      </div>
      <div class="level2">技术栈</div>
      <div class="level3">
        <span class="mx-1">Vue 3</span> + <span>TypeScript</span> + <span>Vite</span> +
        <span class="mx-1">ECharts</span> + <span>Element Plus</span> + <span>WebSocket</span>
      </div>
      <div class="level2">核心功能模块</div>
      <div class="level3">
        <strong>智慧党群</strong>：党建工作管理、党员信息维护、组织活动安排等功能模块
      </div>
      <div class="level3">
        <strong>智慧网格</strong>：网格化管理、事件上报处理、网格员工作台等核心功能
      </div>
      <div class="level3">
        <strong>智慧三资</strong>：农村集体资产、资源、资金的数字化管理和监督
      </div>
      <div class="level3">
        <strong>智慧城管</strong>：城乡环境治理、基础设施管理、问题处置流程
      </div>
      <div class="level3">
        <strong>智慧养老</strong>：老年人信息管理、养老服务对接、健康监测功能
      </div>
      <div class="level3">
        <strong>智慧便民</strong>：村民服务大厅、在线办事、政务服务等便民功能
      </div>
      <div class="level2">技术成果</div>
      <div class="level3">
        负责六大模块的<span class="mx-1">前端架构设计</span>和<span>统一技术栈</span>选型，确保各模块开发的一致性和可维护性
      </div>
      <div class="level3">
        封装了<span class="mx-1">业务组件库</span>，包含表单、表格、图表等常用组件，提升开发效率和代码复用率
      </div>
      <div class="level3">
        优化<span class="mx-1">页面渲染性能</span>和<span>数据交互流程</span>，提升系统整体的用户体验
      </div>
    </div>

    <div class="project">
      <div class="level1">
        甘肃省旅游资源普查综合管理系统
        <a href="https://zypc.gswhhly.com/" target="_blank">
          https://zypc.gswhhly.com/
        </a>
        <span style="color: #666; font-size: 14px;">（省级重点项目）</span>
      </div>
      <div class="level2">项目背景</div>
      <div class="level3">
        甘肃省政府主导的<span class="mx-1">数字化旅游资源管理平台</span>，
        实现全省旅游资源的<span class="ml-1">普查、分类、管理、统计、分析、展示</span>一体化，
        为旅游产业<span class="mx-1">招商引资</span>和资源开发提供数据支撑
      </div>
      <div class="level2">技术架构</div>
      <div class="level3">
        <span class="mx-1">Vue 2</span> + <span>TypeScript</span> + <span>Element UI</span> +
        <span class="mx-1">OpenLayers</span> + <span>Cesium</span> + <span>WebSocket</span>
      </div>
      <div class="level2">核心职责</div>
      <div class="level3">
        担任<span class="mx-1">前端技术负责人</span>，负责数据管理、运维系统、官网三大子系统的前端架构设计与开发
      </div>
      <div class="level2">核心功能</div>
      <div class="level3">
        <strong>数据管理系统</strong>：设计实现<span
          class="mx-1">表格视图</span>、<span>表单视图</span>、<span>看板视图</span>、
        <span class="mx-1">OA审批流</span>等核心模块，支持<span class="ml-1">按钮级权限控制</span>
      </div>
      <div class="level3">
        <strong>实时数据同步</strong>：基于<span class="mx-1">WebSocket</span>实现审批流数据实时同步至省旅游厅大屏展示
      </div>
      <div class="level3">
        <strong>GIS地图系统</strong>：开发<span class="mx-1">普查一张图</span>，集成<span>OpenLayers</span>实现二维地图功能
      </div>
      <div class="level3">
        <strong>3D可视化</strong>：使用<span class="mx-1">Cesium</span>开发三维实景展示，
        封装<span class="ml-1">自适应插件</span>和<span>动画插件</span>提升用户体验
      </div>
      <div class="level3">
        <strong>官网开发</strong>：完成<span class="mx-1">首页</span>、<span>普查产品</span>、<span>业务应用</span>、
        <span class="mx-1">新闻动态</span>等模块的响应式设计与开发
      </div>
      <div class="level2">技术挑战与解决方案</div>
      <div class="level3">
        <strong>大数据量渲染优化</strong>：省级普查数据量庞大，通过<span class="mx-1">requestAnimationFrame</span>
        优化渲染性能，使用<span class="mx-1">Web Worker</span>处理数据计算，
        实现<span class="ml-1">10万+</span>数据点的流畅展示
      </div>
      <div class="level3">
        <strong>3D模型展示</strong>：集成<span class="mx-1">Three.js</span>实现全景展示，
        结合<span class="mx-1">Cesium</span>进行景点模型渲染，采用<span class="ml-1">分片上传</span>
        策略解决大模型文件传输问题
      </div>
      <div class="level3">
        <strong>移动端离线存储</strong>：针对野外作业场景，设计<span class="mx-1">离线数据库</span>方案，
        解决<span class="ml-1">Android 10+</span>沙盒限制，通过原生插件实现大文件存储和同步
      </div>
      <div class="level2">项目成果</div>
      <div class="level3">
        成功上线运行，月均处理<span class="mx-1">5000+</span>审批流程，系统稳定性达<span class="ml-1">99.9%</span>
      </div>
      <div class="level3">
        开发<span class="mx-1">20+</span>核心功能模块，覆盖旅游资源管理全流程
      </div>
      <div class="level3">
        成为甘肃省<span class="ml-1">旅游数字化标杆项目</span>，获得省政府认可并计划全省推广
      </div>
      <div class="level3">
        项目获得<span class="mx-1">软件著作权</span>，技术方案被多个地市采用
      </div>
    </div>

    <div class="project">
      <div class="level1">
        地质分析一张图系统
        <span style="color: #666; font-size: 14px;">（地质灾害监测平台）</span>
      </div>
      <div class="level2">项目背景</div>
      <div class="level3">
        甘肃地质局主导的<span class="mx-1">地质灾害监测分析系统</span>，
        实现地质数据的<span class="ml-1">可视化分析</span>和<span class="mx-1">灾害预警</span>功能
      </div>
      <div class="level2">技术贡献</div>
      <div class="level3">
        <strong>系统升级</strong>：主导项目技术栈升级，优化<span class="mx-1">依赖管理</span>，提升系统稳定性
      </div>
      <div class="level3">
        <strong>监控体系</strong>：集成<span class="mx-1">Sentry</span>错误监控，建立异常上报机制，
        系统异常率降低<span class="ml-1">80%</span>
      </div>
      <div class="level3">
        <strong>GIS功能</strong>：开发图层分析、热力图分析、SHP文件导入、影像数据叠加等核心功能
      </div>
      <div class="level2">技术成长</div>
      <div class="level3">
        快速掌握<span class="mx-1">OpenLayers</span>地图开发技术，从零基础到能够开发复杂GIS功能，
        展现了<span class="ml-1">强大的学习能力</span>和<span class="mx-1">技术适应性</span>
      </div>
      <div class="level2">项目成果</div>
      <div class="level3">
        成功交付并上线运行，获得甘肃地质调查院认可
      </div>
      <div class="level3">
        现场部署培训，确保用户能够熟练使用系统功能
      </div>
    </div>

    <div class="project">
      <div class="level1">
        开源项目贡献
        <span style="color: #666; font-size: 14px;">（Element-plus、BongoCat等）</span>
      </div>
      <div class="level2">贡献动机</div>
      <div class="level3">
        基于业务实践中发现的问题和改进需求，主动参与<span class="mx-1">Element-plus</span>、
        <span class="mx-1">BongoCat</span>等开源社区建设，通过<span class="ml-1">业务驱动开源</span>的方式回馈社区
      </div>
      <div class="level2">社区角色</div>
      <div class="level3">
        担任公司<span class="mx-1">开源贡献牵头人</span>，推动团队参与开源项目建设
      </div>
      <div class="level2">主要贡献</div>
      <div class="level3">
        <strong>Element-plus</strong>：优化InputNumber、TimePicker、Table、Checkbox等组件，
        修复关键bug，完善测试覆盖率
      </div>
      <div class="level3">
        <strong>BongoCat</strong>：为这个有趣的桌面宠物项目贡献代码，
        参与功能开发和性能优化，提升用户体验
      </div>
      <div class="level2">技能提升</div>
      <div class="level3">
        通过开源贡献掌握了<span class="mx-1">代码规范</span>、<span>测试驱动开发</span>、
        <span class="mx-1">社区协作</span>等技能，提升了代码质量意识
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
