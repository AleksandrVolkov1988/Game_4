"use strict";
function menuOpen() {
	document.querySelector('.bunker').classList.add("none");
	document.querySelector('.technologies').classList.add("none");
	document.querySelector('.buildings').classList.add("none");
	document.querySelector('.locations').classList.add("none");
	document.querySelector('.menu').classList.remove("none");
	document.querySelector('#menu2').classList.add("none");
	document.querySelector('#menu1').classList.remove("none");

	document.querySelector('#bunker').classList.remove("footer1");
	document.querySelector('#technologies').classList.remove("footer2");
	document.querySelector('#buildings').classList.remove("footer3");
	document.querySelector('#locations').classList.remove("footer4");
	document.querySelector('#menu').classList.add("footer6");
};
document.querySelector('#FullScreen').addEventListener('click', () => {
	document.querySelector('html').webkitRequestFullScreen();
});
document.querySelector('#newGame').addEventListener('click', () => {
	document.querySelector('#menu1').classList.add("none");
	document.querySelector('#menu2').classList.remove("none");
});
document.querySelector('#No').addEventListener('click', () => {
	document.querySelector('#menu2').classList.add("none");
	document.querySelector('#menu1').classList.remove("none");
});
document.querySelector('#Yes').addEventListener('click', () => {
	localStorage.clear();
	location.reload();
});