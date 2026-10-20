export default function SeoirkLogo({priority=false}){
 return <img className="sk-logo-image" src="/assets/seoirk-script-logo.png" alt="Seoirk" width="2172" height="724" loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined}/>;
}
