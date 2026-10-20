import Link from 'next/link';
import SeoirkLogo from './SeoirkLogo';
import SeoirkEyebrow from './SeoirkEyebrow';
import { SeoirkServices, SeoirkPriceRows } from "./SeoirkCatalog";
import SeoirkPortfolio from './SeoirkPortfolio';
import {seoirkProjects,seoirkSeoProjects} from '@/lib/seoirk-content';
export default function SeoirkHome(){return (<div id="sk-home-view">
      <section className="sk-hero sk-grid">
        <h1 className="sk-reveal" style={{"--delay": "200ms"}}><span>Создаём сайты,</span><br />которые приводят<br />клиентов</h1>
        <div className="sk-hero-directions sk-reveal" style={{"--delay":"300ms"}}>
          <Link className="sk-hero-direction sk-hero-web" href="/#sk-services" data-nav=""><span className="sk-hero-direction-name">WEB<span aria-hidden="true">↗</span></span><span className="sk-hero-direction-copy">Разработка<br />сайтов</span></Link>
          <Link className="sk-hero-direction sk-hero-seo" href="/#sk-seo-projects" data-nav=""><span className="sk-hero-direction-name">SEO<span aria-hidden="true">↗</span></span><span className="sk-hero-direction-copy">Продвижение<br />в поиске</span></Link>
        </div>
      </section>
      <section className="sk-banner sk-reveal" aria-label="Разработка и продвижение цифровых продуктов">
        <div className="sk-banner-topline sk-eyebrow"><span>SEOIRK — DIGITAL GROWTH</span><span>ДИЗАЙН. ТЕХНОЛОГИИ. РОСТ.</span></div>
        <div className="sk-banner-halo"></div><div className="sk-banner-word" aria-hidden="true">next level.</div>
        <div className="sk-device sk-device-back" aria-hidden="true"><div className="sk-device-screen"><span className="sk-device-logo"><SeoirkLogo /></span><div className="sk-device-heading">Бизнес<br />в поиске.</div><div className="sk-search-pill">ваш бизнес в Яндексе <span>↗</span></div><div className="sk-serp"><i></i><b>Ваш сайт — здесь</b><p>Понятный продукт. Сильный сайт.<br />Точки роста для бизнеса.</p></div><div className="sk-serp"><i></i><b>Больше, чем просто трафик</b><p>От первого перехода до заявки.</p></div><div className="sk-device-bottom">SEO / STRATEGY / GROWTH</div></div></div>
        <div className="sk-device sk-device-front" aria-hidden="true"><div className="sk-device-screen"><div className="sk-screen-nav"><b><SeoirkLogo /></b><span>•••</span></div><span className="sk-device-eyebrow">ЦИФРОВОЙ ПОТЕНЦИАЛ</span><div className="sk-device-heading">Ваш следующий<br />уровень.</div><div className="sk-analytics-card"><div><small>ДВИЖЕНИЕ ВПЕРЁД</small><span>↗</span></div><svg viewBox="0 0 250 120"><defs><linearGradient id="sk-chart-fill" x2="0" y2="1"><stop stopColor="#1ccecb" stopOpacity=".4"></stop><stop offset="1" stopColor="#1ccecb" stopOpacity="0"></stop></linearGradient></defs><path d="M0 110 25 100 43 108 67 75 85 80 110 65 140 70 163 35 187 40 210 15 250 0V120H0Z" fill="url(#sk-chart-fill)"></path><path d="M0 110 25 100 43 108 67 75 85 80 110 65 140 70 163 35 187 40 210 15 250 0" fill="none" stroke="#1ccecb" strokeWidth="3"></path></svg><p>ДАННЫЕ → РЕШЕНИЯ → РЕЗУЛЬТАТ</p></div><div className="sk-device-project">Сайт, который<br />работает на вас.<span>↗</span></div><div className="sk-device-bottom">РАЗРАБОТКА / ПРОДВИЖЕНИЕ</div></div></div>
        <div className="sk-banner-bottom sk-eyebrow"><span>САЙТ — ЭТО ТОЛЬКО НАЧАЛО</span><span>ПРОКРУТИТЕ ВНИЗ ↓</span></div>
      </section>
      <SeoirkPortfolio id="sk-projects" group="web" projects={seoirkProjects} title="Портфолио" eyebrow="ИЗБРАННЫЕ ПРОЕКТЫ">Продуманный дизайн.<br/>Измеримый результат.</SeoirkPortfolio>
      <div className="sk-elastic-divider" aria-hidden="true"><svg preserveAspectRatio="none"><path></path></svg></div>
      <section id="sk-services" className="sk-services">
        <div className="sk-section-heading sk-grid sk-reveal"><SeoirkEyebrow>НАПРАВЛЕНИЯ РАБОТЫ</SeoirkEyebrow><h2>Что мы делаем</h2></div>
        <div className="sk-service-window"><SeoirkServices /></div>
        <div className="sk-services-bottom sk-grid"><div className="sk-slider-controls"><button className="sk-pill sk-wobble" id="sk-slide-prev" aria-label="Предыдущая услуга">←</button><button className="sk-pill sk-wobble" id="sk-slide-next" aria-label="Следующая услуга">→</button></div><div className="sk-services-description sk-reveal"><p>Соединяем дизайн, технологии и поисковое продвижение, чтобы сайт стал рабочим инструментом вашего бизнеса.</p><small>От первого прототипа до развития проекта. Думаем о том, как вас находят, что видят на сайте и почему оставляют заявку.</small></div></div>
      </section>
      <div className="sk-elastic-divider" aria-hidden="true"><svg preserveAspectRatio="none"><path></path></svg></div>
      <section id="sk-behavior" className="sk-behavior sk-section-heading-space">
        <div className="sk-section-heading sk-grid sk-reveal"><SeoirkEyebrow>ПОВЕДЕНЧЕСКИЕ ФАКТОРЫ</SeoirkEyebrow><h2>Выше в поиске.<br />Ближе к клиенту.</h2></div>
        <div className="sk-behavior-main sk-grid"><div className="sk-behavior-symbol sk-reveal" aria-hidden="true"><span>Я</span><i>↗</i><div className="sk-orbit-caption sk-eyebrow">SEARCH / BEHAVIOR / GROWTH</div></div><div className="sk-behavior-copy sk-reveal"><span className="sk-eyebrow">ОТДЕЛЬНОЕ НАПРАВЛЕНИЕ</span><h3>Накрутка поведенческих<br />факторов в Яндексе</h3><p>Разбираем нишу, запросы и текущую видимость. Обсуждаем сценарий работы, объём и контроль динамики на старте проекта.</p><div className="sk-behavior-price"><span>1 ₽<small>/ месяц</small></span><button className="sk-text-link" data-service="2">Подробнее <span>↗</span></button></div><small className="sk-price-note">Цена-плейсхолдер. Итоговые тарифы добавим позже.</small><details className="sk-risk-details"><summary>Что важно знать перед запуском <span>+</span></summary><p>Яндекс относит имитацию действий пользователей к поисковому спаму. Возможны ограничения в ранжировании. Рост позиций не гарантируется.</p><a href="https://yandex.ru/support/webmaster/ru/threat/user-actions-imitation" target="_blank" rel="noopener noreferrer">Официальная справка Яндекса ↗</a></details></div></div>
      </section>
      <SeoirkPortfolio id="sk-seo-projects" group="seo" projects={seoirkSeoProjects} title="SEO-портфолио" eyebrow="ПРОДВИЖЕНИЕ В ПОИСКЕ" mirrored>От запроса в поиске<br/>до нового клиента.</SeoirkPortfolio>
      <section id="sk-prices" className="sk-prices sk-section-space"><div className="sk-section-heading sk-grid sk-reveal"><SeoirkEyebrow>ВАРИАНТЫ СОТРУДНИЧЕСТВА</SeoirkEyebrow><h2>Начнём с задачи</h2></div><div className="sk-pricing-caption sk-grid sk-reveal"><p>Каждый проект — со своим характером.<br />Выберите направление, обсудим детали.</p><span>Все цены временные — 1 ₽.</span></div><SeoirkPriceRows /></section>
      <div className="sk-elastic-divider" aria-hidden="true"><svg preserveAspectRatio="none"><path></path></svg></div>
      <section className="sk-about sk-studio-editorial" id="sk-about">
        <div className="sk-section-heading sk-grid sk-reveal"><SeoirkEyebrow>О СТУДИИ</SeoirkEyebrow><h2>Создаём основу.<br />Развиваем результат.</h2></div>
        <div className="sk-studio-layout sk-grid">
          <figure className="sk-studio-photo sk-reveal"><div className="sk-studio-frame"><img src="/assets/seoirk-studio-workspace.png" alt="Атмосферная фотографическая иллюстрация рабочего пространства: эскизы сайта, монитор и мягкий свет из окна" width="1122" height="1402" loading="lazy" /></div><figcaption>Внимание к деталям. На каждом этапе.</figcaption></figure>
          <div className="sk-studio-story sk-reveal"><span className="sk-studio-location">ИРКУТСК / РАБОТАЕМ ПО РОССИИ</span><p className="sk-studio-lead">Сайт и продвижение —<br />части одной задачи.</p><p>Соединяем дизайн, разработку и SEO, чтобы ваш бизнес было легко найти, понять и выбрать.</p><p>Начинаем с целей и аудитории. Продумываем структуру, собираем понятный интерфейс и закладываем основу для роста в поиске. После запуска продолжаем развивать проект.</p><div className="sk-studio-principle"><span>НАШ ПОДХОД</span><p>Меньше лишнего.<br />Больше смысла и внимания<br />к вашему бизнесу.</p></div><Link href="/contacts/" className="sk-text-link sk-magnet" data-nav="">Обсудить проект <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
      <div className="sk-elastic-divider" aria-hidden="true"><svg preserveAspectRatio="none"><path></path></svg></div>
    </div>);}
