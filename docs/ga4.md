# GA4 integration

Enabled on October 14, 2026 for the production site through `wrangler.toml` → `PUBLIC_GA_ID = "G-ES5L29VBHG"`. The measurement ID is public tag configuration, not an API credential. The owner authorized creation of a separate **Maid Cafe Simulator Wiki** property and the **maidcafesimulatorguide.wiki** HTTPS web stream. Reporting time zone is China / GMT+08:00; reporting currency is USD. Enhanced measurement uses the web stream's settings.

## Runtime behavior

- `BaseLayout.astro` exposes the standard `window.gtag` queue. Basic consent mode starts all four Google consent fields as denied, without loading the Google library.
- `CookieConsent.astro` loads trackers only for accepted visitors. Acceptance grants analytics storage; Google advertising storage, user data and personalization stay denied. No Google Analytics network request is made for an undecided or declined visitor.
- One `config` command sends the initial page view. The page-level guard prevents duplicate initialization; there is no separate manual page_view event.
- Google signals and ad-personalization signals are disabled. Localhost and Pages preview hosts are excluded using the configured site's hostname; aliases redirect to the canonical production hostname.
- The existing Adsterra consent and layout rules are unchanged. Privacy text identifies GA4 and links to Google's privacy policy. The website collects no account or form identity through this integration.
- The privacy page's **Change cookie choices** button clears the stored preference and reloads into the undecided state. Choosing Decline then blocks subsequent tracker loading; existing browser cookies are not represented as deleted.

## Verification and maintenance

Check an undecided visit, a declined visit, an accepted visit and a returning accepted visit. Verify the Google library and page view appear only after acceptance on the production hostname. Check the property's realtime view for a controlled test visit and record it as QA traffic, not an organic visitor. Local reports and screenshots are kept under `reports/ga4/` and are not committed.

The tag collects data from activation onward. Do not treat pre-activation analytics as zero historical traffic, and do not infer Google indexing from Analytics events. Standard report processing and realtime reception are separate verification results.

References: [Google tag setup](https://developers.google.com/tag-platform/gtagjs), [basic consent mode](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic).
