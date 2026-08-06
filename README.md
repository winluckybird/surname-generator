# Surname Generator

一个面向英语用户的随机姓氏生成器网站。当前版本提供美国和苏格兰姓氏生成器，目标是逐步扩展到更多国家和文化分类，并为每个分类建立可被搜索引擎收录的独立页面。

网站主要服务于作家、游戏玩家、角色创作者以及需要姓氏灵感的用户。分类标签用于组织数据，不代表某个姓氏可以证明真实人物的国籍、族裔、血统或家族历史。

## 当前状态

- 已完成可运行的多分类 MVP。
- 当前数据包含 1,000 个唯一、非空的美国常见姓氏，以及 3,672 个
  1975–2025 年间记录在苏格兰的唯一、非空姓氏。
- 所有公开页面均可由 Next.js 静态预渲染。
- 当前没有后端、数据库、账户系统、分析工具或广告代码。
- 生成结果只保存在浏览器内存中；收藏按分类保存在浏览器
  `localStorage`，刷新页面后仍会保留。

## 功能列表

### 姓氏生成器

- 随机生成 1、10 或 50 个姓氏。
- Regenerate：按照上一次选择的数量重新生成。
- 尽量避免新一批结果与上一批结果立即重复。
- 自动将原始大写姓氏转换为适合展示的格式。
- Copy list：一次复制当前完整结果。
- 收藏或取消收藏单个姓氏。
- Copy favorites：复制所有收藏。
- Clear all：清空全部收藏。
- 没有收藏时自动隐藏 Favorites shelf。
- 生成 50 个结果时在较宽屏幕使用两列，手机端保持一列。
- 显示生成、复制、收藏和错误状态反馈。
- 支持桌面端和移动端响应式布局。

### 页面与 SEO

- 首页：`/`
- 美国姓氏独立页面：`/american-surnames`
- 苏格兰姓氏独立页面：`/scottish-surnames`
- About：`/about`
- Contact：`/contact`
- Privacy Policy：`/privacy`
- Terms of Use：`/terms`
- 自定义 404 页面
- 自动生成 `/robots.txt`
- 自动生成 `/sitemap.xml`
- 页面级 title、description 和 canonical URL
- 英文语义化内容、面包屑导航和内部链接

## 技术架构

### 技术栈

| 类型 | 当前技术 |
| --- | --- |
| 应用框架 | Next.js 16.3.0，App Router |
| UI | React 19.2.8 |
| 语言 | TypeScript 5，启用 strict 模式 |
| 样式 | Tailwind CSS 4 |
| 代码检查 | ESLint 9、Next.js Core Web Vitals |
| 数据 | 版本控制中的 JSON 文件 |
| 后端 | 无 |
| 数据库 | 无 |
| 当前渲染方式 | 所有路由静态预渲染 |

页面和 SEO 内容默认使用 Server Components。`SurnameGenerator` 因为需要 React 状态、点击事件和浏览器 Clipboard API，所以是 Client Component。

### 目录结构

```text
app/
├─ layout.tsx                  # 全站布局、默认 Metadata、Header 和 Footer
├─ page.tsx                    # 首页和主生成器入口
├─ american-surnames/page.tsx  # 美国姓氏 SEO 页面
├─ scottish-surnames/page.tsx  # 苏格兰姓氏 SEO 页面
├─ about/page.tsx              # About 页面
├─ contact/page.tsx            # Contact 页面
├─ privacy/page.tsx            # Privacy Policy
├─ terms/page.tsx              # Terms of Use
├─ not-found.tsx               # 404 页面
├─ robots.ts                   # robots.txt
├─ sitemap.ts                  # sitemap.xml
└─ globals.css                 # Tailwind 和全局样式
components/
├─ SurnameGenerator.tsx        # 生成、复制、收藏和状态 UI
├─ SiteHeader.tsx              # 全站顶部导航
└─ SiteFooter.tsx              # 页脚和信任页面链接
data/
├─ american-surnames.json      # 1,000 个生产姓氏数据
├─ scottish-surnames.json      # 3,672 个生产姓氏数据
├─ surnames.ts                 # 分类注册表
└─ sources/                    # 原始数据源文件
lib/
├─ format-surname.ts           # 姓氏显示格式转换
└─ site.ts                     # 域名、描述和联系邮箱配置
public/                        # 公共静态资源
```

### 主要数据流

```text
data/*-surnames.json
        ↓
data/surnames.ts 分类注册
        ↓
SurnameGenerator 客户端组件
        ↓
随机结果、复制和 localStorage 收藏
```

原始 Census 和 National Records of Scotland Excel 文件保存在
`data/sources/`，用于数据追溯。生产页面使用对应的 JSON 数据文件。

## 本地运行

### 环境要求

- Node.js 24 推荐。当前开发环境已在 Node.js `24.19.0` 上验证。
- npm。当前开发环境使用 npm `11.17.0`。
- Git。

项目目前没有通过 `engines` 或 `.nvmrc` 固定 Node.js 版本。使用其他 Node.js 版本时，应先处理安装过程中出现的 engine 警告。

### 安装和启动

在项目根目录运行：

```powershell
npm ci
npm run dev
```

如果不是从完整的 `package-lock.json` 安装，也可以使用：

```powershell
npm install
npm run dev
```

看到类似以下内容表示开发服务器已经启动：

```text
Local: http://localhost:3000
Ready
```

然后在浏览器打开：

```text
http://localhost:3000
```

停止开发服务器：在运行服务器的终端中按 `Ctrl + C`。

### 常用命令

| 命令 | 用途 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器 |
| `npm run lint` | 执行 ESLint 检查 |
| `npm run build` | 执行 TypeScript 检查并生成正式构建 |
| `npm run start` | 启动已经完成构建的生产服务器 |

项目当前没有自动化测试命令。不要把 `lint` 或 `build` 描述成自动化功能测试。

## 环境变量

示例配置位于 [`.env.example`](./.env.example)。本地开发时创建 `.env.local`：

```powershell
Copy-Item .env.example .env.local
```

macOS 或 Linux：

```bash
cp .env.example .env.local
```

变量说明：

| 变量 | 是否生产环境必需 | 作用 |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 是 | Metadata、canonical、robots 和 sitemap 使用的正式网站地址 |
| `NEXT_PUBLIC_CONTACT_EMAIL` | 建议设置 | Contact 页面显示的公开联系邮箱 |

示例：

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@your-domain.com
```

注意事项：

- 不要把 `.env.example` 中的 `example.com` 和 `you@example.com` 用于正式部署。
- `lib/site.ts` 会移除域名末尾的 `/`。
- 没有设置 `NEXT_PUBLIC_SITE_URL` 时，本地回退为 `http://localhost:3000`。
- 没有设置联系邮箱时，Contact 页面会显示“上线前添加邮箱”的提示。
- `.env.local` 已被 Git 忽略，不要提交真实环境变量。
- `NEXT_PUBLIC_*` 会暴露给客户端，只能保存公开信息，不能存放密码、数据库凭据或 API 密钥。

## 部署方式

仓库当前没有绑定部署平台，也没有启用 Next.js 静态导出。应部署到支持 Next.js 16 的平台或 Node.js 运行环境。

### 方式一：Vercel

1. 将仓库推送到 Git 托管平台。
2. 在 Vercel 中导入项目。
3. 配置 `NEXT_PUBLIC_SITE_URL` 和 `NEXT_PUBLIC_CONTACT_EMAIL`。
4. 使用项目默认的安装和构建设置执行部署。
5. 部署后检查首页、分类页、`/robots.txt` 和 `/sitemap.xml`。
6. 确认页面 canonical 使用正式域名，而不是 localhost、example.com 或预览域名。

### 方式二：自托管 Node.js

在服务器中配置环境变量，然后运行：

```bash
npm ci
npm run build
npm run start
```

默认生产服务器监听 `3000` 端口。正式环境通常还需要反向代理、HTTPS、进程守护和日志管理，这些设施当前不在仓库中。

### 部署前检查

```powershell
npm run lint
npm run build
```

并确认：

- 正式域名和联系邮箱已经配置。
- 所有公开页面可以打开。
- `/robots.txt` 指向正确的 sitemap。
- `/sitemap.xml` 中没有 localhost 或 example.com。
- Privacy Policy 与实际使用的分析、Cookie 和广告服务一致。

当前项目尚未安装分析或广告代码。以后接入这些服务时，必须同时复查隐私政策和适用的用户同意要求。

## 开发规范

完整规则以根目录的 [`AGENTS.md`](./AGENTS.md) 为准。所有开发者和 AI Agent 在修改文件前都应完整阅读该文件。

核心规范：

- 使用 Next.js App Router；页面和内容默认使用 Server Components。
- 只有需要状态、事件或浏览器 API 的最小范围使用 `"use client"`。
- 保持 TypeScript strict 模式，不用 `any` 绕过类型检查。
- 使用 `@/` 路径别名导入项目模块。
- React 组件使用 `PascalCase.tsx`；路由目录和普通模块使用小写 kebab-case。
- 可复用 UI 放入 `components/`；纯函数放入 `lib/`；数据和分类配置放入 `data/`。
- 不修改 `.next/`、`node_modules/` 或原始来源表格。
- 不在未获批准的情况下加入后端、数据库、账户、外部服务、分析或广告。
- 页面必须保持一个可见 `h1`、语义化结构、键盘焦点和必要的 ARIA 标签。
- 新增分类时，需要同时更新数据、分类注册、分类页面、内链、Metadata 和 sitemap。
- SEO 页面必须提供独立、准确的内容，不能只替换国家名称制造重复页面。
- 不得声称姓氏可以证明真实人物的国籍、族裔、祖先或家族关系。

### 修改数据

修改或新增姓氏数据时：

1. 保留原始来源文件到 `data/sources/`。
2. JSON 数据保持为字符串数组，当前原始格式使用大写姓氏。
3. 检查总数、唯一数量和空值数量。
4. 在 `data/surnames.ts` 注册分类名称、slug、描述和数据文件。
5. 确认 slug 与 `app/` 中的路由目录完全一致。
6. 重新检查生成器、分类页面和 sitemap。

### 修改后的检查

修改 TypeScript、React、配置、数据或 SEO 后至少运行：

```powershell
npm run lint
npm run build
git diff --check
```

交互功能还必须实际在浏览器测试。生成器相关修改应覆盖：

- Generate 1、10 和 50
- Regenerate
- Copy list
- 收藏和取消收藏
- Copy favorites
- Clear all
- 没有收藏时的折叠状态
- 桌面端和窄屏移动端布局

## 当前限制与后续方向

- 当前有 American Surnames 和 Scottish Surnames 两个分类。
- 收藏只保存在当前浏览器，不能跨设备同步。
- 没有数据库、后台、用户账户或跨设备同步。
- 没有自动化测试框架。
- 没有 Open Graph、Twitter Card 或结构化数据。
- 没有 Google Search Console、访问分析或广告集成。
- `SurnameGenerator.tsx` 已经承担较多职责，继续增加大型功能前应拆分组件和交互逻辑。

项目当前适合继续开发更多高质量分类页面、补充测试、配置正式域名并部署上线。
