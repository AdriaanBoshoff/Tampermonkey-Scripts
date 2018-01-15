// ==UserScript==
// @name         AutoRefresh
// @namespace    https://quantumsoftware.co.za/forum/index.php
// @version      0.1
// @description  Refreshes the page every 3 secconds.
// @author       Quantum
// @match        https://csgo.specternetworks.com/stats/hlstats.php?mode=chat&game=csgo
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function(){ location.reload(); }, 3000);
})();