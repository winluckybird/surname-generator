# Google SEO Strategy

Last reviewed: August 8, 2026

本文件用于指导开发者和 AI Agent 持续优化 Surname Generator 的 Google
SEO。内容同时记录当前代码状态和未来执行规则。SEO 不能保证排名或收录；所有
策略必须以真实用户价值、准确内容和 Google Search Central 最新官方文档为准。

## 1. 网站目标关键词

当前关键词是根据产品功能和页面搜索意图制定的目标方向，不代表已经通过
Search Console、Keyword Planner 或第三方工具验证了搜索量。网站部署并积累真实
数据后，应使用 Search Console 的 query、page、impression、click、CTR 和 average
position 数据调整优先级。

### 首页 `/`

主要搜索意图：寻找通用随机姓氏生成工具。

| 类型 | 目标关键词 |
| --- | --- |
| Primary | `surname generator` |
| Primary variant | `random surname generator` |
| Primary variant | `random last name generator` |
| Secondary | `last name generator` |
| Secondary | `generate random surnames` |
| Secondary | `random surnames for characters` |

首页负责通用生成器意图，不应与某个具体国家页面争夺同一组分类关键词。

### American 页面 `/american-surnames`

主要搜索意图：寻找美国姓氏或美国姓氏生成工具。

| 类型 | 目标关键词 |
| --- | --- |
| Primary | `American surname generator` |
| Primary variant | `American last name generator` |
| Primary variant | `random American last names` |
| Secondary | `US surname generator` |
| Secondary | `random US last names` |
| Secondary | `common American surnames` |
| Secondary | `American surnames for characters` |

### Scottish 页面 `/scottish-surnames`

主要搜索意图：寻找记录在苏格兰的姓氏或 Scottish surname 生成工具。

| 类型 | 目标关键词 |
| --- | --- |
| Primary | `Scottish surname generator` |
| Primary variant | `Scottish last name generator` |
| Primary variant | `random Scottish last names` |
| Secondary | `surnames recorded in Scotland` |
| Secondary | `Scottish surnames for characters` |

### Japanese 页面 `/japanese-surnames`

主要搜索意图：寻找带罗马字拼写、假名和汉字的日本姓氏生成工具。

| 类型 | 目标关键词 |
| --- | --- |
| Primary | `Japanese surname generator` |
| Primary variant | `Japanese last name generator` |
| Primary variant | `random Japanese last names` |
| Secondary | `Japanese surnames with kanji` |
| Secondary | `Japanese surnames with kana` |
| Secondary | `Japanese surnames for characters` |

当前 MIT 许可的数据源没有说明估算人数的统计日期或采集方法，因此不定位
`official Japanese surname ranking`、`current surname population` 等无法支持的意图。

### Trust 和 policy 页面

`/about`、`/contact`、`/privacy` 和 `/terms` 的主要作用是品牌、可信度和
合规，不应为了获取非相关流量强行加入 surname generator 关键词。

### 未来分类关键词模式

每个新分类只能在拥有可靠数据和独立页面内容后使用以下模式：

- `{Country} surname generator`
- `{Country} last name generator`
- `random {Country} last names`
- `common {Country} surnames`
- `{Country} surnames for characters`

不要定位当前数据无法支持的 `surname meanings`、`surname origins`、genealogy、
ethnicity、ancestry 或 demographic 关键词。不要使用 `meta keywords` 标签；Google
Search 不使用该标签进行索引或排名。

### 关键词使用规则

- 一个主要搜索意图对应一个主要页面，避免首页和分类页关键词互相竞争。
- 关键词应自然出现在 title、H1、介绍、正文和相关内链锚文本中。
- 不设关键词密度目标，不重复堆砌关键词或变体。
- 页面应首先完整满足用户任务，再考虑补充相关词。
- Search Console 出现新的真实查询后，先判断页面是否真正满足该意图，再决定
  更新现有页面或创建新页面。

## 2. 当前页面 SEO 状态

### 页面审计

| 页面 | 当前 SEO 状态 | 已完成 | 主要缺口 |
| --- | --- | --- | --- |
| `/` | 基础完成 | 默认 title、description、canonical、H1、American、Scottish 与 Japanese 分类内链 | 内容深度有限；没有 Schema |
| `/american-surnames` | 基础较完整 | 独立 title、description、canonical、H1、breadcrumb、FAQ、可见静态内容 | 内容深度有限；没有 Schema |
| `/scottish-surnames` | 基础较完整 | 独立 title、description、canonical、H1、breadcrumb、FAQ、可见静态内容 | 内容深度有限；没有 Schema |
| `/japanese-surnames` | 基础较完整 | 独立 title、description、canonical、H1、breadcrumb、FAQ、数据来源与限制说明、可见静态内容 | 没有 Schema |
| `/about` | 完成 | 独立 metadata、canonical、一个 H1、多个语义 section | 不需要主动扩展非品牌关键词 |
| `/contact` | 完成但依赖环境变量 | 独立 metadata、canonical、联系信息区 | 正式邮箱尚未配置时会显示占位提示 |
| `/privacy` | 当前产品状态下完成 | 独立 metadata、canonical、Cookie/analytics 说明 | 添加 analytics、ads 或 tracking 前必须更新 |
| `/terms` | 完成 | 独立 metadata、canonical、用途和限制说明 | 产品或商业模式发生实质变化时需要复查 |
| 404 | 完成 | 自定义页面、返回首页链接 | 不应加入 sitemap |

### 技术 SEO 已完成

- Next.js App Router 页面均可静态预渲染，核心内容存在于初始 HTML。
- 根布局设置 `lang="en"`。
- `metadataBase` 来自 `siteConfig.url`。
- 首页和所有公开内容页面都有 canonical。
- American、Scottish、Japanese 和 supporting pages 有独立 title 与 description。
- `/robots.txt` 允许公开抓取并声明 sitemap。
- `/sitemap.xml` 包含首页、分类页和 supporting pages。
- Header、主页分类卡片、breadcrumb 和 footer 提供可抓取内部链接。
- 页面使用 `main`、`article`、`section`、`nav`、H1、H2 和 H3 等语义结构。
- 当前生产构建中的公开页面全部为静态路由。

### 尚未完成或无法在本地确认

- `NEXT_PUBLIC_SITE_URL` 尚未在生产环境配置；本地会回退到
  `http://localhost:3000`，示例配置仍为 `https://example.com`。
- 没有 Open Graph、Twitter Card 或分享图片。
- 没有 JSON-LD 或其他结构化数据。
- 没有 Google Search Console verification。
- 没有已提交的生产 sitemap。
- 没有真实 Google index coverage、query、impression、click 或 CTR 数据。
- 没有 Core Web Vitals 生产数据。
- 没有 analytics，当前也不应声称已经测量自然搜索表现。

只有在网站部署到正式域名并通过 Search Console 检查后，才能判断 Google 是否抓取、
选择了哪个 canonical、是否收录以及实际排名情况。

## 3. URL 结构

### 当前结构

```text
/
/american-surnames
/japanese-surnames
/scottish-surnames
/about
/contact
/privacy
/terms
/robots.txt
/sitemap.xml
```

### URL 规则

- 所有公开路径使用 lowercase、ASCII、kebab-case。
- 分类页使用 `/<category>-surnames`，例如 `/american-surnames`。
- 当前 canonical 采用不带结尾 `/` 的形式，新增页面保持一致。
- slug 一旦上线并被索引，不要随意修改。必须修改时设置永久重定向到新 URL，更新
  canonical、sitemap 和所有内部链接。
- 生成数量、随机结果、复制状态和收藏属于 UI 状态，不创建 SEO URL。
- 不为每个随机生成的 surname 建立页面，避免无限 URL、重复内容和 thin pages。
- 不使用 hash fragment 切换需要被索引的主体内容。
- 不使用 query 参数创建国家、批量数量或生成结果的可索引副本。
- Sitemap、canonical 和内部链接只能指向正式首选 URL。
- Preview deployment URL、localhost 和 example.com 不得出现在生产 canonical 或
  sitemap 中。

### 新 URL 上线检查

1. 路由返回正常的 `200` 页面。
2. 页面有唯一 title、description、canonical 和 H1。
3. 页面可以从至少一个现有公开页面通过 `<a href>` 到达。
4. 页面加入分类注册表或手动 sitemap 列表。
5. Sitemap URL 与页面 canonical 完全一致。
6. 页面不是旧页面的近似复制。

## 4. Title 规则

Google 没有规定固定的 title 字符上限；搜索结果会根据设备宽度截断，也可能根据页面
内容和查询重写 title link。因此不要为了一个机械字符数牺牲准确性。

### 当前 title 模式

```text
Homepage:
Surname Generator | Random Last Name Generator

Category page:
American Surname Generator | Random US Last Names

Supporting pages:
About Surname Generator
Contact Surname Generator
Privacy Policy
Terms of Use
```

### 执行规则

- 每个 indexable 页面必须有唯一、准确、简洁的 title。
- 主要搜索意图靠前出现，但只能自然出现一次。
- Title 应与页面 H1、可见主标题和页面实际功能一致。
- 避免只有 `Home`、`Generator`、`Page` 等模糊标题。
- 避免重复关键词、同义词堆砌、夸张承诺和无支持的数字。
- 品牌名只在有助于识别时简洁出现，不要让长品牌模板掩盖页面差异。
- 分类 title 推荐模式：

  ```text
  {Category} Surname Generator | Random {RegionLabel} Last Names
  ```

- 只有页面确实提供该分类数据时才能使用 `{Category}`。
- 修改 title 后同步检查 H1、description、canonical、内链锚文本和页面内容。
- 上线后在 Search Console 检查 Google 是否频繁重写 title；若被重写，优先检查
  title 与 H1 不一致、重复模板、过长、关键词堆砌或内容不匹配。

## 5. Meta Description 规则

Google 可能使用 meta description，也可能根据查询从页面正文生成 snippet。Google
没有固定 description 字符限制，搜索结果会按设备宽度截断。

### 当前 description

首页继承 `siteConfig.description`：

```text
Generate random surnames and explore last names from different countries and cultures.
```

American 页面：

```text
Generate random American surnames from a list of 1,000 common last names recorded in the 2020 United States Census.
```

American description 准确且包含明确数据范围。首页 description 在只有 American 分类时
略超前于实际功能，增加更多分类前应考虑改成与当前功能完全一致的描述。

### 执行规则

- 每个重要页面使用唯一、易读、与页面内容一致的 description。
- 用一到两句说明页面提供什么、适合什么用户，以及可验证的独特信息。
- 分类页可包含真实的数据数量、地区和来源年份，但数据变化时必须同步更新。
- 自然包含主要关键词，不写关键词列表。
- 不写 `best`、`complete`、`official`、`accurate origins` 等无法证明的承诺。
- 不复制同一个 description 到所有国家页面。
- 大量分类页可以使用程序化结构，但必须由真实的 category、count、region 和 source
  数据生成，并保持语句自然、页面间有实际差异。
- Description 与页面正文冲突时，以修正文案为先，不通过 description 隐藏差异。
- 不添加 `meta keywords`。

## 6. Schema 规则

### 当前状态

当前代码没有 JSON-LD、Microdata 或 RDFa。没有 Schema 不会阻止普通网页被抓取或
索引，但网站也没有向 Google 明确提供 site name、breadcrumb 等结构化信息。

### 推荐顺序

1. 首页添加 `WebSite` JSON-LD，使用真实 site name 和 production URL。
2. 分类页添加 `BreadcrumbList` JSON-LD，条目必须与可见 breadcrumb 和 canonical
   完全一致。
3. 只有在确有真实、公开的组织信息时才考虑 `Organization`；不要虚构公司、地址、
   logo、社交账号或联系方式。
4. `FAQPage` 不是当前优先事项。Google 目前通常只为知名政府和健康网站展示 FAQ
   rich results。即使添加，也必须只标记页面上用户可见且内容完全相同的问题和答案，
   并且不承诺获得富媒体结果。

### Schema 执行规则

- 优先使用 Google 推荐的 JSON-LD 格式。
- Schema 必须描述页面真实可见的主要内容，不能标记隐藏内容。
- 使用 `siteConfig.url` 生成 absolute URL 和稳定的 `@id`。
- Schema 中的 name、URL、breadcrumb、description 和页面 Metadata 保持一致。
- 不添加虚假 rating、review、author、organization、price 或统计数据。
- 不因为 Schema.org 存在某个类型就默认 Google 支持对应 rich result。
- 每次修改后使用 Rich Results Test；非 Google rich-result 类型还应使用 Schema.org
  validator 检查基础语法。
- 部署后使用 Search Console URL Inspection 确认 Google 渲染后的 JSON-LD。
- 结构化数据只提供理解线索，不保证 rich result、索引或排名。

## 7. Sitemap 策略

### 当前实现

`app/sitemap.ts` 当前生成：

- 首页：由 `siteConfig.url` 生成。
- 分类页：从 `data/surnames.ts` 自动读取 slug。
- Supporting pages：手动维护 `about`、`contact`、`privacy` 和 `terms`。
- 所有条目使用 absolute URL。
- 当前每次构建都设置 `lastModified: new Date()`。
- 当前还设置 `changeFrequency` 和 `priority`。

### 已知问题

- Google 官方说明会忽略 XML sitemap 中的 `priority` 和 `changefreq`。
- Google 只会在 `lastmod` 持续且可验证地准确时使用它。当前每次构建把所有页面标记为
  刚更新，不代表页面发生了重要内容变化，应在后续 SEO 实现中改为真实更新时间，或者
  在无法保证准确时省略 `lastModified`。

### Sitemap 规则

- 只包含希望被 Google 索引的 canonical、公开、返回 `200` 的 URL。
- 不包含 404、preview URL、localhost、随机结果、收藏状态或重复参数 URL。
- 新分类通过 `data/surnames.ts` 自动进入 sitemap；其他新页面必须更新 supporting
  pages 列表。
- Sitemap 中的 URL 必须与 canonical、内部链接和正式域名完全一致。
- `lastModified` 只在主要内容、结构化数据或重要链接发生实质变化时更新。
- 不为页脚年份变化或每次部署伪造更新时间。
- 站点规模超过单个 sitemap 的限制前，不需要 sitemap index。
- 正式上线后通过 Search Console 提交一次根 sitemap，并监控读取错误与索引覆盖。
- Sitemap 帮助发现 URL，但不保证抓取或索引；重要页面仍然必须有内部链接。

## 8. Internal Linking 策略

### 当前内链

- Header：品牌链接到首页，导航链接到 American、Scottish 和 Japanese 页面。
- 首页：分类卡片链接到 `/american-surnames`、`/scottish-surnames` 和
  `/japanese-surnames`。
- American 页面：breadcrumb 链接回首页。
- Scottish 页面：breadcrumb 链接回首页。
- Japanese 页面：breadcrumb 链接回首页。
- Footer：链接到 About、Contact、Privacy 和 Terms。
- 404：链接回首页。

当前所有重要页面都能从网站导航结构中到达，没有已知孤立公开页面。

### 内链规则

- 每个 indexable 页面至少从另一个相关页面获得一个 crawlable 内链。
- 使用 Next.js `Link`，确保最终输出标准 `<a href="...">`。
- 锚文本应简洁、描述目标内容，例如 `American Surname Generator`，而不是
  `click here` 或 `read more`。
- 不为锚文本强行堆砌多个关键词变体。
- 新分类必须从首页分类列表或分类导航链接；不能只依赖 sitemap。
- 分类页保留指向首页的 breadcrumb。
- 当有多个分类时，在内容相关且对用户有帮助的页面之间增加 contextual links。
- Header 只保留主要入口，避免随着分类增加无限扩张；分类较多时建立可索引的分类中心
  页面。
- Footer 继续承担 trust 和 policy 页面链接，不把大量关键词页面塞进页脚。
- 桌面和移动布局应提供相同的重要链接集合。
- 外部来源链接应有上下文。普通可信来源不需要 `nofollow`；付费广告链接必须使用
  `rel="sponsored"` 或适当的 `nofollow`。
- 定期检查断链、错误 slug、重复 canonical 和 orphan pages。

## 9. 内容扩展策略

### Phase 1：修正现有内容

- [x] American FAQ 已更新为说明支持 1、10 和 50 个结果，并与当前选择逻辑一致。
- 继续确保首页对多个国家和文化分类的描述与实际可用分类保持一致。
- 确保所有关于数量、年份和来源的陈述与实际 JSON 和来源文件一致。
- 不为追求所谓 freshness 只修改日期；只有实际改进内容时才更新日期或 sitemap
  `lastmod`。

### Phase 2：增加高质量分类页面

每个新分类必须同时具备：

1. 可靠且可追溯的数据来源。
2. 清理后的唯一、非空 surname 数据。
3. 独立 route、title、description、canonical 和 H1。
4. 描述该列表如何组织的独立介绍，避免把分类标签写成人物身份结论。
5. 与该分类真实相关、不是批量替换国家名生成的支持内容。
6. 对生成器用途、数据限制和文化重叠的准确解释。
7. 首页或分类中心内链、breadcrumb 和 sitemap 条目。
8. 桌面和移动端功能检查。

禁止一次自动生成大量只有国家名不同的 thin pages。Google 更重视有明确受众、原创
价值、可靠信息和完整用户体验的 people-first content，而不是为覆盖关键词批量生产的
页面。

### Phase 3：建立主题内容集群

只有在能提供真实独立价值并且 Search Console 数据显示用户需求后，再考虑支持文章，
例如：

- 如何为虚构角色选择合适的 surname。
- surname 与 last name 的用法解释。
- 不同已上线分类之间的使用场景或命名习惯比较。
- 数据清理、随机选择和分类限制的透明方法说明。

支持文章必须链接到相关生成器，分类页也可在真正有帮助时链接回相关文章。不要写当前
数据不支持的 surname meaning、origin 或 ancestry 结论。

### Phase 4：根据真实数据迭代

部署并接入 Search Console 后，每月检查：

- 哪些页面已索引或被排除，以及排除原因。
- 哪些 query 带来 impressions 和 clicks。
- 高 impression、低 CTR 页面是否存在 title 或 description 不匹配。
- 排名查询是否与页面真实意图一致。
- Google 选择的 canonical 是否与声明一致。
- 新页面是否有内部链接、被 sitemap 发现并成功抓取。
- 页面内容、功能说明和数据数量是否已经过时。

不以固定字数作为内容质量目标，不因短期排名波动批量删除或重写页面。优先解决用户
任务、事实准确性、重复内容、技术抓取问题和页面体验。

## SEO 发布检查清单

每次增加或修改 indexable 页面时检查：

- [ ] 页面满足一个明确且与现有页面不同的搜索意图。
- [ ] 页面内容对用户有独立价值，不是模板替换。
- [ ] 一个可见 H1，且与 title 和正文一致。
- [ ] 独立 title、description 和 canonical。
- [ ] Canonical、Schema、sitemap 和内链使用同一个正式 URL。
- [ ] 至少一个相关页面提供描述性内链。
- [ ] 页面在初始 HTML 中包含主要内容。
- [ ] 数据数量、年份、地区和限制陈述可以验证。
- [ ] 页面不把 surname 分类写成真实人物身份结论。
- [ ] Schema 只描述可见内容并通过适当验证。
- [ ] Sitemap 只使用准确 `lastmod`，或在不准确时省略。
- [ ] `npm run lint` 和 `npm run build` 通过。
- [ ] `/robots.txt` 和 `/sitemap.xml` 使用正式域名。
- [ ] 桌面和移动端都可访问重要内容与链接。
- [ ] 部署后使用 Search Console URL Inspection 检查代表性 URL。

## Google 官方参考

AI Agent 在 Google 更新规则后，应优先重新核对以下官方资料，而不是依赖过时的 SEO
博客或固定字符数经验：

- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Title link best practices](https://developers.google.com/search/docs/appearance/title-link)
- [Meta descriptions and snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [URL structure best practices](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Sitemap overview](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Structured data introduction](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Site name and WebSite structured data](https://developers.google.com/search/docs/appearance/site-names)
- [FAQ rich result visibility change](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
