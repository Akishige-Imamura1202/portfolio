"use strict";

document.getElementById('mbtn').onclick = function() {
	document.getElementById('mbtn').classList.toggle('close');
	document.getElementById('mbtn').classList.toggle('open');
	document.getElementById('menu').classList.toggle('menu_open');
	document.getElementById('menu').classList.toggle('menu_close');
}

