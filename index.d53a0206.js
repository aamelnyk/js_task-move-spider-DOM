var t=document.querySelector(".wall"),e=document.querySelector(".spider");document.addEventListener("click",function(c){if(c.target===t){var i=t.offsetTop,o=t.offsetLeft,n=t.clientTop,l=c.clientX-n-o-e.width/2,f=c.clientY-n-i-e.width/2,d=t.clientWidth-e.offsetWidth,r=t.clientHeight-e.offsetHeight;l<0&&(l=0),f<0&&(f=0),l>d&&(l=d),f>r&&(f=r),e.style.left="".concat(l,"px"),e.style.top="".concat(f,"px")}});
//# sourceMappingURL=index.d53a0206.js.map
