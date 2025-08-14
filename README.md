# 个人简历网站

基于 Nuxt 3 构建的现代化个人简历网站，采用组件化设计，展示个人信息、技能、项目经验和工作经历。

## ✨ 特性

- 🎨 现代化设计风格
- 📱 响应式布局，支持移动端
- ⚡ 基于 Nuxt 3 的高性能 SSG
- 🎯 组件化架构，易于维护
- 📊 GitHub 提交图表展示
- 🔧 TypeScript 支持
- 🎭 Ant Design Icons 图标库

## 🏗️ 项目结构

```
├── components/           # 组件目录
│   ├── PersonInfo.vue   # 个人信息组件
│   ├── CommitGraph.vue  # GitHub 提交图表
│   ├── Introduction.vue # 个人介绍
│   ├── SocialInfo.vue   # 社交信息
│   ├── Educational.vue  # 教育经历
│   ├── SkillList.vue    # 技能列表
│   ├── ProjectExperience.vue # 项目经验
│   ├── WorkExperience.vue    # 工作经验
│   └── Thanks.vue       # 致谢
├── pages/               # 页面目录
│   └── index.vue        # 主页面
├── public/              # 静态资源
├── dist/                # 构建输出目录
└── nuxt.config.ts       # Nuxt 配置文件
```

## 🚀 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- 推荐使用 pnpm 作为包管理器

### 安装依赖

```bash
# 推荐使用 pnpm
pnpm install

# 或使用其他包管理器
npm install
yarn install
bun install
```

### 开发服务器

启动开发服务器（运行在 `http://localhost:3001`）：

```bash
# pnpm
pnpm run dev

# npm
npm run dev

# yarn
yarn dev

# bun
bun run dev
```

### 构建生产版本

```bash
# 构建应用
pnpm run build

# 生成静态站点
pnpm run generate

# 本地预览生产版本
pnpm run preview
```

## 🛠️ 技术栈

- **框架**: Nuxt 3
- **语言**: TypeScript
- **样式**: Sass/SCSS
- **图标**: Ant Design Icons Vue
- **构建工具**: Vite (Nuxt 3 内置)

## 📝 自定义内容

要自定义简历内容，请编辑以下组件：

1. **个人信息**: `components/PersonInfo.vue` - 修改姓名、职位、联系方式
2. **个人介绍**: `components/Introduction.vue` - 编辑个人简介
3. **技能列表**: `components/SkillList.vue` - 更新技能和熟练度
4. **项目经验**: `components/ProjectExperience.vue` - 添加/修改项目经历
5. **工作经验**: `components/WorkExperience.vue` - 更新工作履历
6. **教育背景**: `components/Educational.vue` - 修改教育信息

## 🚀 部署

### 静态站点生成 (推荐)

```bash
# 生成静态文件
pnpm run generate

# 部署 dist/ 目录到任何静态托管服务
```

### 支持的部署平台

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- 任何支持静态文件的托管服务

更多部署信息请查看 [Nuxt 3 部署文档](https://nuxt.com/docs/getting-started/deployment)。

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
