if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const f=e=>c(e,d),n={module:{uri:d},exports:a,require:f};i[d]=Promise.all(s.map((e=>n[e]||f(e)))).then((e=>(r(...e),a)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"8256843e857709014df2c34e03d6e8ad"},{url:"about/index.html",revision:"e9beb8b3ab9f6937b1960775a178be1d"},{url:"archives/2022/03/index.html",revision:"e5e47bea32dc737e2eb0e75c26b29eec"},{url:"archives/2022/04/index.html",revision:"4baf077b8b7d396c7c600d695e9ddd00"},{url:"archives/2022/index.html",revision:"228f7b762852c0ba503b0096e967f658"},{url:"archives/index.html",revision:"50054ece848c367c11dffc8570d69dd2"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"c603eea21f7bee3a1ccc209814cafdb8"},{url:"categories/iOS开发/index.html",revision:"3f89d62fb9267a8788b12d1cf1f79bd2"},{url:"categories/信息论/index.html",revision:"a47cc91e820caa7dafa7a22762828e6c"},{url:"categories/嵌入式开发/index.html",revision:"48bc7b6af26e660a272b04e377dd3f4b"},{url:"categories/拓扑学-图论/index.html",revision:"8c25d305b6e9877fefe3566506afa5f8"},{url:"css/index.css",revision:"e2d84bdfa5b40d45457ad2a035274ccc"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/一笔画的背后/15bridge.png",revision:"8443e05bf5de85121ca43bf7da5e38ea"},{url:"images/一笔画的背后/7bridge.png",revision:"5027883c90464ba48c859fb42ea14e72"},{url:"images/一笔画的背后/euler.jpg",revision:"89cb42e26b64cb1705dfd5b11d8cc60c"},{url:"img/404.jpg",revision:"a30531b53821c55ebf6465ea04591569"},{url:"img/face.png",revision:"47b27b954fc943c1a5fb0744fbcb2a9a"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.jpg",revision:"350f3a032f516ec913d4cc85b61b2c66"},{url:"img/pro_404.png",revision:"f59859c98378ba0514b44ec176fb2a60"},{url:"img/wonderland.png",revision:"fe108a4563f52693c0c16f420311d0d4"},{url:"index.html",revision:"c86a76570a2b1d3b73cde3eee5cf3fc7"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"eae2fae10c2644efbc3cc0baf62771ac"},{url:"List/index.html",revision:"2cff78bb4f384873ab8db2b169fdd2fd"},{url:"posts/13868/index.html",revision:"7ac1721443c237b516f5c0e3d3801c2d"},{url:"posts/35811/index.html",revision:"9cc66c99a6b48709106c212cbed8119e"},{url:"posts/36772/index.html",revision:"5be42fb8881ccf221aa44ecef48d518f"},{url:"posts/39005/index.html",revision:"0c1ddf204c1ce45d7eabc9b66826fe9c"},{url:"posts/40687/index.html",revision:"56045695155c8fc2ccf40a0609d66da8"},{url:"posts/4179/index.html",revision:"06c65d7f22bda75adff6c28d6624e073"},{url:"posts/6421/index.html",revision:"1cb7faa6f772aea18ecbc051398d9c2c"},{url:"tags/ARKit/index.html",revision:"4317cd548f2a188e032297c5b96c9c62"},{url:"tags/index.html",revision:"790d4a696b080492b17008f562b652e6"},{url:"tags/SiriKit/index.html",revision:"f08003ec0858147b5d9c403ea39f4420"},{url:"tags/UAV/index.html",revision:"00fe60d2245d5f07b877f54b2094a287"},{url:"tags/图论/index.html",revision:"83010a290aee2c152bfddd82b741cf2a"},{url:"tags/改变世界的Paper们/index.html",revision:"93563159dc027d90114f0710298d3f77"},{url:"tags/杂/index.html",revision:"0a020777eb48872740295fbf6a1afac5"}],{})}));
//# sourceMappingURL=service-worker.js.map
