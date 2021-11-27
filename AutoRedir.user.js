// ==UserScript==
// @name        AutoRedir
// @run-at      document-start
// @match       *://www.google.com/url?*
// @match       *://links.jianshu.com/go?*
// @match       *://www.jianshu.com/go-wild?*
// @match       *://link.zhihu.com/*
// @grant       none
// ==/UserScript==

function a(){var f=b,g=0;return function(){return g<f.length?{done:!1,value:f[g++]}:{done:!0}}}var c,b=[{g:/^https:\/\/www\.google\.com\/url\?q=(.+)$/i},{g:/^https:\/\/links\.jianshu\.com\/go\?to=(.*)$/i},{g:/^https:\/\/www\.jianshu\.com\/go\-wild\?.*/i,h:"url"},{g:/^http(?:s)?:\/\/link.zhihu\.com\/\?target=(.*)$/i}],d="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];c=d?d.call(b):{next:a()};
for(var e=c.next();!e.done;e=c.next()){var h=e.value;if(h.g.test(window.location.href)){var k;if(h.h){var l=decodeURIComponent,m,n=h.h;m=(new URL(window.location.href)).searchParams.get(n);k=l(m)}else h.i?k=h.i():k=decodeURIComponent(h.g.exec(window.location.href)[1]);if(k){window.location.href=k;break}}};
