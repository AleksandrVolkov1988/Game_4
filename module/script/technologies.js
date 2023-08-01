"use strict";
function technologiesOpen() {
	document.querySelector('.bunker').classList.add("none");
	document.querySelector('.technologies').classList.remove("none");
	document.querySelector('.buildings').classList.add("none");
	document.querySelector('.locations').classList.add("none");
	document.querySelector('.menu').classList.add("none");

	document.querySelector('#bunker').classList.remove("footer1");
	document.querySelector('#technologies').classList.add("footer2");
	document.querySelector('#buildings').classList.remove("footer3");
	document.querySelector('#locations').classList.remove("footer4");
	document.querySelector('#endMove').classList.remove("footer5");
	document.querySelector('#menu').classList.remove("footer6");

	if (electricity1 == 1.2) {
		document.querySelector('#electricity1').classList.add("yellow");
		document.querySelector('#electricity1').dataset.phase = '2';
	};
	if (electricity2 == 2) {
		document.querySelector('#electricity2').classList.add("yellow");
		document.querySelector('#electricity2').dataset.phase = '2';
	};
	if (electricity3 == 1.2) {
		document.querySelector('#electricity3').classList.add("yellow");
		document.querySelector('#electricity3').dataset.phase = '2';
	};
	if (electricity4 == 2) {
		document.querySelector('#electricity4').classList.add("yellow");
		document.querySelector('#electricity4').dataset.phase = '3';
	};
	if (electricity5 == 0.8) {
		document.querySelector('#electricity5').classList.add("yellow");
		document.querySelector('#electricity5').dataset.phase = '2';
	};
	if (science1 == 1.2) {
		document.querySelector('#science1').classList.add("yellow");
		document.querySelector('#science1').dataset.phase = '2';
	};
	if (science2 == 2) {
		document.querySelector('#science2').classList.add("yellow");
		document.querySelector('#science2').dataset.phase = '2';
	};
	if (science3 == 1.2) {
		document.querySelector('#science3').classList.add("yellow");
		document.querySelector('#science3').dataset.phase = '2';
	};
	if (science4 == 2) {
		document.querySelector('#science4').classList.add("yellow");
		document.querySelector('#science4').dataset.phase = '3';
	};
	if (science5 == 2) {
		document.querySelector('#science5').classList.add("yellow");
		document.querySelector('#science5').dataset.phase = '2';
	};
	if (products1 == 1.2) {
		document.querySelector('#products1').classList.add("yellow");
		document.querySelector('#products1').dataset.phase = '2';
	};
	if (products2 == 2) {
		document.querySelector('#products2').classList.add("yellow");
		document.querySelector('#products2').dataset.phase = '2';
	};
	if (products3 == 1.2) {
		document.querySelector('#products3').classList.add("yellow");
		document.querySelector('#products3').dataset.phase = '2';
	};
	if (products4 == 2) {
		document.querySelector('#products4').classList.add("yellow");
		document.querySelector('#products4').dataset.phase = '3';
	};
	if (products5 == 0.9) {
		document.querySelector('#products5').classList.add("yellow");
		document.querySelector('#products5').dataset.phase = '2';
	};
	if (population1 == 1.2) {
		document.querySelector('#population1').classList.add("yellow");
		document.querySelector('#population1').dataset.phase = '2';
	};
	if (population2 == 2) {
		document.querySelector('#population2').classList.add("yellow");
		document.querySelector('#population2').dataset.phase = '2';
	};
	if (population3 == 1.2) {
		document.querySelector('#population3').classList.add("yellow");
		document.querySelector('#population3').dataset.phase = '2';
	};
	if (population4 == 0.9) {
		document.querySelector('#population4').classList.add("yellow");
		document.querySelector('#population4').dataset.phase = '0.9';
	};
	if (population5 == 2) {
		document.querySelector('#population5').classList.add("yellow");
		document.querySelector('#population5').dataset.phase = '2';
	};
	if (trucks1 == 1.2) {
		document.querySelector('#trucks1').classList.add("yellow");
		document.querySelector('#trucks1').dataset.phase = '2';
	};
	if (trucks2 == 2) {
		document.querySelector('#trucks2').classList.add("yellow");
		document.querySelector('#trucks2').dataset.phase = '2';
	};
	if (trucks3 == 1.2) {
		document.querySelector('#trucks3').classList.add("yellow");
		document.querySelector('#trucks3').dataset.phase = '2';
	};
	if (trucks4 == 2) {
		document.querySelector('#trucks4').classList.add("yellow");
		document.querySelector('#trucks4').dataset.phase = '2';
	};
	if (trucks5 == 1.1) {
		document.querySelector('#trucks5').classList.add("yellow");
		document.querySelector('#trucks5').dataset.phase = '2';
	};
	if (robots1 == 1.2) {
		document.querySelector('#robots1').classList.add("yellow");
		document.querySelector('#robots1').dataset.phase = '2';
	};
	if (robots2 == 2) {
		document.querySelector('#robots2').classList.add("yellow");
		document.querySelector('#robots2').dataset.phase = '2';
	};
	if (robots3 == 1.2) {
		document.querySelector('#robots3').classList.add("yellow");
		document.querySelector('#robots3').dataset.phase = '2';
	};
	if (robots4 == 2) {
		document.querySelector('#robots4').classList.add("yellow");
		document.querySelector('#robots4').dataset.phase = '2';
	};
	if (robots5 == 1.1) {
		document.querySelector('#robots5').classList.add("yellow");
		document.querySelector('#robots5').dataset.phase = '1.1';
	};
	if (attack1 == 1.2) {
		document.querySelector('#attack1').classList.add("yellow");
		document.querySelector('#attack1').dataset.phase = '1.2';
	};
	if (attack2 == 1.2) {
		document.querySelector('#attack2').classList.add("yellow");
		document.querySelector('#attack2').dataset.phase = '1.2';
	};
	if (attack3 == 1.2) {
		document.querySelector('#attack3').classList.add("yellow");
		document.querySelector('#attack3').dataset.phase = '1.2';
	};
	if (attack4 == 1.2) {
		document.querySelector('#attack4').classList.add("yellow");
		document.querySelector('#attack4').dataset.phase = '1.2';
	};
	if (attack5 == 1.2) {
		document.querySelector('#attack5').classList.add("yellow");
		document.querySelector('#attack5').dataset.phase = '1.2';
	};

	document.querySelectorAll('.technologies div').forEach((elem) => { 
		if (elem.dataset.phase != '1' || Number(techPrice) > header_science) {
			elem.style.opacity = '0.5';
		} else {
			elem.style.opacity = '1';
		};
	});
};
// ==================================
let targetTech = document.querySelector('#infoTech');
document.querySelector('.technologies').addEventListener('click', selectionTechnology);
function selectionTechnology(event) {
	document.querySelector('#infoTech span:nth-of-type(2)').textContent = 'Выбери технологию что бы узнать подробности';
	document.querySelector('#infoTech span:nth-of-type(1)').textContent = '';
	document.querySelector('#infoTech span:nth-of-type(1)').style.color = '#000';
	targetTech.classList.remove("green");
	document.querySelector('#buyTech').classList.add("none");
	if (event.target.nodeName === 'DIV') {
		targetTech = event.target;	
	};	
	if (event.target.parentNode.nodeName === 'DIV') {
		targetTech = event.target.parentNode;	
	};
	document.querySelector('#infoTech span:nth-of-type(1)').textContent = targetTech.dataset.name;
	if (targetTech.dataset.phase == '1' && Number(techPrice) <= header_science) {
		document.querySelector('#infoTech span:nth-of-type(2)').textContent = targetTech.dataset.inform1;
		targetTech.classList.add("green");
		document.querySelector('#infoTech span:nth-of-type(3)').textContent = `Цена: ${techPrice} науки`;
		document.querySelector('#buyTech').classList.remove("none");
	} else if (targetTech.dataset.phase == '1' && Number(techPrice) > header_science) {
		document.querySelector('#infoTech span:nth-of-type(1)').textContent = 'Недостаточно науки';
		document.querySelector('#infoTech span:nth-of-type(1)').style.color = '#f00';
		document.querySelector('#infoTech span:nth-of-type(2)').textContent = targetTech.dataset.inform1;
		document.querySelector('#infoTech span:nth-of-type(3)').textContent = `Цена: ${techPrice} науки`;
		targetTech.classList.add("green");
	} else if (targetTech.dataset.phase != '1') {
		document.querySelector('#infoTech span:nth-of-type(2)').textContent = targetTech.dataset.inform2;
		document.querySelector('#infoTech span:nth-of-type(3)').textContent = '';
	};
};
// ==================================
document.querySelector('#buyTech').addEventListener('click', buyTech);
function buyTech() {
	header_science = Number((header_science - techPrice).toFixed(3));
	techPrice = techPrice * 2;
	if (targetTech.id == 'electricity1') {electricity1 = 1.2};
	if (targetTech.id == 'electricity2') {electricity2 = 2};
	if (targetTech.id == 'electricity3') {electricity3 = 1.2};
	if (targetTech.id == 'electricity4') {electricity4 = 2};
	if (targetTech.id == 'electricity5') {electricity5 = 0.8};
	if (targetTech.id == 'science1') {science1 = 1.2};
	if (targetTech.id == 'science2') {science2 = 2};
	if (targetTech.id == 'science3') {science3 = 1.2};
	if (targetTech.id == 'science4') {science4 = 2};
	if (targetTech.id == 'science5') {science5 = 2; techPrice = techPrice / 4};
	if (targetTech.id == 'products1') {products1 = 1.2};
	if (targetTech.id == 'products2') {products2 = 2};
	if (targetTech.id == 'products3') {products3 = 1.2};
	if (targetTech.id == 'products4') {products4 = 2};
	if (targetTech.id == 'products5') {products5 = 0.9};
	if (targetTech.id == 'population1') {population1 = 1.2};
	if (targetTech.id == 'population2') {population2 = 2};
	if (targetTech.id == 'population3') {population3 = 1.2};
	if (targetTech.id == 'population4') {population4 = 0.9};
	if (targetTech.id == 'population5') {population5 = 2};
	if (targetTech.id == 'trucks1') {trucks1 = 1.2};
	if (targetTech.id == 'trucks2') {trucks2 = 2};
	if (targetTech.id == 'trucks3') {trucks3 = 1.2};
	if (targetTech.id == 'trucks4') {trucks4 = 2};
	if (targetTech.id == 'trucks5') {trucks5 = 1.1};
	if (targetTech.id == 'robots1') {robots1 = 1.2};
	if (targetTech.id == 'robots2') {robots2 = 2};
	if (targetTech.id == 'robots3') {robots3 = 1.2};
	if (targetTech.id == 'robots4') {robots4 = 2};
	if (targetTech.id == 'robots5') {robots5 = 1.1};
	if (targetTech.id == 'attack1') {attack1 = 1.2};
	if (targetTech.id == 'attack2') {attack2 = 1.2};
	if (targetTech.id == 'attack3') {attack3 = 1.2};
	if (targetTech.id == 'attack4') {attack4 = 1.2};
	if (targetTech.id == 'attack5') {attack5 = 1.2};
	buildingResources();
	centralBuildingResources();
	headerGrowth();
	buildingsOpen();
	technologiesOpen();
	techReady();
};
// ==================================
function techReady() {
	if (Number(techPrice) > header_science) {
		document.querySelector('#technologies span').classList.add("none");
	} else {
		document.querySelector('#technologies span').classList.remove("none");
	};
};