(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t,n=!1){const d=document.createElement("div"),c=document.createElement("p");if("Mario's Fine Burguer"==t){const e=document.createElement("img");e.src="../src/logo.png",d.appendChild(e)}c.textContent=t,d.appendChild(c),e.appendChild(d),!0===n&&function(e){const t=["Segunda-feira: 18:30 - 23:30","Terça-feira: 18:30 - 23:30","Quarta-feira: 18:30 - 23:30","Quinta-feira: 18:30 - 23:30","Sexta-Feira: 18:30 - 23:30","Sábado: Fechado","Domingo: Fechado"];for(let n=0;n<t.length;n++){const d=document.createElement("p");d.classList.add("workingHours"),d.textContent=t[n],e.appendChild(d)}}(d)}e.d({},{k:()=>m});const n=document.createElement("div");let d=!1;function c(){if(o.classList.add("hidden"),a.classList.add("hidden"),d)n.classList.remove("hidden");else{n.classList.add("centerDiv");const e=document.createElement("div");e.classList.add("centerDiv"),t(e,"Nossas Redes");const c=document.createElement("div");c.classList.add("centerDiv","logos");const a=document.createElement("a");a.classList.add("centerDiv","transformScale"),a.href="https://api.whatsapp.com/send?phone=5531992298584&text=Boa noite Mario! Gostaria de fazer um pedido!";const i=document.createElement("img");i.src="../src/wpp-logo.svg",a.appendChild(i),c.appendChild(a);const s=document.createElement("a");s.classList.add("centerDiv","transformScale"),s.href="https://www.instagram.com/mariosfineburguer/";const o=document.createElement("img");o.src="../src/ig-logo.svg",s.appendChild(o),c.appendChild(s);const r=document.createElement("a");r.classList.add("centerDiv","transformScale"),r.href="https://www.facebook.com/mariosfineburgers/";const l=document.createElement("img");l.src="../src/fb-logo.svg",r.appendChild(l),c.appendChild(r),n.appendChild(e),n.appendChild(c),m.appendChild(n),d=!0,n.classList.remove("hidden")}}const a=document.createElement("div");let i=!1;function s(){if(o.classList.add("hidden"),n.classList.add("hidden"),i)a.classList.remove("hidden");else{a.classList.add("centerDiv");const e=document.createElement("div");e.classList.add("centerDiv"),t(e,"Cardápio");const n=document.createElement("img");n.src="../src/menu.png",e.setAttribute("id","normalAlign"),e.appendChild(n),a.appendChild(e),a.setAttribute("id","menuDiv"),m.appendChild(a),i=!0,a.classList.remove("hidden")}}const o=document.createElement("div");let r=!1;function l(){if(a.classList.add("hidden"),n.classList.add("hidden"),r)o.classList.remove("hidden");else{const e=document.createElement("div");e.classList.add("centerDiv"),t(e,"Mario's Fine Burguer"),t(e,"Aqui você preenche o sanduíche da vida com os melhores ingredientes"),o.appendChild(e),function(){const e=document.createElement("div");e.classList.add("centerDiv"),t(e,"Horário de funcionamento",!0),o.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("centerDiv");const t=document.createElement("p");t.textContent="Localização",e.appendChild(t);const n=document.createElement("div");n.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.5988013901053!2d-43.983962322781736!3d-19.86481197307746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d31675716bedacc!2sMario&#39;s%20Fine%20Burguer&#39;s!5e0!3m2!1spt-BR!2sbr!4v1643241718461!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>',n.classList.add("map"),e.appendChild(n),o.appendChild(e);const d=document.createElement("p");d.textContent="Avenida Fleming, 1481",e.appendChild(d)}(),r=!0,m.appendChild(o)}}document.createElement("div");const m=document.getElementById("content");!function(){const e=document.createElement("header"),t=document.createElement("button");t.textContent="Home";const n=document.createElement("button");n.textContent="Cardápio";const d=document.createElement("button");d.textContent="Contato",e.appendChild(t),e.appendChild(n),e.appendChild(d),t.addEventListener("click",l),n.addEventListener("click",s),d.addEventListener("click",c),m.appendChild(e)}(),l()})();