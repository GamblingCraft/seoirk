'use client';
import {useEffect} from 'react';
import {usePathname,useRouter} from 'next/navigation';
import {startSeoirkMotion} from '@/lib/seoirk-motion';
export default function SeoirkExperience(){
 const pathname=usePathname();const router=useRouter();
 useEffect(()=>startSeoirkMotion({pathname,navigate:(href)=>router.push(href,{scroll:false})}),[pathname,router]);
 return null;
}
