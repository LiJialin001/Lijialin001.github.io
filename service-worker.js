if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let n={};const f=e=>s(e,d),a={module:{uri:d},exports:n,require:f};i[d]=Promise.all(r.map((e=>a[e]||f(e)))).then((e=>(c(...e),n)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/29/ARKit基础/index.html",revision:"d60085b88430c655cdf40198761eae10"},{url:"2022/03/29/ARKit基础之位置追踪/index.html",revision:"ce3e5f9bbf7b7d769120f52ea337011a"},{url:"2022/03/29/四旋翼无人机的最基础/index.html",revision:"686b251c9fc07e29c2fa43dc28863fd8"},{url:"2022/03/29/开篇/index.html",revision:"2e3b6a928eb97c29dfaf72d8548e98d2"},{url:"about/index.html",revision:"417fb42eccb18a9b005cb5cf984d05e3"},{url:"archives/2022/03/index.html",revision:"5eb379af7ed067d219c064090fb4f758"},{url:"archives/2022/index.html",revision:"271526615217aec432f782e6d3367f97"},{url:"archives/index.html",revision:"383935be9ee8e64dee36754703db51c0"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"13649ded045f8f39ef7efe5f1068b133"},{url:"categories/iOS开发/index.html",revision:"b56ed4f8a2e0fdd8dfd56c5c897111c5"},{url:"categories/嵌入式开发/index.html",revision:"f265d604d4719f2c287d023a46fcc4ea"},{url:"css/index.css",revision:"2835e1683fa07721e5c90a621e28d0e3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"a30531b53821c55ebf6465ea04591569"},{url:"img/face.png",revision:"47b27b954fc943c1a5fb0744fbcb2a9a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.jpg",revision:"350f3a032f516ec913d4cc85b61b2c66"},{url:"img/pro_404.png",revision:"f59859c98378ba0514b44ec176fb2a60"},{url:"img/wonderland.png",revision:"fe108a4563f52693c0c16f420311d0d4"},{url:"index.html",revision:"57e09684b68ace976ff055fc66290e94"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"99a104a4d7f1cf17a4371c398e8e54e5"},{url:"List/index.html",revision:"4e29074d205586d4c69dee33898bcb0c"},{url:"tags/ARKit/index.html",revision:"c9a22e0a7dd40731175cdf40264b27a2"},{url:"tags/index.html",revision:"30e5c5e8b478567935614921381ec17c"},{url:"tags/UAV/index.html",revision:"e450673bec3fa874ec92e09214999234"},{url:"tags/杂/index.html",revision:"a1b5c6add5728d730ee23964fe566112"}],{})}));
//# sourceMappingURL=service-worker.js.map
