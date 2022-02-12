// ==UserScript==
// @name        AutoRedir
// @run-at      document-start
// @match       *://www.google.com/url?*
// @match       *://links.jianshu.com/go?*
// @match       *://www.jianshu.com/go-wild?*
// @match       *://link.zhihu.com/?*
// @match       *://link.juejin.cn/?*
// @match       *://link.csdn.net/?*
// @grant       none
// ==/UserScript==

(function () {
  function getParamString(name) {
    return new URL(window.location.href).searchParams.get(name);
  }
  function getRegexResult(regex) {
    return regex.exec(window.location.href);
  }
  const rules = [
    { reg: /^https?:\/\/www\.google\.com\/url\?q=(.+)$/i }, // google lucky
    { reg: /^https?:\/\/links\.jianshu\.com\/go\?to=(.*)$/i }, // jianshu
    { reg: /^https?:\/\/www\.jianshu\.com\/go\-wild\?.*/i, params: "url" }, // jianshu
    { reg: /^https?:\/\/link\.zhihu\.com\/\?target=(.*)$/i }, // zhihu
    { reg: /^https?:\/\/link\.juejin\.cn\/\?target=(.*)$/i }, // juejin
    { reg: /^https?:\/\/link\.csdn\.net\/\?target=(.*)$/i }, // csdn
  ];

  for (const rule of rules) {
    if (rule.reg.test(window.location.href)) {
      var url = decodeURIComponent(getRegexResult(rule.reg)[1]) ?? null;
      url = rule.params ? decodeURIComponent(getParamString(rule.params)) : url;
      url = rule.script ? rule.script() : url;
      if (url) {
        window.location.href = url;
        break;
      }
    }
  }
})();
