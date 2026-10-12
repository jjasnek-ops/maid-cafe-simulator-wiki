/** Public ad configuration; all identifiers live in deployment vars. */
export const hasAdsterra = !!(
  import.meta.env.PUBLIC_ADSTERRA_SLOT_NATIVE_BANNER ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_STICKY_320X50 ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_INCONTENT_728X90 ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_FOOTER_468X60 ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_300X250 ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_160X300 ||
  import.meta.env.PUBLIC_ADSTERRA_SLOT_SIDEBAR_160X600
);

export const needsTrackingConsent = !!(
  hasAdsterra || import.meta.env.PUBLIC_GA_ID || import.meta.env.PUBLIC_ADSENSE_CLIENT
);
