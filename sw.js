// EMPIRIC V3.0: network-first navigation and versioned assets; preserve localStorage.
const CACHE='empiric-v3-0';
const ASSETS=['./','./index.html','./app.js?v=3.0','./manifest.webmanifest?v=3.0','./icon.svg?v=3.0'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(url=>new Request(url,{cache:'reload'})))).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('empiric-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;event.respondWith((async()=>{try{const response=await fetch(request,{cache:'no-store'});if(response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone()).catch(()=>{})}return response}catch{const cached=await caches.match(request);return cached||Response.error()}})())});
