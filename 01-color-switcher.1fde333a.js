const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let a=null;e.addEventListener("click",(()=>{a=setInterval((()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;t.style.backgroundColor=o,e.disabled=!0}),1e3)})),o.addEventListener("click",(()=>{clearInterval(a),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1fde333a.js.map