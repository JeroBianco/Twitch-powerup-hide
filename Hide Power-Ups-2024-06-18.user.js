// ==UserScript==
// @name         Hide Power-Ups
// @namespace    https://github.com/JeroBianco/Twitch-powerup-hide
// @version      1.1
// @description  Remove the shitty power ups from the rewards section on twitch chat
// @author       JeroBianco
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to hide the element
    function hideElement() {
        var element = document.querySelector("#live-page-chat > div > div > div.Layout-sc-1xcs6mc-0.iTiPMO.chat-shell.chat-shell__expanded > div > div > section > div > seventv-container > div > div:nth-child(2) > div.Layout-sc-1xcs6mc-0.eWfUfi.chat-input__buttons-container > div.Layout-sc-1xcs6mc-0.cNKHwD > div > div > div > div.Layout-sc-1xcs6mc-0.iVvsmg > div.InjectLayout-sc-1i43xsx-0.kBtJDm > button > div > div > div > div.Layout-sc-1xcs6mc-0.cFdOrq > span");
        // Only hide if the bits are 0
        if (element && element.textContent.trim() === "0") {
             // Hide Power-Ups title
            var elementTitle = document.querySelector("#channel-points-reward-center-body > div > div > div:nth-child(3) > p");
            if (elementTitle) {
                elementTitle.style.display = "none";
            }
            // Hide first reward
            var element1 = document.querySelector("#channel-points-reward-center-body > div > div > div:nth-child(4) > div");
            if (element1) {
                element1.style.display = "none";
            }
            // Hide second reward
            var element2 = document.querySelector("#channel-points-reward-center-body > div > div > div:nth-child(5) > div");
            if (element2) {
                element2.style.display = "none";
            }
            // Hide third reward
            var element3 = document.querySelector("#channel-points-reward-center-body > div > div > div:nth-child(6) > div");
            if (element3) {
                element3.style.display = "none";
            }
        }
    }

    // Create a MutationObserver to observe changes in the DOM
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            hideElement();
        });
    });

    // Start observing the document for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Initial check in case the element is already present
    hideElement();
})();
