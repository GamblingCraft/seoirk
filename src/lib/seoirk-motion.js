import {seoirkServices,seoirkPortfolioGroups} from './seoirk-content';
import {createSeoirkDisplacement} from './seoirk-displacement';
import Lenis from 'lenis';
let seoirkHasEntered=false;
let seoirkNavigating=false;
export function startSeoirkMotion({pathname,navigate}) {
 const controller=new AbortController();const signal=controller.signal;const timers=new Set();const cleanups=[];
 const $=(s)=>document.querySelector(s);const $$=(s)=>[...document.querySelectorAll(s)];const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
 const later=(fn,ms)=>{const timer=setTimeout(()=>{timers.delete(timer);if(!signal.aborted)fn();},ms);timers.add(timer);return timer;};
 const on=(el,type,fn,opts={})=>el?.addEventListener(type,fn,{...opts,signal});
 const loader=$('#sk-preloader'),wipe=$('#sk-page-wipe'),body=document.body;
 const updateScrollbar=()=>{const range=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty('--sk-scrollbar-phase',`${range>0?Math.min(100,Math.max(0,scrollY/range*100)):0}%`);};
 if(!reduced){on(window,'scroll',updateScrollbar,{passive:true});on(window,'resize',updateScrollbar);updateScrollbar();}
 cleanups.push(()=>document.documentElement.style.removeProperty('--sk-scrollbar-phase'));
 const scrollEngine=reduced?null:new Lenis({duration:1.2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),touchMultiplier:1.5,prevent:node=>Boolean(node.closest?.('dialog'))});
 const scrollTo=(target,immediate=false)=>{if(scrollEngine)scrollEngine.scrollTo(target,{immediate,force:true});else if(typeof target==='number')window.scrollTo({top:target,behavior:immediate||reduced?'instant':'smooth'});else target?.scrollIntoView({behavior:immediate||reduced?'instant':'smooth'});};
 let loaded=seoirkHasEntered;seoirkHasEntered=true;
 if(!loaded&&pathname==='/'){
  body.classList.add('sk-loading');scrollEngine?.stop();const started=performance.now();let raf;
  const progress=(now)=>{const t=Math.min(1,(now-started)/(reduced?100:2400));const p=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;const el=$('#sk-load-number');if(el)el.textContent=Math.round(p*100);if(t<1)raf=requestAnimationFrame(progress);};raf=requestAnimationFrame(progress);cleanups.push(()=>cancelAnimationFrame(raf));
  later(()=>{loader?.classList.add('sk-loader-exit');body.classList.remove('sk-loading');scrollEngine?.start();revealVisible();},reduced?100:2200);later(()=>{if(loader)loader.hidden=true;},reduced?120:3100);
 }else{if(loader)loader.hidden=true;body.classList.remove('sk-loading');}
 if(wipe?.classList.contains('sk-covered')){later(()=>{wipe.classList.add('sk-leaving');},80);later(()=>{wipe.className='';seoirkNavigating=false;},reduced?130:1200);}else seoirkNavigating=false;
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('sk-visible');observer.unobserve(entry.target);}}},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
 function revealVisible(){$$('.sk-reveal').forEach(el=>observer.observe(el));}
 if(loaded||pathname!=='/')revealVisible();cleanups.push(()=>observer.disconnect());
 // Letter rolls are created once per rendered element; a single accessible label remains.
 $$('.sk-roll-text').forEach(el=>{
  if(el.dataset.skRoll)return;
  const text=el.textContent;el.dataset.skRoll='true';el.setAttribute('aria-label',text);el.textContent='';
  let index=0;
  const addLetters=(parent,word)=>{for(const letter of word){const char=document.createElement('span');char.className='sk-roll-char';char.style.setProperty('--i',index++);char.setAttribute('aria-hidden','true');for(let j=0;j<2;j++){const copy=document.createElement('span');copy.textContent=letter===' '?'\u00a0':letter;char.append(copy);}parent.append(char);}};
  if(el.hasAttribute('data-roll-wrap')){
   for(const word of text.split(/(\s+)/)){if(!word)continue;if(/^\s+$/.test(word)){el.append(document.createTextNode(word));index+=word.length;}else{const group=document.createElement('span');group.className='sk-roll-word';addLetters(group,word);el.append(group);}}
  }else addLetters(el,text);
 });
 function go(href){const url=new URL(href,location.origin);if(url.origin!==location.origin)return;if(url.pathname.replace(/\/$/,'')===pathname.replace(/\/$/,'')){if(url.hash){const el=document.getElementById(decodeURIComponent(url.hash.slice(1)));if(el)scrollTo(el);history.replaceState(history.state,'',url.pathname+url.hash);}else scrollTo(0);return;}if(seoirkNavigating)return;seoirkNavigating=true;closeDrawer(true);closeReel();if(reduced){navigate(url.pathname+url.hash);return;}wipe?.classList.add('sk-active');later(()=>wipe?.classList.add('sk-covered'),20);later(()=>{scrollTo(0,true);navigate(url.pathname+url.hash);},1050);}
 on(document,'click',event=>{const a=event.target.closest('a[data-nav]');if(!a||event.metaKey||event.ctrlKey||event.altKey||event.shiftKey||event.button!==0)return;event.preventDefault();event.stopPropagation();go(a.href);},{capture:true});
 if(location.hash)later(()=>{const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target)scrollTo(target,true);},150);
 $$('.sk-magnet').forEach(el=>{on(el,'pointermove',e=>{if(reduced||e.pointerType!=='mouse')return;const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.15}px,${(e.clientY-r.top-r.height/2)*.15}px)`;});on(el,'pointerleave',()=>{el.style.transform='';});});
 // Header: preserve document flow while revealing a fixed copy on upward scroll.
 const header=$('.sk-header');let previousY=scrollY,lastActivity=performance.now();let spacer=null;
 function resetHeader(){header?.classList.remove('sk-is-fixed');spacer?.remove();spacer=null;}
 on(window,'scroll',()=>{const y=scrollY;if(y<100||y>previousY+3){resetHeader();}else if(y>150&&y<previousY-3){if(!header?.classList.contains('sk-is-fixed')){spacer=document.createElement('div');spacer.className='sk-header-spacer';spacer.style.height=`${header.offsetHeight}px`;header.after(spacer);header.classList.add('sk-is-fixed');}lastActivity=performance.now();}previousY=y;},{passive:true});cleanups.push(resetHeader);
 // Service drawer uses a native modal dialog for focus containment and Escape handling.
 const drawer=$('#sk-service-dialog');let drawerTrigger=null,drawerClosing=false;
 function openDrawer(index){const service=seoirkServices[index];if(!service||!drawer)return;drawerClosing=false;drawerTrigger=document.activeElement;$('.sk-drawer-background').style.backgroundImage=`url('/assets/${service.image}')`;$('.sk-drawer-content').innerHTML=`<h2 id="sk-drawer-title">${service.title}</h2><p class="sk-drawer-lead">${service.lead}</p><p>${service.text}</p><ul>${service.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="sk-drawer-price">1 ₽<small>${service.unit}</small></div><small class="sk-price-note">Временная цена. Тарифы заполним позже.</small><a class="sk-drawer-cta" href="/contacts/" data-nav>Обсудить задачу <span>↗</span></a>`;drawer.setAttribute('aria-labelledby','sk-drawer-title');if(!drawer.open)drawer.showModal();scrollEngine?.stop();body.classList.add('sk-modal-open');drawer.scrollTop=0;later(()=>drawer.classList.add('sk-opened'),30);}
 function closeDrawer(immediate=false){if(!drawer?.open||drawerClosing&&!immediate)return;drawerClosing=true;drawer.classList.remove('sk-opened');const finish=()=>{drawer.close();body.classList.remove('sk-modal-open');scrollEngine?.start();drawerTrigger?.focus({preventScroll:true});drawerClosing=false;};if(immediate||reduced)finish();else later(finish,700);}
 on(document,'click',e=>{const trigger=e.target.closest('[data-service]');if(trigger){if(performance.now()<suppressCardClick)return;openDrawer(Number(trigger.dataset.service));}});
 on(drawer?.querySelector('.sk-close-button'),'click',()=>closeDrawer());on(drawer,'cancel',e=>{e.preventDefault();closeDrawer();});on(drawer,'click',e=>{const r=drawer.getBoundingClientRect();if(e.target===drawer&&(e.clientX<r.left||e.clientX>r.right))closeDrawer();});
 const reel=$('#sk-reel-dialog');function closeReel(){if(reel?.open){reel.close();body.classList.remove('sk-modal-open');scrollEngine?.start();}}
 on($('#sk-open-reel'),'click',()=>{reel.showModal();scrollEngine?.stop();body.classList.add('sk-modal-open');});on(reel?.querySelector('.sk-close-button'),'click',closeReel);on(reel,'close',()=>{body.classList.remove('sk-modal-open');scrollEngine?.start();});on(reel,'click',e=>{if(e.target===reel)closeReel();});on($('#sk-reel-contact'),'click',()=>{closeReel();go('/contacts/');});
 on(window,'wheel',()=>{if(reel?.open)closeReel();},{passive:true});
 // Small service previews follow the pointer without intercepting row clicks.
 const pricePreview=$('#sk-price-preview');
 function hidePricePreview(){pricePreview?.classList.remove('sk-preview-visible');}
 function showPricePreview(row,x,y){if(!pricePreview||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;const width=pricePreview.offsetWidth,height=pricePreview.offsetHeight;let left=x+26;if(left+width>innerWidth-16)left=x-width-26;pricePreview.style.left=`${Math.max(16,Math.min(innerWidth-width-16,left))}px`;pricePreview.style.top=`${Math.max(16,Math.min(innerHeight-height-16,y-height/2))}px`;pricePreview.querySelectorAll('img').forEach(img=>img.classList.toggle('sk-price-image-active',img.dataset.priceImage===row.dataset.service));pricePreview.classList.add('sk-preview-visible');}
 $$('.sk-price-row').forEach(row=>{on(row,'pointerenter',e=>{if(e.pointerType==='mouse')showPricePreview(row,e.clientX,e.clientY);});on(row,'pointermove',e=>{if(e.pointerType==='mouse')showPricePreview(row,e.clientX,e.clientY);});on(row,'pointerleave',hidePricePreview);on(row,'focus',()=>{const r=row.getBoundingClientRect();showPricePreview(row,r.left+r.width*.55,r.top+r.height/2);});on(row,'blur',hidePricePreview);on(row,'click',hidePricePreview);});
 on(window,'scroll',()=>{const row=document.activeElement;if(row?.matches('.sk-price-row:focus-visible')){const r=row.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)showPricePreview(row,r.left+r.width*.55,r.top+r.height/2);else hidePricePreview();}else hidePricePreview();},{passive:true});on(window,'resize',hidePricePreview);on(document,'keydown',e=>{if(e.key==='Escape')hidePricePreview();});cleanups.push(hidePricePreview);
 // Carousel: pointer gesture, vertical scroll arbitration, arrows, cyclic positions.
 const track=$('#sk-service-track'),windowEl=$('.sk-service-window');let slide=0,drag=null,suppressCardClick=0,offset=0;
 function sliderMetrics(){const card=track?.firstElementChild;const step=(card?.getBoundingClientRect().width||0)+(innerWidth<640?12:20);const max=Math.max(0,(track?.scrollWidth||0)-(windowEl?.clientWidth||0));return {step,max,pages:step?Math.ceil(max/step):0};}
 function updateSlider(){if(!track)return;const {step,max,pages}=sliderMetrics();slide=Math.min(slide,pages);offset=-Math.min(slide*step,max);track.style.transform=`translateX(${offset}px)`;}
 on($('#sk-slide-prev'),'click',()=>{const {pages}=sliderMetrics();slide=slide===0?pages:slide-1;updateSlider();});on($('#sk-slide-next'),'click',()=>{const {pages}=sliderMetrics();slide=slide===pages?0:slide+1;updateSlider();});
 on(track,'pointerdown',e=>{if(e.button!==0)return;drag={x:e.clientX,y:e.clientY,offset,dx:0,locked:false};});
 on(window,'pointermove',e=>{if(!drag||!track)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(!drag.locked&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>5){drag=null;return;}if(Math.abs(dx)>5)drag.locked=true;if(!drag.locked)return;drag.dx=dx;track.classList.add('sk-dragging');const {max}=sliderMetrics();track.style.transform=`translateX(${Math.max(-max-40,Math.min(40,drag.offset+dx))}px)`;});
 function endDrag(){if(!drag)return;if(drag.locked){const {pages}=sliderMetrics();if(drag.dx<-20)slide=Math.min(pages,slide+1);if(drag.dx>20)slide=Math.max(0,slide-1);suppressCardClick=performance.now()+350;}drag=null;track?.classList.remove('sk-dragging');updateSlider();}
 on(window,'pointerup',endDrag);on(window,'pointercancel',endDrag);on(track,'dragstart',e=>e.preventDefault());updateSlider();
 // Portfolio displacement is native WebGL; reduced-motion/mobile retain regular images.
 const portfolios=$$('[data-portfolio]').map(section=>{
  const projects=seoirkPortfolioGroups[section.dataset.portfolio];if(!projects)return null;
  const fallback=section.querySelector('[data-portfolio-image]'),canvas=section.querySelector('[data-portfolio-canvas]'),open=section.querySelector('[data-portfolio-open]');
  let selected=0;const displacement=!reduced&&fallback?createSeoirkDisplacement(canvas,projects.map(p=>p.image),fallback):null;
  const select=index=>{selected=index;const project=projects[index];fallback.src=project.image;fallback.alt=`Концепция: ${project.title}`;open.setAttribute('aria-label',`Открыть проект: ${project.title}`);displacement?.transitionTo(index,performance.now());};
  section.querySelectorAll('[data-project]').forEach(el=>{on(el,'pointerenter',()=>select(Number(el.dataset.project)));on(el,'focus',()=>select(Number(el.dataset.project)));});
  on(open,'click',()=>go(`/projects/${projects[selected].slug}/`));return displacement;
 }).filter(Boolean);
 const separators=$$('.sk-elastic-divider').map(el=>({el,path:el.querySelector('path'),x:0,v:0,target:0,width:0}));
 separators.forEach(item=>{on(item.el,'pointermove',e=>{if(reduced)return;const r=item.el.getBoundingClientRect();const dy=e.clientY-r.top-r.height/2;item.target=Math.abs(dy)<60?-Math.sign(dy)*(1-Math.abs(dy)/60)*60:0;});on(item.el,'pointerleave',()=>{item.target=0;});});
 const wave=$('.sk-footer-wave');const wavePaths=wave?[...wave.querySelectorAll('path')]:[];let waveTarget=0,waveValue=0,waveVelocity=0;
 on(wave,'pointermove',e=>{if(reduced)return;const r=wave.getBoundingClientRect();const y=e.clientY-r.top-r.height/2;waveTarget=Math.abs(y)<100?-Math.sign(y)*(1-Math.abs(y)/100)*80:0;});on(wave,'pointerleave',()=>{waveTarget=0;});
 function resize(){updateSlider();for(const item of separators){item.width=item.el.querySelector('svg').clientWidth;const svg=item.path.ownerSVGElement;svg.setAttribute('viewBox',`0 0 ${item.width} 200`);item.path.setAttribute('d',`M 0 100 Q ${item.width/2} 100 ${item.width} 100`);}portfolios.forEach(portfolio=>portfolio.resize());}
 on(window,'resize',resize,{passive:true});resize();
 let frame,prior=performance.now();let waveVisible=false;const waveObserver=wave?new IntersectionObserver(e=>{waveVisible=e[0].isIntersecting;},{rootMargin:'100px'}):null;waveObserver?.observe(wave);cleanups.push(()=>waveObserver?.disconnect());
 function tick(now){const dt=Math.min(.035,(now-prior)/1000);prior=now;scrollEngine?.raf(now);portfolios.forEach(portfolio=>portfolio.tick(now));if(header?.classList.contains('sk-is-fixed')&&now-lastActivity>2500)resetHeader();
  if(!reduced){for(const item of separators){if(Math.abs(item.x-item.target)>.01||Math.abs(item.v)>.01){const a=(item.target-item.x)*300-item.v*4;item.v+=a*dt;item.x+=item.v*dt;item.path.setAttribute('d',`M 0 100 Q ${item.width/2} ${100+item.x} ${item.width} 100`);}}}
  if(waveVisible||reduced){waveVelocity+=((waveTarget-waveValue)*300-waveVelocity*10)*dt;waveValue+=waveVelocity*dt;for(let line=0;line<wavePaths.length;line++){const points=[],amplitude=50+24*(2.5-Math.abs(line-2.5));for(let step=0;step<=100;step++){const x=step/100,envelope=x>=.25&&x<=.75?Math.sin((x-.25)/.5*Math.PI):0;const y=250+Math.sin(x*(1+.15*line)*Math.PI*2+(reduced?0:now/1000*1.5)+.8*line)*amplitude*envelope+waveValue*Math.sin(x*Math.PI);points.push(`${step},${y.toFixed(2)}`);}wavePaths[line].setAttribute('d',`M${points.join(' L')}`);}}
  if(!signal.aborted)frame=requestAnimationFrame(tick);
 }
 frame=requestAnimationFrame(tick);cleanups.push(()=>cancelAnimationFrame(frame));
 $$('.sk-to-top').forEach(el=>on(el,'click',()=>scrollTo(0)));
 // Contact demo: validate and download a local brief; never claim a message was sent.
 const form=$('#sk-brief-form');if(form){
  try{const draft=JSON.parse(sessionStorage.getItem('seoirk-brief')||'null');if(draft)for(const name of ['name','contact','message'])form.elements[name].value=draft[name]||'';}catch{}
  on(form,'input',e=>{e.target.closest('.sk-field')?.classList.remove('sk-invalid');if(e.target.tagName==='TEXTAREA'){e.target.style.height='auto';e.target.style.height=`${e.target.scrollHeight}px`;}});
  on(form,'submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));let invalid=null;for(const name of ['name','contact','message']){const el=form.elements[name];const valid=String(data[name]||'').trim().length>0;el.closest('.sk-field').classList.toggle('sk-invalid',!valid);el.setAttribute('aria-invalid',String(!valid));if(!valid&&!invalid)invalid=el;}const status=$('.sk-form-status');if(invalid){status.textContent='Заполните имя, контакт и описание задачи.';status.classList.add('sk-error');invalid.focus();return;}status.classList.remove('sk-error');try{sessionStorage.setItem('seoirk-brief',JSON.stringify(data));}catch{}const text=`SEOIRK — бриф проекта\n\nИмя: ${data.name}\nКонтакт: ${data.contact}\n\nЗадача:\n${data.message}\n\nБриф сохранён локально. Сообщение не отправлялось.`;const blob=new Blob(['\ufeff'+text],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='seoirk-project-brief.txt';a.click();later(()=>URL.revokeObjectURL(url),1500);status.textContent='Бриф сохранён в файл. Данные не отправлялись.';});
 }
 function clock(){const el=$('#sk-local-time');if(!el)return;const [hours,minutes]=new Intl.DateTimeFormat('ru-RU',{timeZone:'Asia/Irkutsk',hour:'2-digit',minute:'2-digit'}).format(new Date()).split(':');el.innerHTML=`${hours}<span>:</span>${minutes}`;}clock();const clockInterval=setInterval(clock,1000);cleanups.push(()=>clearInterval(clockInterval));
 return ()=>{controller.abort();timers.forEach(clearTimeout);cleanups.forEach(fn=>fn());portfolios.forEach(portfolio=>portfolio.destroy());scrollEngine?.destroy();resetHeader();if(drawer?.open)drawer.close();if(reel?.open)reel.close();body.classList.remove('sk-modal-open','sk-loading');if(loader)loader.hidden=true;};
}
