import Link from 'next/link';
import SeoirkEyebrow from '@/components/SeoirkEyebrow';
export default function SeoirkNotFound(){return <section className="sk-project-detail sk-missing-page sk-interior-heading" style={{minHeight:'60vh'}}><SeoirkEyebrow>404 / SEOIRK</SeoirkEyebrow><h1 style={{fontSize:'clamp(40px,6vw,80px)',fontWeight:500,letterSpacing:'-.06em'}}>Такой страницы нет.</h1><Link href="/" data-nav="" className="sk-text-link">На главную ↗</Link></section>}
