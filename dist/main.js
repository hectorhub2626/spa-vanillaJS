(()=>{"use strict";console.log("Header cargado");console.log(" api conectada");const n="https://rickandmortyapi.com/api/character/",a=async a=>{const e=a?`${n}${a}`:n;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}};console.log("Home cargado");console.log("error 404 cargado");const e=()=>'\n    <div class="Error404">\n        <h2> Error 404</h2>\n    </div>     \n    ',s=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";console.log("Character cargado");const t={"/":async()=>` \n<div class="Characters">\n${(await a()).results.map((n=>`\n    <article class="Character-item">\n        <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n        </a>\n    </article>\n`)).join("")}\n</div> \n`,"/:id":async()=>{const n=s(),e=await a(n);return`\n        <div class="Characters-inner">\n            <article class="Characters-card">\n                <img src="${e.image}" alt="${e.name}" >\n                <h2>${e.name}</h2>\n            </article>\n            <article class="Characters-card">\n                <h3>Episodes: <span>${e.episode.length}</span> </h3>\n                <h3>Status:<span>${e.status}</span>  </h3>\n                <h3>Species:<span>${e.species}</span></h3>\n                <h3>Gender:<span>${e.gender}</span></h3>\n                <h3>Origin:<span>${e.origin.name}</span></h3>\n                <h3>Last Location:<span>${e.location.name}</span></h3>\n            </article>\n            \n            \n        </div>         \n        `},"/contact":"Contact"},c=async()=>{const n=document.getElementById("header"),a=document.getElementById("content");n.innerHTML=await'\n    <div class="Header-main">\n        <div class="Header-logo">\n            <h1>\n                <a href="/">\n                    100tifi.co\n                </a>\n            </h1>\n        </div>\n        <div class="Header-nav">\n            <a href="#/about/">\n                About\n            </a>\n        </div>\n    </div>\n\n    ';let c=s(),o=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(c),r=t[o]?t[o]:e;a.innerHTML=await r()};console.log("Feliz cumpleaños Hector"),window.addEventListener("load",c),window.addEventListener("hashchange",c)})();