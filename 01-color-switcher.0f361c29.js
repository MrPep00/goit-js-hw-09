!function(){var t,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,o.disabled=!1,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.addEventListener("click",(function(){e.disabled=!1,o.disabled=!0,clearInterval(t),document.body.style.backgroundColor=""}))}();
//# sourceMappingURL=01-color-switcher.0f361c29.js.map