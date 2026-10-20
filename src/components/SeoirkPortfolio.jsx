import Link from 'next/link';

export default function SeoirkPortfolio({id,group,projects,title,eyebrow,mirrored=false,children}){
 return <section id={id} data-portfolio={group} className={`sk-projects sk-section-space${mirrored?' sk-projects-mirrored':''}`}>
  <div className="sk-section-heading sk-grid sk-reveal"><span className="sk-eyebrow">{eyebrow}</span><h2>{title}</h2></div>
  <div className="sk-projects-layout sk-grid">
   <div className="sk-project-list">{projects.map((project,index)=><Link key={project.slug} href={`/projects/${project.slug}/`} data-nav="" data-project={index} className="sk-project-item sk-reveal" style={{'--delay':`${index*65}ms`}}><img className="sk-project-mobile-image" src={project.image} alt={`Плейсхолдер: ${project.title}`} loading="lazy" width="800" height="800"/><span className="sk-roll-text">{project.title}</span></Link>)}</div>
   <div className="sk-project-preview sk-reveal"><div className="sk-preview-stage"><img data-portfolio-image="" src={projects[0].image} alt={`Концепция: ${projects[0].title}`} width="800" height="800"/><canvas data-portfolio-canvas="" aria-hidden="true"/><span className="sk-preview-badge sk-eyebrow">ПЛЕЙСХОЛДЕР / 01</span><button data-portfolio-open="" aria-label={`Открыть проект: ${projects[0].title}`}>↗</button></div><p>{children}</p><span className="sk-demo-label">Пока плейсхолдеры — реальные кейсы добавим позже.</span></div>
  </div>
 </section>;
}
