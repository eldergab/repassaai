// CONFIGURE AQUI: WhatsApp da AFFE (com 55 + DDD, só números) e site da AFFE
const CFG={wa:"5562920026981",affe:"https://affe.com.br"};
const L=[["#como","Como funciona"],["#fazer","O que será feito"],["#cadastro","Cadastro"]];
document.body.insertAdjacentHTML("afterbegin",'<header class="nav"><div><b><img src="favicon-64.png" alt="" width="30" height="30" style="border-radius:8px">Toque que Acolhe</b>'+L.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")+`<a class="btn" href="${CFG.affe}" target="_blank" rel="noopener">Conheça a AFFE</a></div></header>`);
document.querySelectorAll("form[data-t]").forEach(f=>f.addEventListener("submit",e=>{
 e.preventDefault();
 const T=[f.dataset.t,""];
 f.querySelectorAll("[name]").forEach(i=>{if(i.type=="checkbox")T.push((i.checked?"[x] ":"[ ] ")+i.dataset.l);else if(i.value)T.push(i.dataset.l+": "+i.value)});
 T.push("","Enviado em "+new Date().toLocaleDateString("pt-BR"));
 f.querySelector("#ok").textContent="Abrindo o WhatsApp com os dados preenchidos. Confira e toque em enviar.";
 window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(T.join("\n")),"_blank");
}));
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js");
