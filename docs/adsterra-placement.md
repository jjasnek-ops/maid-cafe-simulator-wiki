# Adsterra placement — 2026-10-12

The owner approved using the four valid supplied units. The snippet labeled 300×250 was a duplicate 320×50 snippet; the 300×250 and 160×300/160×600 positions remain disabled pending correct, distinct codes.

| Unit | Home | Articles |
|---|---|---|
| 320×50 | Dismissible sticky strip below the navigation | Same strip |
| Native | After the hero | After the article body |
| 728×90 | After the second quick-start card | At the article footer |
| 468×60 | At the page footer | At the article footer |

The same unit is used once per page. Quick-start cards form a vertical list when the interleaved banner is configured. Fixed creatives keep their original dimensions; a slot that cannot fit the creative is hidden and does not load it. Native reserves an initial 4:1 desktop box and reports its actual content height to avoid cutting off mobile content. No scripts are loaded for a slot before consent or while it is outside the viewport. Closing the sticky strip is remembered for the browser session.

Identifiers and switches are stored in `wrangler.toml` public vars. Astro imports these vars for local and CI builds, preserving explicit process-env overrides. Original vendor snippets are in `public/ads/`; each file has noindex metadata and inherits the scoped ad-file headers. The existing iframe permissions are preserved; this same-origin arrangement provides layout containment, not a hard boundary against malicious vendor code. It never enables top-level navigation.

The CookieConsent prompt now covers Adsterra even when GA/AdSense are disabled. Privacy disclosure identifies Adsterra and links to its policy. Rejecting consent leaves the guides accessible and prevents ad requests. The live vendor may vary its creative or withhold fill according to its account, region and traffic checks; successful integration does not prove paid impressions or revenue. Never click ads to test monetization.

Adsterra requests a separate code for each repeated banner position: https://adsterra.com/blog/how-banner-ads-make-money/.
