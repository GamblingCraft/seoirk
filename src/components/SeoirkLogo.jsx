export default function SeoirkLogo({priority=false}){
 return <picture className="sk-logo-hologram"><img className="sk-logo-image" src="/assets/seoirk-script-logo.png" alt="Seoirk" width="2172" height="724" loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined}/><i aria-hidden="true" /></picture>;
}
