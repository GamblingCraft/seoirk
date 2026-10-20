import {Inter,Cormorant_Garamond} from 'next/font/google';

// The reference uses Inter; include the Cyrillic subset explicitly.
export const seoirkSans=Inter({
  subsets:['latin','cyrillic'],
  style:'normal',
  display:'swap',
  variable:'--font-seoirk-sans',
  fallback:['Arial','sans-serif'],
});

// A Cyrillic-capable, high-contrast serif for the studio wordmark.
export const seoirkBrand=Cormorant_Garamond({
  subsets:['latin','cyrillic'],
  weight:'700',
  style:'normal',
  display:'swap',
  variable:'--font-seoirk-brand',
  fallback:['Georgia','serif'],
});
