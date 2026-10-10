# Launch implementation notes

The project was initialized with the official AnvilWiki v2.37.0 `apply-template` command and its native bulk article pipeline. English is the only production locale. Native Astro/MDX routes, Pagefind, covers and SEO helpers remain in use.

## Necessary template adjustments

- The Astro site/sitemap fallback now reads the configured domain instead of the template's fixed production hostname. Otherwise a configured game site built with template-domain sitemap URLs.
- Header/footer icons read the optional generic `logoIcon` setting. The mobile menu has a localized accessible name.
- Legal content reflects the enabled integrations and distinguishes the independent wiki contact from developer support. Advertisements and analytics are disabled.
- Narrow mobile achievement tables scroll within their existing container. The page body does not overflow.
- An explicit FAQ item type permits an empty configured codes FAQ without inferring `never[]`. No redemption-code content is published.

## Test scope

The upstream template contains both a reusable wiki and its own marketing website. Native template application removes the marketing files, demo articles and extra locales from this game fork. Tests that exercise reusable initialization and rewrite behavior use pinned, MIT-licensed upstream fixtures. They retain their original assertions instead of requiring unrelated demo pages in the production content collection.

Three removed marketing feature suites (community digest, landing paths and redirects) are preserved under `tests/upstream-only/`, explicitly excluded from Vitest and TypeScript. Four marketing-only cases in remaining suites are conditionally skipped when their removed files are absent. The Windows run has 21 suites, 363 passing tests and 10 skipped tests; five skips are upstream Python3-dependent tests. Linux CI runs those five tests, giving 368 passing tests and 5 skipped tests. The setup warning-removal contract also reads the pinned template wrangler fixture after initialization. English-only type fixtures explicitly document the expected type errors for the retained multilingual runtime helper contracts.

Fixtures and excluded tests are source/test data only. They are not present in `dist/`, Pagefind or the sitemap. This scope is disclosed so a passing test result is not mistaken for testing features that the game fork does not ship.

## Editorial limits

The walkthrough is a beginner operations guide, not an unverified thirteen-chapter route. All 23 Steam achievements are listed; three hidden requirements and vague relationship thresholds remain unknown. Troubleshooting statements cite specific community threads and do not promise universal fixes. Exact recipes, endings and star/bond thresholds remain deferred in the page matrix.

No firsthand gameplay, paid keyword measurement, licensed game screenshots, SEO rank guarantee or advertising revenue is claimed. Original diagrams illustrate only the mechanisms supported by the linked official material.
