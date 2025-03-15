// ==UserScript==
// @name        Unalert Chatbot Arena (formerly LMSYS) 
// @match       https://lmarena.ai/*
// @grant       none
// ==/UserScript==

(function() {
  'use strict';
  window.alert = function(message) {
    console.log("ALERT: " + message);
  };
})();
