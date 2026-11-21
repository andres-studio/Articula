const VERSION='articula-v1.0.3';
const CORE=['./','./index.html','./styles.css','./app.js','./db.js','./content.js','./manifest.webmanifest','./assets/icon.svg','./assets/apple-touch-icon.png','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(fetch(req).then(response=>{if(response.ok){let copy=response.clone();caches.open(VERSION).then(c=>c.put(req,copy));}return response;}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
});
