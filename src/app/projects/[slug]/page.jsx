import Link from 'next/link';
import SeoirkEyebrow from '@/components/SeoirkEyebrow';
import {notFound} from 'next/navigation';
import {seoirkAllProjects} from '@/lib/seoirk-content';
export const dynamicParams=false;
export function generateStaticParams(){return seoirkAllProjects.map(({slug})=>({slug}));}
export async function generateMetadata({params}){const {slug}=await params;const project=seoirkAllProjects.find(p=>p.slug===slug);return {title:project?`${project.title} — концепция`:'Проект',description:project?.description};}
export default async function SeoirkProjectPage({params}){
 const {slug}=await params;const index=seoirkAllProjects.findIndex(p=>p.slug===slug);if(index<0)notFound();const project=seoirkAllProjects[index];const group=seoirkAllProjects.filter(p=>p.slug.startsWith('seo-')===project.slug.startsWith('seo-'));const next=group[(group.findIndex(p=>p.slug===slug)+1)%group.length];
 return <section className="sk-project-detail"><div className="sk-detail-heading"><SeoirkEyebrow>КОНЦЕПЦИЯ</SeoirkEyebrow><h1 className="sk-reveal">{project.title}</h1><p className="sk-reveal">{project.description} Демонстрационное наполнение — реальный кейс добавим позже.</p></div><img className="sk-detail-visual sk-reveal" src={project.image} alt={`Демонстрационная концепция: ${project.title}`} width="800" height="800"/><div className="sk-detail-facts sk-reveal"><div>НАПРАВЛЕНИЕ<span>{project.type}</span></div><div>СТАТУС<span>Плейсхолдер</span></div><div>СТОИМОСТЬ<span>1 ₽</span></div></div><div className="sk-detail-next"><Link href="/contacts/" data-nav="" className="sk-roll-text">Обсудить проект ↗</Link><Link href={`/projects/${next.slug}/`} data-nav="" className="sk-roll-text">Следующий проект ↗</Link></div></section>;
}
