"use strict";

const hambarger = document.getElementById('hambarger');
const ham__gnavi = document.getElementById('ham--gnavi');
hambarger.onclick = function(evt){
    evt.preventDefault();

    //toggleを使った記述。
    hambarger.classList.toggle('hambarger--open');
    hambarger.classList.toggle('hambarger--close');
    ham__gnavi.classList.toggle('ham--gnavi--open');
    ham__gnavi.classList.toggle('ham--gnavi--close');
    //mbtn.classList.toggle('close');
    };
