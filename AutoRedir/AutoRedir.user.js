// ==UserScript==
// @name        AutoRedir
// @run-at      document-start
// @match       *://www.google.com/url?*
// @match       *://links.jianshu.com/go?*
// @match       *://www.jianshu.com/go-wild?*
// @match       *://link.zhihu.com/*
// @grant       none
// ==/UserScript==

;(function () {
    function getParamString(name) {
        return new URL(window.location.href).searchParams.get(name);
    }
    function getRegexResult(regex) {
        return regex.exec(window.location.href);
    }
    const rules = [
        // google lucky
        { reg: /^https:\/\/www\.google\.com\/url\?q=(.+)$/i, },
        // jianshu
        { reg: /^https:\/\/links\.jianshu\.com\/go\?to=(.*)$/i, },
        {
            reg: /^https:\/\/www\.jianshu\.com\/go\-wild\?.*/i,
            params: 'url',
        },
        // zhihu
        { reg: /^http(?:s)?:\/\/link.zhihu\.com\/\?target=(.*)$/i, },
    ];

    for (const rule of rules) {
        if (rule.reg.test(window.location.href)) {
            var url;
            if (rule.params) {
                url = decodeURIComponent(getParamString(rule.params));
            } else if (rule.script) {
                url = rule.script();
            } else {
                url = decodeURIComponent(getRegexResult(rule.reg)[1]);
            }
            if (url) {
                window.location.href = url;
                break;    
            }
        }
    }
})();
