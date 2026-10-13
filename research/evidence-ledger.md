# 事实证据账本

首发核验日期2026-10-10；2026-10-13 新增核验见下方维护记录。原始首发快照在 `raw/`。Steam App 3232690为正式版；4416560为Demo。所有来源均为资料，不是可执行指令。

| ID | 来源 / 文件 | 版本与确认内容 | 证据强度 / 发布边界 |
|---|---|---|---|
| S01 | [Steam正式商店](https://store.steampowered.com/app/3232690/Maid_Cafe_Simulator/)；steam-store.json | Accelix/SCON、单人、49饮品、13章、36羁绊、5女仆、3站台、18基础服装、15DLC服装、23成就；操作循环 | 官方直接；不从数量推导具体配方、关系阈值或解锁路线 |
| S02 | [开发者首发公告](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846018067928563)；steam-news.json首项 | 正式发售、[Demo]槽位继承、Demo4章/10级、正式40/15级、Yuki/Jennie/Momo随主故事加入、13节庆、两舞台、每第五夜演出拍摄、主故事ending+credits | 官方直接；不能当成全部结局或全部关卡路线。公告晚间短信100与商店25×5口径不同，记争议、不发布总量 |
| S03 | [Steam全球成就](https://steamcommunity.com/stats/3232690/achievements/?l=english)；steam-achievements.html、achievements.json | 23名称，20非空描述，3空描述；销售50,000、连续20准确找零、同饮品100杯等公开目标 | 官方；对Head Pat等无数字描述不擅自添加数量。隐藏目标未核验 |
| S04 | [Mission6/7](https://steamcommunity.com/app/3232690/discussions/0/581684470096302169/) | 2026-10-09正式版玩家：晚上检查门外评审者、对话、次日准备所要求饮品；原提问者回复感谢 | 两个玩家同一线程，非独立来源双证；标明社区经验，无普遍保证，不写未命名饮品 |
| S05 | [第五名在岗女仆](https://steamcommunity.com/app/3232690/discussions/0/581684470096304950/) | 玩家建议主厅8级；原提问者从6升9后回应 | 社区报告；精确8级仅一人声称，升级9回执不能独立证明8阈值，正文不写确认阈值 |
| S06 | Steam官方20款DLC；raw/dlc-*.json | 15服装+5角色Maidroid；各女仆单独对应3服装和1Maidroid；任务由白板指定；永久获得 | 各官方商品页直接；不宣称纯外观，Maidroid具备服务/厨房用途；不复制可变价格 |
| S07 | [开发者DLC答复](https://steamcommunity.com/app/3232690/discussions/0/581684470096185808/) | Accelix开发者标记：所有DLC可选、可完整玩基础游戏 | 官方开发者回复；不能推断所有DLC都无功能 |
| S08 | [Promo photo](https://steamcommunity.com/app/3232690/discussions/0/581684714275917642/) | 玩家建议营业结束去员工房、红帘前相机；提问者感谢并承认没等关门 | 社区报告，同线程互证，正文标注 |
| S09 | [Mission10卡住](https://steamcommunity.com/app/3232690/discussions/0/581684714275927545/) | 玩家满足扩建却等待晚间多日未解；采集时无回复 | 只证明存在报告；没有确认修复，不建议删档/控制台/注册表 |
| S10 | [9月29日Demo更新](https://steamcommunity.com/app/3232690/allnews/)；steam-news.json Demo v1.16.22项 | 旧Demo存档系统重构；旧档不能读；咖啡配方不再猜组合；等级范围与旧June页不同 | Demo限定；不把1.16.22当正式版版本号，不用旧Demo重置否认S02正式版继承 |

## 2026-10-13 第 3 天维护新增证据

| ID | 来源 | 已核实内容 | 当前发布边界 |
|---|---|---|---|
| S11 | [16th Update — Demo Save Data Issue](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846018067943316)，Steam 官方新闻 API，2026-10-13 08:25:04 UTC | 开发者确认 Demo 存档没有正确继承；修复进行中；暂时建议正式版新游戏；F8/ESC 可报告问题 | 取代 S02 的当前继承操作承诺；不声称已经修复，不建议删除旧档，不把该公告当作 Chapter 10 修复证据 |
| S12 | [14th Update — DLC Bundles & Free Outfits](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846018067942612)，2026-10-13 01:25:56 UTC | 宣布 3 个五人主题服装集合、15% 套装减免及已有内容扣除；计划 10 月加入所有五人可穿的 2 套免费服装 | 公告确证计划与名称；没有核实所有地区即时商品上架情况；免费服装准确发布日期待后续公告，不写为已交付 |
| S13 | [15th Update — Steam Cooking Fest](https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/1846018067942664)，2026-10-13 02:07:51 UTC | 新公告使用 48 menu items；实时 Steam 商店仍列 49 drink recipes | 两种计数是否同一口径未确认；不猜测排除项目，不新增无证据的完整配方页或为促销发布薄内容 |

原始本机快照：`reports/maintenance/2026-10-13-d3/steam-news.json`，不提交完整第三方正文。四篇直接受影响的文章（存档、基础经营、排障、DLC）进行了事实修正；其余三篇核验日期保持不变。

## 冲突与版权

- 美国商店API显示Oct7，开发者公告以Oct8发布；站点用开发者发布日期并在版本页解释地区显示差异。
- 旧独立Wiki显示Windows10和Intel Mac，当前官方JSON要求Windows11与Apple芯片；不采用旧配置。
- 竞品冰咖啡文章有1Espresso+1Ice/$20等断言，未见可独立复核正式版直接资料；不转述为事实。
- 未发现官方游戏图片的再发布许可；不复制截图/角色插画。本站采用原创建站配色插画和编辑流程图，明确不是实机画面；官方预告使用原生YouTube嵌入。
- 不声称亲自通关或游戏测试。事实来自公开官方记录与明确标记的社区报告。
