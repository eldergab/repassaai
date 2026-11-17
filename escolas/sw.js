const C="repassa-v2",F=["./","index.html","curso.html","patrocinio.html","alunos.html","escolas.html","direcao.html","certificado.html","style.css","app.js","mascote.png","favicon-64.png","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
