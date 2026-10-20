import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
const failures=[];
async function walk(dir){const result=[];for(const entry of await readdir(dir,{withFileTypes:true})){const file=path.join(dir,entry.name);if(entry.isDirectory())result.push(...await walk(file));else result.push(file);}return result;}
for(const file of await walk('src')){
 const text=await readFile(file,'utf8');
 if(file.endsWith('.jsx'))for(const match of text.matchAll(/className="([^"]*)"/g))for(const cls of match[1].split(/\s+/))if(cls&&!cls.startsWith('sk-'))failures.push(`Unprefixed class ${cls}: ${file}`);
}
for(const file of ['out/index.html','out/contacts/index.html','out/projects/commerce/index.html','out/robots.txt']){
 try{const info=await stat(file);if(!info.size)failures.push(`Empty export: ${file}`);}catch{failures.push(`Missing export: ${file}`);}
}
for(let i=1;i<=7;i++)try{await stat(`public/assets/project-${String(i).padStart(2,'0')}.svg`);}catch{failures.push(`Missing project image ${i}`);}
if(failures.length){console.error(failures.join('\n'));process.exit(1);}console.log('SEOIRK: source naming, exported routes and all 7 project illustrations verified.');
