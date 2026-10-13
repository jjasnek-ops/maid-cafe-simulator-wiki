# Editorial visuals / 编辑配图

The active Steam guide uses four original AI-assisted cafe illustrations and nine original SVG information graphics added on October 12, 2026. These assets supplement the two existing body diagrams. Every article now has two body images; the homepage has a visible hero, four Quick Start thumbnails and six recent-guide covers.

本次补图使用内置 image_gen 生成 4 张原创主题插画，另制作 9 张说明图。没有把未确认授权的 Steam 图片复制进站点。插画不表示实机画面、游戏角色、准确配方或实际 DLC 商品；正文图注和首页图注明确说明用途。

## Sources and maintenance

- Illustration prompts and provenance: `research/visual-assets.json`. Assets: `public/images/editorial/`; original PNG deliverables are kept outside the repository in the task's `outputs/visual-assets/originals/`.
- Information graphics: `public/images/articles/*-v2.svg`. Their facts are already sourced in the accompanying articles. Reporting checklists and achievement groupings are editorial aids, not game mechanics.
- Article covers: seven sibling `src/assets/covers/*-v2.webp` files, each 1200×675. Original covers remain recoverable and are not overwritten.
- Homepage media and captions: `src/locales/en.json`, described by `docs/home.schema.json`. Components contain no game-specific asset paths.
- Body figures: `EditorialFigure.astro`, with explicit dimensions, descriptive ALT, captions, lazy loading and full-size image links. Raster figures and the hero have 640/1200px WebP variants. Recent-guide covers use Astro's existing image optimization.

A visual refresh does not change an article's factual verification date. Add actual screenshots or character portraits only with evidence of permission and an accurate source caption. Never substitute an invented game interface, recipe, location, character likeness or purchasable costume.

October 13 maintenance replaces the two active demo-transfer graphics and its cover with sibling `*-v3` assets. The developer confirmed a transfer problem, so the images now show current advice and a three-announcement timeline. This is a substantive fact correction; the four affected articles carry an October 13 modification date. The previous graphics remain historical assets and are no longer linked from the guide.
