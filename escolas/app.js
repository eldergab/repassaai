// CONFIGURE AQUI: WhatsApp da AFFE (com 55 + DDD, só números) e e-mail
const CFG={wa:"5562920026981",affe:"https://affe.com.br"};
const P=[["index","Projeto"],["curso","Curso"],["patrocinio","Patrocínio"],["alunos","Alunos"],["escolas","Escolas"],["direcao","Para a direção"],["certificado","Certificado"]];
const cur=location.pathname.split("/").pop().replace(".html","")||"index";
document.body.insertAdjacentHTML("afterbegin",'<header class="nav"><div><b><img src="favicon-64.png" alt="" width="30" height="30" style="border-radius:8px">Repassa Aí</b>'+P.map(p=>`<a href="${p[0]}.html"${p[0]==cur?" aria-current=page":""}>${p[1]}</a>`).join("")+`<a class="btn" href="${CFG.affe}" target="_blank" rel="noopener">Conheça a AFFE</a></div></header>`);
document.querySelectorAll("form[data-t]").forEach(f=>f.addEventListener("submit",e=>{
 e.preventDefault();
 const L=[f.dataset.t,""];
 f.querySelectorAll("[name]").forEach(i=>{if(i.type=="checkbox")L.push((i.checked?"[x] ":"[ ] ")+i.dataset.l);else if(i.value)L.push(i.dataset.l+": "+i.value)});
 L.push("","Enviado em "+new Date().toLocaleDateString("pt-BR"));
 const t=L.join("\n");
 f.querySelector("#ok").textContent="Abrindo o WhatsApp com os dados preenchidos. Confira e toque em enviar.";
 window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(t),"_blank");
 }));
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js");
