import 'lenis/dist/lenis.css';
import './seoirk.css';
import {SeoirkHeader,SeoirkFooter,SeoirkMotionChrome} from '@/components/SeoirkChrome';
import SeoirkExperience from '@/components/SeoirkExperience';
export const metadata = {
  metadataBase:new URL('https://seoirk.ru'),
  title:{default:'SEOIRK — разработка сайтов и SEO-продвижение',template:'%s — SEOIRK'},
  description:'Разработка сайтов, SEO-продвижение и работа с поведенческими факторами в Яндексе. Цифровая студия SEOIRK, Иркутск.',
  robots:{index:false,follow:false},
  icons:{icon:'/assets/favicon.svg'},
  openGraph:{title:'SEOIRK — сайты, которые приводят клиентов',description:'Разработка, дизайн и поисковое продвижение. Иркутск / Россия.',locale:'ru_RU',type:'website',siteName:'SEOIRK'},
};
export const viewport={themeColor:'#000000',width:'device-width',initialScale:1};
export default function SeoirkRootLayout({children}){
  return <html lang="ru"><body><a className="sk-skip-link" href="#sk-main">Перейти к содержимому</a><SeoirkMotionChrome/><SeoirkHeader/><main id="sk-main">{children}</main><SeoirkFooter/><SeoirkExperience/></body></html>;
}
