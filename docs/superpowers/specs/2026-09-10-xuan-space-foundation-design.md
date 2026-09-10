# Xuan Space 基础工程设计

## 目标

在 `E:\侧式\ui` 创建一个名为 `xuan-space` 的 React + TypeScript + Vite 基础项目，并验证 Cloudflare Workers + Static Assets 的本地开发与构建链路。第一阶段不实现首页视觉、动画、头像、Banner、社交链接或业务 API。

## 技术方案

- 使用 Cloudflare 官方 React/Vite 模板作为工程起点。
- 使用 npm 管理依赖。
- 使用 Cloudflare Vite 插件与 Wrangler 完成开发、构建和部署配置。
- 保留 Worker 入口，提供只读 `GET /api/health` 健康检查接口，返回 JSON 状态。
- 前端通过 Vite 构建为静态资源，由 Cloudflare Static Assets 托管。
- ThreeUI 作为第一阶段依赖安装并完成最小导入验证；不依赖具体视觉组件，不复制运行时资源，除非模板或依赖实际需要。

## 目录边界

```text
xuan-space/
├─ public/
│  ├─ images/
│  └─ icons/
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ styles/
│  ├─ App.tsx
│  └─ main.tsx
├─ worker/
│  └─ index.ts
├─ docs/
│  └─ superpowers/specs/
├─ .env.example
├─ vite.config.ts
├─ wrangler.jsonc
├─ package.json
└─ tsconfig*.json
```

目录只建立未来扩展所需的边界，不提前添加空业务文件或复杂抽象。

## 运行与数据流

开发时由 Vite 提供 React 页面，并通过 Cloudflare Vite 插件接入 Worker。访问 `/api/health` 时由 Worker 返回健康状态；静态页面与资源由 Static Assets 处理。第一阶段不连接数据库、第三方代理或私密环境变量。

## 验收标准

1. `npm install` 成功完成。
2. `npm run dev` 能启动本地开发服务并显示默认 React 页面。
3. `/api/health` 返回合法 JSON，包含明确的健康状态字段。
4. `npm run build` 成功完成，生成可部署产物。
5. TypeScript 检查无新增错误。
6. `wrangler.jsonc` 不包含真实账号密钥、域名或生产资源绑定。
7. 旧版 `falling-bar-ff32` 不被修改或删除。

## 非目标

- 不制作页面视觉设计。
- 不接入真实头像、Banner 或图标素材。
- 不实现认证、数据库、代理业务或社交链接管理。
- 不执行生产部署，不切换现有线上项目。

## 风险与处理

- Cloudflare 模板和 ThreeUI 的版本可能随时间变化：以实际生成的官方模板和 npm 依赖解析结果为准，并通过构建验证兼容性。
- ThreeUI 某些组件可能需要额外资源：第一阶段只验证依赖可安装与基础导入；使用具体组件时再按其资源要求补充 `public` 配置。
- 当前工作区为空：所有新增文件均属于新项目，不会覆盖已有代码。
