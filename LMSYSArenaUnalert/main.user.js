// ==UserScript==
// @name        LMSYS Arena Unalert
// @match       https://*.lmsys.org/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';
  window.alert = function(message) {
    console.log("ALERT: " + message);
  };
})();
