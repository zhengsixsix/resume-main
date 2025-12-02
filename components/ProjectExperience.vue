<template>
  <div class="projects">
    <div class="title">项目经历</div>

    <div class="project">
      <div class="level1">
        智慧乡村综合管理平台
        <span style="color: #666; font-size: 14px;">（乡村振兴数字化项目）</span>
      </div>
      <div class="level2">项目背景</div>
      <div class="level3">
        服务于<span class="mx-1">乡村振兴战略</span>的综合治理平台，
        整合<span class="ml-1">党建引领</span>、<span>网格治理</span>、<span>三资监管</span>、
        <span class="mx-1">智慧康养</span>、<span>便民服务</span>五大业务域，
        实现乡村治理<span class="ml-1">数字化转型</span>
      </div>
      <div class="level2">技术架构</div>
      <div class="level3">
        <strong>Web端</strong>：<span class="mx-1">Vue 2</span> + <span>Vuex</span> + <span>View Design</span> +
        <span class="mx-1">ECharts</span> + <span>Cesium</span> + <span>FullCalendar</span> + <span>WebSocket</span>
      </div>
      <div class="level3">
        <strong>小程序</strong>：<span class="mx-1">微信小程序原生</span> + <span>Vant Weapp</span> + <span>分包加载</span>
      </div>
      <div class="level2">核心职责</div>
      <div class="level3">
        担任<span class="mx-1">前端技术负责人</span>，负责村务工作台、数据大屏、业务模块的架构设计与开发
      </div>
      <div class="level2">核心功能</div>
      <div class="level3">
        <strong>数据大屏可视化</strong>：基于<span class="mx-1">ECharts</span>和<span>Cesium</span>开发多块业务大屏，
        集成<span class="ml-1">3D地图</span>、<span>热力图</span>、<span>词云图</span>等可视化组件
      </div>
      <div class="level3">
        <strong>智慧康养系统</strong>：实现老人档案、健康体检、<span class="mx-1">穿戴设备监控</span>、
        康养服务派单等功能，支持<span class="ml-1">实时健康数据</span>大屏展示
      </div>
      <div class="level3">
        <strong>网格化治理</strong>：开发人房关联、户籍管理、<span class="mx-1">事件上报处置</span>等功能，
        支持网格员移动端协同作业
      </div>
      <div class="level3">
        <strong>三资监管平台</strong>：实现资产、资源、资金的<span class="mx-1">全流程数字化管理</span>，
        包含楼栋、土地、物资分类等精细化管理模块
      </div>
      <div class="level3">
        <strong>便民服务工作台</strong>：开发预约办事、民声服务、<span class="mx-1">AI告警</span>、
        活动报名、值班管理等<span class="ml-1">20+</span>业务功能模块
      </div>
      <div class="level2">配套小程序（厦边社区数字乡村平台）</div>
      <div class="level3">
        <strong>技术栈</strong>：<span class="mx-1">微信小程序原生</span> + <span>Vant Weapp</span>，
        采用<span class="ml-1">三分包架构</span>优化加载性能，集成<span class="mx-1">10+</span>第三方小程序跳转
      </div>
      <div class="level3">
        <strong>共建共治</strong>：实现<span class="mx-1">随手拍</span>、<span>事件上报</span>、
        <span>网格/城管任务</span>、<span class="mx-1">违规拍照</span>等功能，支持<span class="ml-1">拍照定位</span>一键提交与多级审核流转
      </div>
      <div class="level3">
        <strong>便民服务</strong>：整合<span class="mx-1">在线办事</span>、<span>证明事项</span>、
        <span>书记信箱</span>、<span class="mx-1">值班查询</span>，对接<span class="ml-1">粤省事</span>、
        <span>乘车码</span>、<span>生活缴费</span>等政务民生服务
      </div>
      <div class="level3">
        <strong>康养服务</strong>：开发<span class="mx-1">健康档案</span>、<span>人口健康导入</span>、
        <span>老年服务</span>、<span class="mx-1">健康任务</span>等功能，实现居民健康数据移动端管理
      </div>
      <div class="level3">
        <strong>房屋招商</strong>：实现<span class="mx-1">房屋地图</span>、<span>租赁管理</span>、
        <span>企业地图</span>、<span class="mx-1">招商引资</span>、<span>企业安全</span>等乡村经济功能
      </div>
      <div class="level3">
        <strong>智慧功能</strong>：集成<span class="mx-1">AI事件分发</span>、<span>天气查询</span>、
        <span>社区内涝预警</span>、<span class="mx-1">景点导览</span>、<span>村庄相册</span>等特色模块
      </div>
      <div class="level3">
        <strong>积分体系</strong>：设计<span class="mx-1">周积分榜</span>、<span>积分领取</span>、
        <span>任务完成</span>等激励机制，<span class="ml-1">40+</span>功能页面全面覆盖乡村治理场景
      </div>
      <div class="level2">小程序技术亮点</div>
      <div class="level3">
        <strong>AES加密通信</strong>：基于<span class="mx-1">CryptoJS</span>实现<span>AES-CBC</span>模式数据加解密，
        保障接口传输<span class="ml-1">数据安全</span>
      </div>
      <div class="level3">
        <strong>地图GIS能力</strong>：实现<span class="mx-1">多边形中心点算法</span>、<span>WGS84转GCJ02坐标系转换</span>，
        支持<span class="ml-1">Polygon房屋边界</span>绘制与卫星图切换
      </div>
      <div class="level3">
        <strong>语音录制上传</strong>：集成<span class="mx-1">RecorderManager</span>实现随手拍语音录制、
        <span class="ml-1">音频播放控制</span>、断点续录等功能
      </div>
      <div class="level3">
        <strong>请求层封装</strong>：<span class="mx-1">Promise</span>封装统一请求，支持多种Content-Type，
        自动处理<span class="ml-1">Token过期</span>、登录态刷新和异常提示
      </div>
      <div class="level2">Web端技术亮点</div>
      <div class="level3">
        <strong>Cesium海量点聚合</strong>：基于<span class="mx-1">KDBush</span>空间索引实现<span>PrimitiveCluster</span>，
        支持<span class="ml-1">万级标注点</span>动态聚合与性能优化
      </div>
      <div class="level3">
        <strong>3D热力图引擎</strong>：整合<span class="mx-1">heatmap.js</span>与<span>Cesium Primitive</span>，
        自定义<span class="ml-1">Material着色器</span>实现三维热力可视化
      </div>
      <div class="level3">
        <strong>GIS空间分析</strong>：集成<span class="mx-1">Turf.js</span>实现点面判断、
        <span>GeoServer分层单体化</span>、<span class="mx-1">WGS84坐标转换</span>等空间计算
      </div>
      <div class="level3">
        <strong>实时消息推送</strong>：封装<span class="mx-1">WebSocket</span>心跳保活机制，
        实现网格事件、<span class="ml-1">AI告警</span>等多通道实时推送
      </div>
      <div class="level3">
        <strong>多主题大屏框架</strong>：设计党群、康养、三资等<span class="mx-1">多套大屏</span>快速切换，
        集成<span class="ml-1">词云</span>、<span>水球图</span>、<span>3D饼图</span>等可视化组件
      </div>
      <div class="level2">项目成果</div>
      <div class="level3">
        平台成功上线运营，服务<span class="mx-1">多个社区</span>的日常治理工作，
        大幅提升基层治理<span class="ml-1">数字化水平</span>
      </div>
    </div>

    <div class="project">
      <div class="level1">
        团体火车票票池预订平台
        <span style="color: #666; font-size: 14px;">（独立项目）</span>
      </div>
      <div class="level2">项目背景</div>
      <div class="level3">
        面向<span class="mx-1">企业团体出行</span>的火车票在线预订平台，
        整合<span class="ml-1">企业端</span>、<span>供应端</span>、<span>管理端</span>三套系统，
        实现从<span class="mx-1">选票下单</span>到<span>出票结算</span>的全流程闭环
      </div>
      <div class="level2">技术架构</div>
      <div class="level3">
        <span class="mx-1">Vue 3</span> + <span>Quasar</span> + <span>Pinia</span> +
        <span class="mx-1">Element Plus</span> + <span>ECharts</span> + <span>ExcelJS</span>
      </div>
      <div class="level2">核心职责</div>
      <div class="level3">
        独立承接<span class="mx-1">前端全部开发工作</span>，负责三端系统的架构设计、功能开发与交付维护
      </div>
      <div class="level2">企业端</div>
      <div class="level3">
        <strong>选票大厅</strong>：实现<span class="mx-1">票池选票</span>、<span>车次查询</span>、
        <span>座位锁定</span>、<span class="mx-1">乘客批量导入</span>等预订核心流程
      </div>
      <div class="level3">
        <strong>线上订票</strong>：开发<span class="mx-1">在线预订</span>和<span>候补订票</span>功能，
        支持12306账号绑定和自动抢票
      </div>
      <div class="level3">
        <strong>订单管理</strong>：构建<span class="mx-1">分组视图</span>、<span>列表视图</span>等多维度订单展示，
        支持订单状态追踪和批量操作
      </div>
      <div class="level3">
        <strong>财务管理</strong>：实现<span class="mx-1">钱包充值</span>、<span>账单还款</span>、
        <span>支付宝开户</span>、<span class="mx-1">额度申请</span>等资金管理功能
      </div>
      <div class="level3">
        <strong>个人中心</strong>：包含<span class="mx-1">报票员工管理</span>、<span>企业资料</span>、
        <span>推广记录</span>、<span class="mx-1">数据统计</span>等企业管理功能
      </div>
      <div class="level2">供应端 & 管理端</div>
      <div class="level3">
        <strong>供应商工作台</strong>：开发<span class="mx-1">出票/退票/改签</span>任务处理流程，
        集成<span class="ml-1">Howler音频提醒</span>实现任务实时通知
      </div>
      <div class="level3">
        <strong>运营管理后台</strong>：构建<span class="mx-1">订单管理</span>、<span>供应商管理</span>、
        <span>分销商管理</span>、<span class="mx-1">财务结算</span>等运营模块，支持<span class="ml-1">ECharts数据大屏</span>
      </div>
      <div class="level2">技术亮点</div>
      <div class="level3">
        <strong>复杂订单状态机</strong>：设计<span class="mx-1">多程联票</span>订单模型，
        支持往返程、多行程组合，每张票独立状态流转（待支付→出票中→已出票→退改签），
        通过<span class="ml-1">Pinia</span>管理跨页面状态一致性
      </div>
      <div class="level3">
        <strong>实时库存竞态处理</strong>：基于<span class="mx-1">WebSocket</span>实现座位锁定状态广播，
        处理<span class="ml-1">多用户并发抢票</span>场景，通过乐观锁+消息队列保证数据一致性
      </div>
      <div class="level3">
        <strong>离线草稿持久化</strong>：使用<span class="mx-1">IndexedDB</span>实现订单草稿本地存储，
        支持<span class="ml-1">断点续传</span>，用户意外关闭页面后可恢复填写进度
      </div>
      <div class="level3">
        <strong>智能证件识别</strong>：通过<span class="mx-1">正则表达式</span>自动识别6种证件类型
        （身份证、护照、港澳通行证、台胞证等），减少用户手动选择
      </div>
      <div class="level2">项目成果</div>
      <div class="level3">
        平台已稳定运营，日均处理<span class="mx-1">订单量可观</span>，并持续迭代维护
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
        <strong>数据管理系统</strong>：设计实现<span class="mx-1">表格视图</span>、<span>表单视图</span>、<span>看板视图</span>、
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
.projects {
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

  .project {
    margin-bottom: 24px;

    .level1 {
      font-size: 18px;
      line-height: 1.5;
      color: $text-primary;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 8px;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 8px;

      a {
        font-size: 14px;
        font-weight: 500;
        color: $primary-color;
        margin-left: 8px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .level2 {
      font-size: 15px;
      line-height: 1.6;
      color: $text-primary;
      font-weight: 600;
      margin-top: 12px;
      margin-bottom: 4px;
      background-color: rgba($primary-color, 0.05);
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    .level3 {
      font-size: 15px;
      line-height: 1.6;
      color: $text-secondary;
      position: relative;
      font-weight: 400;
      margin-left: 18px;
      margin-bottom: 4px;

      &::before {
        content: "•";
        position: absolute;
        color: $primary-color;
        left: -14px;
        font-weight: bold;
      }

      span {
        color: $text-primary;
        font-weight: 600;
      }

      strong {
        color: $text-primary;
        font-weight: 600;
      }
    }
  }
}
</style>
