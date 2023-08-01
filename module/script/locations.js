"use strict";
function locationsOpen() {
	document.querySelector('.bunker').classList.add("none");
	document.querySelector('.technologies').classList.add("none");
	document.querySelector('.buildings').classList.add("none");
	document.querySelector('.locations').classList.remove("none");
	document.querySelector('.menu').classList.add("none");

	document.querySelector('#bunker').classList.remove("footer1");
	document.querySelector('#technologies').classList.remove("footer2");
	document.querySelector('#buildings').classList.remove("footer3");
	document.querySelector('#locations').classList.add("footer4");
	document.querySelector('#endMove').classList.remove("footer5");
	document.querySelector('#menu').classList.remove("footer6");

	if (populationLocation10 > 1) {
		document.querySelector('#productsLocation6').classList.remove("shadowWars");
		document.querySelector('#productsLocation6').dataset.phase = '1';
		document.querySelector('#scienceLocation7').classList.remove("shadowWars");
		document.querySelector('#scienceLocation7').dataset.phase = '1';
	};
	if (productsLocation6 > 1) {
		document.querySelector('#populationLocation10').classList.remove("shadowWars");
		document.querySelector('#populationLocation10').dataset.phase = '1';
		document.querySelector('#electricityLocation4').classList.remove("shadowWars");
		document.querySelector('#electricityLocation4').dataset.phase = '1';
		document.querySelector('#populationLocation4').classList.remove("shadowWars");
		document.querySelector('#populationLocation4').dataset.phase = '1';
	};
	if (populationLocation4 > 1) {
		document.querySelector('#productsLocation6').classList.remove("shadowWars");
		document.querySelector('#productsLocation6').dataset.phase = '1';
		document.querySelector('#scienceLocation2').classList.remove("shadowWars");
		document.querySelector('#scienceLocation2').dataset.phase = '1';
		document.querySelector('#electricityLocation3').classList.remove("shadowWars");
		document.querySelector('#electricityLocation3').dataset.phase = '1';
	};
	if (electricityLocation3 > 1) {
		document.querySelector('#populationLocation4').classList.remove("shadowWars");
		document.querySelector('#populationLocation4').dataset.phase = '1';
		document.querySelector('#productsLocation1').classList.remove("shadowWars");
		document.querySelector('#productsLocation1').dataset.phase = '1';
		document.querySelector('#scienceLocation4').classList.remove("shadowWars");
		document.querySelector('#scienceLocation4').dataset.phase = '1';
	};
	if (scienceLocation4 > 1) {
		document.querySelector('#electricityLocation3').classList.remove("shadowWars");
		document.querySelector('#electricityLocation3').dataset.phase = '1';
		document.querySelector('#populationLocation2').classList.remove("shadowWars");
		document.querySelector('#populationLocation2').dataset.phase = '1';
		document.querySelector('#electricityLocation6').classList.remove("shadowWars");
		document.querySelector('#electricityLocation6').dataset.phase = '1';
	};
	if (electricityLocation6 > 1) {
		document.querySelector('#scienceLocation4').classList.remove("shadowWars");
		document.querySelector('#scienceLocation4').dataset.phase = '1';
		document.querySelector('#productsLocation4').classList.remove("shadowWars");
		document.querySelector('#productsLocation4').dataset.phase = '1';
		document.querySelector('#scienceLocation8').classList.remove("shadowWars");
		document.querySelector('#scienceLocation8').dataset.phase = '1';
	};
	if (scienceLocation8 > 1) {
		document.querySelector('#electricityLocation6').classList.remove("shadowWars");
		document.querySelector('#electricityLocation6').dataset.phase = '1';
		document.querySelector('#populationLocation9').classList.remove("shadowWars");
		document.querySelector('#populationLocation9').dataset.phase = '1';
	};
	if (scienceLocation7 > 1) {
		document.querySelector('#populationLocation10').classList.remove("shadowWars");
		document.querySelector('#populationLocation10').dataset.phase = '1';
		document.querySelector('#electricityLocation4').classList.remove("shadowWars");
		document.querySelector('#electricityLocation4').dataset.phase = '1';
		document.querySelector('#populationLocation7').classList.remove("shadowWars");
		document.querySelector('#populationLocation7').dataset.phase = '1';
	};
	if (electricityLocation4 > 1) {
		document.querySelector('#scienceLocation7').classList.remove("shadowWars");
		document.querySelector('#scienceLocation7').dataset.phase = '1';
		document.querySelector('#productsLocation6').classList.remove("shadowWars");
		document.querySelector('#productsLocation6').dataset.phase = '1';
		document.querySelector('#scienceLocation2').classList.remove("shadowWars");
		document.querySelector('#scienceLocation2').dataset.phase = '1';
		document.querySelector('#productsLocation3').classList.remove("shadowWars");
		document.querySelector('#productsLocation3').dataset.phase = '1';
	};
	if (scienceLocation2 > 1) {
		document.querySelector('#electricityLocation4').classList.remove("shadowWars");
		document.querySelector('#electricityLocation4').dataset.phase = '1';
		document.querySelector('#populationLocation4').classList.remove("shadowWars");
		document.querySelector('#populationLocation4').dataset.phase = '1';
		document.querySelector('#productsLocation1').classList.remove("shadowWars");
		document.querySelector('#productsLocation1').dataset.phase = '1';
		document.querySelector('#populationLocation1').classList.remove("shadowWars");
		document.querySelector('#populationLocation1').dataset.phase = '1';
	};
	if (productsLocation1 > 1) {
		document.querySelector('#scienceLocation2').classList.remove("shadowWars");
		document.querySelector('#scienceLocation2').dataset.phase = '1';
		document.querySelector('#electricityLocation3').classList.remove("shadowWars");
		document.querySelector('#electricityLocation3').dataset.phase = '1';
		document.querySelector('#populationLocation2').classList.remove("shadowWars");
		document.querySelector('#populationLocation2').dataset.phase = '1';
	};
	if (populationLocation2 > 1) {
		document.querySelector('#productsLocation1').classList.remove("shadowWars");
		document.querySelector('#productsLocation1').dataset.phase = '1';
		document.querySelector('#scienceLocation4').classList.remove("shadowWars");
		document.querySelector('#scienceLocation4').dataset.phase = '1';
		document.querySelector('#productsLocation4').classList.remove("shadowWars");
		document.querySelector('#productsLocation4').dataset.phase = '1';
		document.querySelector('#electricityLocation1').classList.remove("shadowWars");
		document.querySelector('#electricityLocation1').dataset.phase = '1';
	};
	if (productsLocation4 > 1) {
		document.querySelector('#populationLocation2').classList.remove("shadowWars");
		document.querySelector('#populationLocation2').dataset.phase = '1';
		document.querySelector('#electricityLocation6').classList.remove("shadowWars");
		document.querySelector('#electricityLocation6').dataset.phase = '1';
		document.querySelector('#populationLocation9').classList.remove("shadowWars");
		document.querySelector('#populationLocation9').dataset.phase = '1';
		document.querySelector('#scienceLocation3').classList.remove("shadowWars");
		document.querySelector('#scienceLocation3').dataset.phase = '1';
	};
	if (populationLocation9 > 1) {
		document.querySelector('#productsLocation4').classList.remove("shadowWars");
		document.querySelector('#productsLocation4').dataset.phase = '1';
		document.querySelector('#scienceLocation8').classList.remove("shadowWars");
		document.querySelector('#scienceLocation8').dataset.phase = '1';
		document.querySelector('#populationLocation8').classList.remove("shadowWars");
		document.querySelector('#populationLocation8').dataset.phase = '1';
	};
	if (populationLocation7 > 1) {
		document.querySelector('#scienceLocation7').classList.remove("shadowWars");
		document.querySelector('#scienceLocation7').dataset.phase = '1';
		document.querySelector('#productsLocation3').classList.remove("shadowWars");
		document.querySelector('#productsLocation3').dataset.phase = '1';
		document.querySelector('#electricityLocation7').classList.remove("shadowWars");
		document.querySelector('#electricityLocation7').dataset.phase = '1';
	};
	if (productsLocation3 > 1) {
		document.querySelector('#populationLocation7').classList.remove("shadowWars");
		document.querySelector('#populationLocation7').dataset.phase = '1';
		document.querySelector('#electricityLocation4').classList.remove("shadowWars");
		document.querySelector('#electricityLocation4').dataset.phase = '1';
		document.querySelector('#populationLocation1').classList.remove("shadowWars");
		document.querySelector('#populationLocation1').dataset.phase = '1';
		document.querySelector('#scienceLocation5').classList.remove("shadowWars");
		document.querySelector('#scienceLocation5').dataset.phase = '1';
	};
	if (populationLocation1 > 1) {
		document.querySelector('#productsLocation3').classList.remove("shadowWars");
		document.querySelector('#productsLocation3').dataset.phase = '1';
		document.querySelector('#scienceLocation2').classList.remove("shadowWars");
		document.querySelector('#scienceLocation2').dataset.phase = '1';
		document.querySelector('#electricityLocation2').classList.remove("shadowWars");
		document.querySelector('#electricityLocation2').dataset.phase = '1';
	};
	if (electricityLocation1 > 1) {
		document.querySelector('#populationLocation2').classList.remove("shadowWars");
		document.querySelector('#populationLocation2').dataset.phase = '1';
		document.querySelector('#scienceLocation3').classList.remove("shadowWars");
		document.querySelector('#scienceLocation3').dataset.phase = '1';
		document.querySelector('#productsLocation2').classList.remove("shadowWars");
		document.querySelector('#productsLocation2').dataset.phase = '1';
	};
	if (scienceLocation3 > 1) {
		document.querySelector('#electricityLocation1').classList.remove("shadowWars");
		document.querySelector('#electricityLocation1').dataset.phase = '1';
		document.querySelector('#productsLocation4').classList.remove("shadowWars");
		document.querySelector('#productsLocation4').dataset.phase = '1';
		document.querySelector('#populationLocation8').classList.remove("shadowWars");
		document.querySelector('#populationLocation8').dataset.phase = '1';
		document.querySelector('#populationLocation5').classList.remove("shadowWars");
		document.querySelector('#populationLocation5').dataset.phase = '1';
	};
	if (populationLocation8 > 1) {
		document.querySelector('#scienceLocation3').classList.remove("shadowWars");
		document.querySelector('#scienceLocation3').dataset.phase = '1';
		document.querySelector('#populationLocation9').classList.remove("shadowWars");
		document.querySelector('#populationLocation9').dataset.phase = '1';
		document.querySelector('#productsLocation7').classList.remove("shadowWars");
		document.querySelector('#productsLocation7').dataset.phase = '1';
	};
	if (electricityLocation7 > 1) {
		document.querySelector('#populationLocation7').classList.remove("shadowWars");
		document.querySelector('#populationLocation7').dataset.phase = '1';
		document.querySelector('#scienceLocation5').classList.remove("shadowWars");
		document.querySelector('#scienceLocation5').dataset.phase = '1';
		document.querySelector('#productsLocation8').classList.remove("shadowWars");
		document.querySelector('#productsLocation8').dataset.phase = '1';
	};
	if (scienceLocation5 > 1) {
		document.querySelector('#electricityLocation7').classList.remove("shadowWars");
		document.querySelector('#electricityLocation7').dataset.phase = '1';
		document.querySelector('#productsLocation3').classList.remove("shadowWars");
		document.querySelector('#productsLocation3').dataset.phase = '1';
		document.querySelector('#electricityLocation2').classList.remove("shadowWars");
		document.querySelector('#electricityLocation2').dataset.phase = '1';
		document.querySelector('#populationLocation6').classList.remove("shadowWars");
		document.querySelector('#populationLocation6').dataset.phase = '1';
	};
	if (electricityLocation2 > 1) {
		document.querySelector('#scienceLocation5').classList.remove("shadowWars");
		document.querySelector('#scienceLocation5').dataset.phase = '1';
		document.querySelector('#populationLocation1').classList.remove("shadowWars");
		document.querySelector('#populationLocation1').dataset.phase = '1';
		document.querySelector('#scienceLocation1').classList.remove("shadowWars");
		document.querySelector('#scienceLocation1').dataset.phase = '1';
		document.querySelector('#productsLocation5').classList.remove("shadowWars");
		document.querySelector('#productsLocation5').dataset.phase = '1';
	};
	if (scienceLocation1 > 1) {
		document.querySelector('#electricityLocation2').classList.remove("shadowWars");
		document.querySelector('#electricityLocation2').dataset.phase = '1';
		document.querySelector('#productsLocation2').classList.remove("shadowWars");
		document.querySelector('#productsLocation2').dataset.phase = '1';
		document.querySelector('#populationLocation3').classList.remove("shadowWars");
		document.querySelector('#populationLocation3').dataset.phase = '1';
	};
	if (productsLocation2 > 1) {
		document.querySelector('#scienceLocation1').classList.remove("shadowWars");
		document.querySelector('#scienceLocation1').dataset.phase = '1';
		document.querySelector('#electricityLocation1').classList.remove("shadowWars");
		document.querySelector('#electricityLocation1').dataset.phase = '1';
		document.querySelector('#populationLocation5').classList.remove("shadowWars");
		document.querySelector('#populationLocation5').dataset.phase = '1';
		document.querySelector('#electricityLocation5').classList.remove("shadowWars");
		document.querySelector('#electricityLocation5').dataset.phase = '1';
	};
	if (populationLocation5 > 1) {
		document.querySelector('#productsLocation2').classList.remove("shadowWars");
		document.querySelector('#productsLocation2').dataset.phase = '1';
		document.querySelector('#scienceLocation3').classList.remove("shadowWars");
		document.querySelector('#scienceLocation3').dataset.phase = '1';
		document.querySelector('#productsLocation7').classList.remove("shadowWars");
		document.querySelector('#productsLocation7').dataset.phase = '1';
		document.querySelector('#scienceLocation6').classList.remove("shadowWars");
		document.querySelector('#scienceLocation6').dataset.phase = '1';
	};
	if (productsLocation7 > 1) {
		document.querySelector('#populationLocation5').classList.remove("shadowWars");
		document.querySelector('#populationLocation5').dataset.phase = '1';
		document.querySelector('#populationLocation8').classList.remove("shadowWars");
		document.querySelector('#populationLocation8').dataset.phase = '1';
		document.querySelector('#electricityLocation8').classList.remove("shadowWars");
		document.querySelector('#electricityLocation8').dataset.phase = '1';
	};
	if (productsLocation8 > 1) {
		document.querySelector('#electricityLocation7').classList.remove("shadowWars");
		document.querySelector('#electricityLocation7').dataset.phase = '1';
		document.querySelector('#populationLocation6').classList.remove("shadowWars");
		document.querySelector('#populationLocation6').dataset.phase = '1';
	};
	if (populationLocation6 > 1) {
		document.querySelector('#productsLocation8').classList.remove("shadowWars");
		document.querySelector('#productsLocation8').dataset.phase = '1';
		document.querySelector('#scienceLocation5').classList.remove("shadowWars");
		document.querySelector('#scienceLocation5').dataset.phase = '1';
		document.querySelector('#productsLocation5').classList.remove("shadowWars");
		document.querySelector('#productsLocation5').dataset.phase = '1';
	};
	if (productsLocation5 > 1) {
		document.querySelector('#populationLocation6').classList.remove("shadowWars");
		document.querySelector('#populationLocation6').dataset.phase = '1';
		document.querySelector('#electricityLocation2').classList.remove("shadowWars");
		document.querySelector('#electricityLocation2').dataset.phase = '1';
		document.querySelector('#populationLocation3').classList.remove("shadowWars");
		document.querySelector('#populationLocation3').dataset.phase = '1';
	};
	if (populationLocation3 > 1) {
		document.querySelector('#productsLocation5').classList.remove("shadowWars");
		document.querySelector('#productsLocation5').dataset.phase = '1';
		document.querySelector('#scienceLocation1').classList.remove("shadowWars");
		document.querySelector('#scienceLocation1').dataset.phase = '1';
		document.querySelector('#electricityLocation5').classList.remove("shadowWars");
		document.querySelector('#electricityLocation5').dataset.phase = '1';
	};
	if (electricityLocation5 > 1) {
		document.querySelector('#populationLocation3').classList.remove("shadowWars");
		document.querySelector('#populationLocation3').dataset.phase = '1';
		document.querySelector('#productsLocation2').classList.remove("shadowWars");
		document.querySelector('#productsLocation2').dataset.phase = '1';
		document.querySelector('#scienceLocation6').classList.remove("shadowWars");
		document.querySelector('#scienceLocation6').dataset.phase = '1';
	};
	if (scienceLocation6 > 1) {
		document.querySelector('#electricityLocation5').classList.remove("shadowWars");
		document.querySelector('#electricityLocation5').dataset.phase = '1';
		document.querySelector('#populationLocation5').classList.remove("shadowWars");
		document.querySelector('#populationLocation5').dataset.phase = '1';
		document.querySelector('#electricityLocation8').classList.remove("shadowWars");
		document.querySelector('#electricityLocation8').dataset.phase = '1';
	};
	if (electricityLocation8 > 1) {
		document.querySelector('#scienceLocation6').classList.remove("shadowWars");
		document.querySelector('#scienceLocation6').dataset.phase = '1';
		document.querySelector('#productsLocation7').classList.remove("shadowWars");
		document.querySelector('#productsLocation7').dataset.phase = '1';
	};
	// ==================================
	if (populationLocation10 == 2) {
		document.querySelector('#populationLocation10').classList.add("green");
		document.querySelector('#populationLocation10').dataset.phase = '2';
	};
	if (productsLocation6 == 2) {
		document.querySelector('#productsLocation6').classList.add("green");
		document.querySelector('#productsLocation6').dataset.phase = '2';
	};
	if (populationLocation4 == 2) {
		document.querySelector('#populationLocation4').classList.add("green");
		document.querySelector('#populationLocation4').dataset.phase = '2';
	};
	if (electricityLocation3 == 2) {
		document.querySelector('#electricityLocation3').classList.add("green");
		document.querySelector('#electricityLocation3').dataset.phase = '2';
	};
	if (scienceLocation4 == 2) {
		document.querySelector('#scienceLocation4').classList.add("green");
		document.querySelector('#scienceLocation4').dataset.phase = '2';
	};
	if (electricityLocation6 == 2) {
		document.querySelector('#electricityLocation6').classList.add("green");
		document.querySelector('#electricityLocation6').dataset.phase = '2';
	};
	if (scienceLocation8 == 2) {
		document.querySelector('#scienceLocation8').classList.add("green");
		document.querySelector('#scienceLocation8').dataset.phase = '2';
	};
	if (scienceLocation7 == 2) {
		document.querySelector('#scienceLocation7').classList.add("green");
		document.querySelector('#scienceLocation7').dataset.phase = '2';
	};
	if (electricityLocation4 == 2) {
		document.querySelector('#electricityLocation4').classList.add("green");
		document.querySelector('#electricityLocation4').dataset.phase = '2';
	};
	if (scienceLocation2 == 2) {
		document.querySelector('#scienceLocation2').classList.add("green");
		document.querySelector('#scienceLocation2').dataset.phase = '2';
	};
	if (productsLocation1 == 2) {
		document.querySelector('#productsLocation1').classList.add("green");
		document.querySelector('#productsLocation1').dataset.phase = '2';
	};
	if (populationLocation2 == 2) {
		document.querySelector('#populationLocation2').classList.add("green");
		document.querySelector('#populationLocation2').dataset.phase = '2';
	};
	if (productsLocation4 == 2) {
		document.querySelector('#productsLocation4').classList.add("green");
		document.querySelector('#productsLocation4').dataset.phase = '2';
	};
	if (populationLocation9 == 2) {
		document.querySelector('#populationLocation9').classList.add("green");
		document.querySelector('#populationLocation9').dataset.phase = '2';
	};
	if (populationLocation7 == 2) {
		document.querySelector('#populationLocation7').classList.add("green");
		document.querySelector('#populationLocation7').dataset.phase = '2';
	};
	if (productsLocation3 == 2) {
		document.querySelector('#productsLocation3').classList.add("green");
		document.querySelector('#productsLocation3').dataset.phase = '2';
	};
	if (populationLocation1 == 2) {
		document.querySelector('#populationLocation1').classList.add("green");
		document.querySelector('#populationLocation1').dataset.phase = '2';
	};
	if (electricityLocation1 == 2) {
		document.querySelector('#electricityLocation1').classList.add("green");
		document.querySelector('#electricityLocation1').dataset.phase = '2';
	};
	if (scienceLocation3 == 2) {
		document.querySelector('#scienceLocation3').classList.add("green");
		document.querySelector('#scienceLocation3').dataset.phase = '2';
	};
	if (populationLocation8 == 2) {
		document.querySelector('#populationLocation8').classList.add("green");
		document.querySelector('#populationLocation8').dataset.phase = '2';
	};
	if (electricityLocation7 == 2) {
		document.querySelector('#electricityLocation7').classList.add("green");
		document.querySelector('#electricityLocation7').dataset.phase = '2';
	};
	if (scienceLocation5 == 2) {
		document.querySelector('#scienceLocation5').classList.add("green");
		document.querySelector('#scienceLocation5').dataset.phase = '2';
	};
	if (electricityLocation2 == 2) {
		document.querySelector('#electricityLocation2').classList.add("green");
		document.querySelector('#electricityLocation2').dataset.phase = '2';
	};
	if (scienceLocation1 == 2) {
		document.querySelector('#scienceLocation1').classList.add("green");
		document.querySelector('#scienceLocation1').dataset.phase = '2';
	};
	if (productsLocation2 == 2) {
		document.querySelector('#productsLocation2').classList.add("green");
		document.querySelector('#productsLocation2').dataset.phase = '2';
	};
	if (populationLocation5 == 2) {
		document.querySelector('#populationLocation5').classList.add("green");
		document.querySelector('#populationLocation5').dataset.phase = '2';
	};
	if (productsLocation7 == 2) {
		document.querySelector('#productsLocation7').classList.add("green");
		document.querySelector('#productsLocation7').dataset.phase = '2';
	};
	if (productsLocation8 == 2) {
		document.querySelector('#productsLocation8').classList.add("green");
		document.querySelector('#productsLocation8').dataset.phase = '2';
	};
	if (populationLocation6 == 2) {
		document.querySelector('#populationLocation6').classList.add("green");
		document.querySelector('#populationLocation6').dataset.phase = '2';
	};
	if (productsLocation5 == 2) {
		document.querySelector('#productsLocation5').classList.add("green");
		document.querySelector('#productsLocation5').dataset.phase = '2';
	};
	if (populationLocation3 == 2) {
		document.querySelector('#populationLocation3').classList.add("green");
		document.querySelector('#populationLocation3').dataset.phase = '2';
	};
	if (electricityLocation5 == 2) {
		document.querySelector('#electricityLocation5').classList.add("green");
		document.querySelector('#electricityLocation5').dataset.phase = '2';
	};
	if (scienceLocation6 == 2) {
		document.querySelector('#scienceLocation6').classList.add("green");
		document.querySelector('#scienceLocation6').dataset.phase = '2';
	};
	if (electricityLocation8 == 2) {
		document.querySelector('#electricityLocation8').classList.add("green");
		document.querySelector('#electricityLocation8').dataset.phase = '2';
	};
	// ==================================
	if (populationLocation10 == 3) {
		document.querySelector('#populationLocation10').classList.add("yellow");
		document.querySelector('#populationLocation10').dataset.phase = '3';
	};
	if (productsLocation6 == 3) {
		document.querySelector('#productsLocation6').classList.add("yellow");
		document.querySelector('#productsLocation6').dataset.phase = '3';
	};
	if (populationLocation4 == 3) {
		document.querySelector('#populationLocation4').classList.add("yellow");
		document.querySelector('#populationLocation4').dataset.phase = '3';
	};
	if (electricityLocation3 == 3) {
		document.querySelector('#electricityLocation3').classList.add("yellow");
		document.querySelector('#electricityLocation3').dataset.phase = '3';
	};
	if (scienceLocation4 == 3) {
		document.querySelector('#scienceLocation4').classList.add("yellow");
		document.querySelector('#scienceLocation4').dataset.phase = '3';
	};
	if (electricityLocation6 == 3) {
		document.querySelector('#electricityLocation6').classList.add("yellow");
		document.querySelector('#electricityLocation6').dataset.phase = '3';
	};
	if (scienceLocation8 == 3) {
		document.querySelector('#scienceLocation8').classList.add("yellow");
		document.querySelector('#scienceLocation8').dataset.phase = '3';
	};
	if (scienceLocation7 == 3) {
		document.querySelector('#scienceLocation7').classList.add("yellow");
		document.querySelector('#scienceLocation7').dataset.phase = '3';
	};
	if (electricityLocation4 == 3) {
		document.querySelector('#electricityLocation4').classList.add("yellow");
		document.querySelector('#electricityLocation4').dataset.phase = '3';
	};
	if (scienceLocation2 == 3) {
		document.querySelector('#scienceLocation2').classList.add("yellow");
		document.querySelector('#scienceLocation2').dataset.phase = '3';
	};
	if (productsLocation1 == 3) {
		document.querySelector('#productsLocation1').classList.add("yellow");
		document.querySelector('#productsLocation1').dataset.phase = '3';
	};
	if (populationLocation2 == 3) {
		document.querySelector('#populationLocation2').classList.add("yellow");
		document.querySelector('#populationLocation2').dataset.phase = '3';
	};
	if (productsLocation4 == 3) {
		document.querySelector('#productsLocation4').classList.add("yellow");
		document.querySelector('#productsLocation4').dataset.phase = '3';
	};
	if (populationLocation9 == 3) {
		document.querySelector('#populationLocation9').classList.add("yellow");
		document.querySelector('#populationLocation9').dataset.phase = '3';
	};
	if (populationLocation7 == 3) {
		document.querySelector('#populationLocation7').classList.add("yellow");
		document.querySelector('#populationLocation7').dataset.phase = '3';
	};
	if (productsLocation3 == 3) {
		document.querySelector('#productsLocation3').classList.add("yellow");
		document.querySelector('#productsLocation3').dataset.phase = '3';
	};
	if (populationLocation1 == 3) {
		document.querySelector('#populationLocation1').classList.add("yellow");
		document.querySelector('#populationLocation1').dataset.phase = '3';
	};
	if (electricityLocation1 == 3) {
		document.querySelector('#electricityLocation1').classList.add("yellow");
		document.querySelector('#electricityLocation1').dataset.phase = '3';
	};
	if (scienceLocation3 == 3) {
		document.querySelector('#scienceLocation3').classList.add("yellow");
		document.querySelector('#scienceLocation3').dataset.phase = '3';
	};
	if (populationLocation8 == 3) {
		document.querySelector('#populationLocation8').classList.add("yellow");
		document.querySelector('#populationLocation8').dataset.phase = '3';
	};
	if (electricityLocation7 == 3) {
		document.querySelector('#electricityLocation7').classList.add("yellow");
		document.querySelector('#electricityLocation7').dataset.phase = '3';
	};
	if (scienceLocation5 == 3) {
		document.querySelector('#scienceLocation5').classList.add("yellow");
		document.querySelector('#scienceLocation5').dataset.phase = '3';
	};
	if (electricityLocation2 == 3) {
		document.querySelector('#electricityLocation2').classList.add("yellow");
		document.querySelector('#electricityLocation2').dataset.phase = '3';
	};
	if (scienceLocation1 == 3) {
		document.querySelector('#scienceLocation1').classList.add("yellow");
		document.querySelector('#scienceLocation1').dataset.phase = '3';
	};
	if (productsLocation2 == 3) {
		document.querySelector('#productsLocation2').classList.add("yellow");
		document.querySelector('#productsLocation2').dataset.phase = '3';
	};
	if (populationLocation5 == 3) {
		document.querySelector('#populationLocation5').classList.add("yellow");
		document.querySelector('#populationLocation5').dataset.phase = '3';
	};
	if (productsLocation7 == 3) {
		document.querySelector('#productsLocation7').classList.add("yellow");
		document.querySelector('#productsLocation7').dataset.phase = '3';
	};
	if (productsLocation8 == 3) {
		document.querySelector('#productsLocation8').classList.add("yellow");
		document.querySelector('#productsLocation8').dataset.phase = '3';
	};
	if (populationLocation6 == 3) {
		document.querySelector('#populationLocation6').classList.add("yellow");
		document.querySelector('#populationLocation6').dataset.phase = '3';
	};
	if (productsLocation5 == 3) {
		document.querySelector('#productsLocation5').classList.add("yellow");
		document.querySelector('#productsLocation5').dataset.phase = '3';
	};
	if (populationLocation3 == 3) {
		document.querySelector('#populationLocation3').classList.add("yellow");
		document.querySelector('#populationLocation3').dataset.phase = '3';
	};
	if (electricityLocation5 == 3) {
		document.querySelector('#electricityLocation5').classList.add("yellow");
		document.querySelector('#electricityLocation5').dataset.phase = '3';
	};
	if (scienceLocation6 == 3) {
		document.querySelector('#scienceLocation6').classList.add("yellow");
		document.querySelector('#scienceLocation6').dataset.phase = '3';
	};
	if (electricityLocation8 == 3) {
		document.querySelector('#electricityLocation8').classList.add("yellow");
		document.querySelector('#electricityLocation8').dataset.phase = '3';
	};
	// ==================================
	if (populationLocation10 == 4) {
		document.querySelector('#populationLocation10').classList.add("red");
		document.querySelector('#populationLocation10').dataset.phase = '4';
	};
	if (productsLocation6 == 4) {
		document.querySelector('#productsLocation6').classList.add("red");
		document.querySelector('#productsLocation6').dataset.phase = '4';
	};
	if (populationLocation4 == 4) {
		document.querySelector('#populationLocation4').classList.add("red");
		document.querySelector('#populationLocation4').dataset.phase = '4';
	};
	if (electricityLocation3 == 4) {
		document.querySelector('#electricityLocation3').classList.add("red");
		document.querySelector('#electricityLocation3').dataset.phase = '4';
	};
	if (scienceLocation4 == 4) {
		document.querySelector('#scienceLocation4').classList.add("red");
		document.querySelector('#scienceLocation4').dataset.phase = '4';
	};
	if (electricityLocation6 == 4) {
		document.querySelector('#electricityLocation6').classList.add("red");
		document.querySelector('#electricityLocation6').dataset.phase = '4';
	};
	if (scienceLocation8 == 4) {
		document.querySelector('#scienceLocation8').classList.add("red");
		document.querySelector('#scienceLocation8').dataset.phase = '4';
	};
	if (scienceLocation7 == 4) {
		document.querySelector('#scienceLocation7').classList.add("red");
		document.querySelector('#scienceLocation7').dataset.phase = '4';
	};
	if (electricityLocation4 == 4) {
		document.querySelector('#electricityLocation4').classList.add("red");
		document.querySelector('#electricityLocation4').dataset.phase = '4';
	};
	if (scienceLocation2 == 4) {
		document.querySelector('#scienceLocation2').classList.add("red");
		document.querySelector('#scienceLocation2').dataset.phase = '4';
	};
	if (productsLocation1 == 4) {
		document.querySelector('#productsLocation1').classList.add("red");
		document.querySelector('#productsLocation1').dataset.phase = '4';
	};
	if (populationLocation2 == 4) {
		document.querySelector('#populationLocation2').classList.add("red");
		document.querySelector('#populationLocation2').dataset.phase = '4';
	};
	if (productsLocation4 == 4) {
		document.querySelector('#productsLocation4').classList.add("red");
		document.querySelector('#productsLocation4').dataset.phase = '4';
	};
	if (populationLocation9 == 4) {
		document.querySelector('#populationLocation9').classList.add("red");
		document.querySelector('#populationLocation9').dataset.phase = '4';
	};
	if (populationLocation7 == 4) {
		document.querySelector('#populationLocation7').classList.add("red");
		document.querySelector('#populationLocation7').dataset.phase = '4';
	};
	if (productsLocation3 == 4) {
		document.querySelector('#productsLocation3').classList.add("red");
		document.querySelector('#productsLocation3').dataset.phase = '4';
	};
	if (populationLocation1 == 4) {
		document.querySelector('#populationLocation1').classList.add("red");
		document.querySelector('#populationLocation1').dataset.phase = '4';
	};
	if (electricityLocation1 == 4) {
		document.querySelector('#electricityLocation1').classList.add("red");
		document.querySelector('#electricityLocation1').dataset.phase = '4';
	};
	if (scienceLocation3 == 4) {
		document.querySelector('#scienceLocation3').classList.add("red");
		document.querySelector('#scienceLocation3').dataset.phase = '4';
	};
	if (populationLocation8 == 4) {
		document.querySelector('#populationLocation8').classList.add("red");
		document.querySelector('#populationLocation8').dataset.phase = '4';
	};
	if (electricityLocation7 == 4) {
		document.querySelector('#electricityLocation7').classList.add("red");
		document.querySelector('#electricityLocation7').dataset.phase = '4';
	};
	if (scienceLocation5 == 4) {
		document.querySelector('#scienceLocation5').classList.add("red");
		document.querySelector('#scienceLocation5').dataset.phase = '4';
	};
	if (electricityLocation2 == 4) {
		document.querySelector('#electricityLocation2').classList.add("red");
		document.querySelector('#electricityLocation2').dataset.phase = '4';
	};
	if (scienceLocation1 == 4) {
		document.querySelector('#scienceLocation1').classList.add("red");
		document.querySelector('#scienceLocation1').dataset.phase = '4';
	};
	if (productsLocation2 == 4) {
		document.querySelector('#productsLocation2').classList.add("red");
		document.querySelector('#productsLocation2').dataset.phase = '4';
	};
	if (populationLocation5 == 4) {
		document.querySelector('#populationLocation5').classList.add("red");
		document.querySelector('#populationLocation5').dataset.phase = '4';
	};
	if (productsLocation7 == 4) {
		document.querySelector('#productsLocation7').classList.add("red");
		document.querySelector('#productsLocation7').dataset.phase = '4';
	};
	if (productsLocation8 == 4) {
		document.querySelector('#productsLocation8').classList.add("red");
		document.querySelector('#productsLocation8').dataset.phase = '4';
	};
	if (populationLocation6 == 4) {
		document.querySelector('#populationLocation6').classList.add("red");
		document.querySelector('#populationLocation6').dataset.phase = '4';
	};
	if (productsLocation5 == 4) {
		document.querySelector('#productsLocation5').classList.add("red");
		document.querySelector('#productsLocation5').dataset.phase = '4';
	};
	if (populationLocation3 == 4) {
		document.querySelector('#populationLocation3').classList.add("red");
		document.querySelector('#populationLocation3').dataset.phase = '4';
	};
	if (electricityLocation5 == 4) {
		document.querySelector('#electricityLocation5').classList.add("red");
		document.querySelector('#electricityLocation5').dataset.phase = '4';
	};
	if (scienceLocation6 == 4) {
		document.querySelector('#scienceLocation6').classList.add("red");
		document.querySelector('#scienceLocation6').dataset.phase = '4';
	};
	if (electricityLocation8 == 4) {
		document.querySelector('#electricityLocation8').classList.add("red");
		document.querySelector('#electricityLocation8').dataset.phase = '4';
	};
};
// ==================================
let targetLoc = document.querySelector('#infoLoc');
document.querySelector('.locations').addEventListener('click', selectionLocation);
function selectionLocation(event) {
	document.querySelector('#infoLoc span:nth-of-type(2)').textContent = 'Выбери локацию что бы узнать подробности';
	document.querySelector('#infoLoc span:nth-of-type(1)').textContent = '';
	document.querySelector('#infoLoc span:nth-of-type(1)').style.color = '#000';
	document.querySelector('#buyLoc').classList.add("none");
	document.querySelector('#buyLoc2').classList.add("none");
	if (event.target.nodeName === 'DIV') {
		targetLoc = event.target;	
	};	
	if (event.target.parentNode.nodeName === 'DIV') {
		targetLoc = event.target.parentNode;	
	};
	document.querySelector('#infoLoc span:nth-of-type(1)').textContent = targetLoc.dataset.name;
	if (targetLoc.dataset.phase == '0') {
		document.querySelector('#infoLoc span:nth-of-type(2)').textContent = targetLoc.dataset.inform0;
	};
	if (targetLoc.dataset.phase == '1') {
		document.querySelector('#infoLoc span:nth-of-type(2)').textContent = targetLoc.dataset.inform1;
		document.querySelector('#buyLoc').classList.remove("none");
	};
	if (targetLoc.dataset.phase == '2') {
		document.querySelector('#infoLoc span:nth-of-type(2)').textContent = targetLoc.dataset.inform2;
		document.querySelector('#buyLoc2').classList.remove("none");
	};
	if (targetLoc.dataset.phase == '3') {
		document.querySelector('#infoLoc span:nth-of-type(2)').textContent = targetLoc.dataset.inform3;
	};
	if (targetLoc.dataset.phase == '4') {
		document.querySelector('#infoLoc span:nth-of-type(2)').textContent = targetLoc.dataset.inform4;
	};
};
// ==================================
document.querySelector('#buyLoc button').addEventListener('click', selectWar);
function selectWar() {
	document.querySelector('#selectWar').classList.remove("none");
	document.querySelector('#WarSeizeSeize1').classList.add("none");
	if (trucks4 == 2) {
		document.querySelector('#WarSeizeSeize1').classList.remove("none");
	};
	document.querySelector('#WarSeizeSeize1Span').textContent = targetLoc.dataset.wartrucks;
	document.querySelector('#WarSeizeSeize2Span1').textContent = targetLoc.dataset.warrobots;
	ourAttackPower = Number((header_robots * robots5 * attack1 * attack2 * attack3 * attack4 * attack5).toFixed(1));
	document.querySelector('#WarSeizeSeize2Span2').textContent = ourAttackPower;
	if (Number(targetLoc.dataset.warrobots) > ourAttackPower) {
		document.querySelector('#WarSeizeSeize2Span3').textContent = "Мы проиграем!";
		document.querySelector('#WarSeizeSeize2Span3').style.color = '#f00';
	} else {
		document.querySelector('#WarSeizeSeize2Span3').textContent = "Мы победим!";
		document.querySelector('#WarSeizeSeize2Span3').style.color = '#0f0';
	};	
	document.querySelector('#WarSeizeSeize2Span4').textContent = "";
};
document.querySelector('#WarSeizeSeize1').addEventListener('click', WarSeizeSeize1);
function WarSeizeSeize1() {
	if (header_trucks < Number(targetLoc.dataset.wartrucks)) {
		document.querySelector('#WarSeizeSeize2Span4').textContent = "Недостаточно колонистов для захвата";
		document.querySelector('#WarSeizeSeize2Span4').style.color = '#f00';
	} else {
		header_trucks = Number((header_trucks - Number(targetLoc.dataset.wartrucks)).toFixed(1));
		headerGrowth();
		if (targetLoc.id == 'scienceLocation1') {scienceLocation1 = 2};
		if (targetLoc.id == 'scienceLocation2') {scienceLocation2 = 2};
		if (targetLoc.id == 'scienceLocation3') {scienceLocation3 = 2};
		if (targetLoc.id == 'scienceLocation4') {scienceLocation4 = 2};
		if (targetLoc.id == 'scienceLocation5') {scienceLocation5 = 2};
		if (targetLoc.id == 'scienceLocation6') {scienceLocation6 = 2};
		if (targetLoc.id == 'scienceLocation7') {scienceLocation7 = 2};
		if (targetLoc.id == 'scienceLocation8') {scienceLocation8 = 2};
		if (targetLoc.id == 'electricityLocation1') {electricityLocation1 = 2};
		if (targetLoc.id == 'electricityLocation2') {electricityLocation2 = 2};
		if (targetLoc.id == 'electricityLocation3') {electricityLocation3 = 2};
		if (targetLoc.id == 'electricityLocation4') {electricityLocation4 = 2};
		if (targetLoc.id == 'electricityLocation5') {electricityLocation5 = 2};
		if (targetLoc.id == 'electricityLocation6') {electricityLocation6 = 2};
		if (targetLoc.id == 'electricityLocation7') {electricityLocation7 = 2};
		if (targetLoc.id == 'electricityLocation8') {electricityLocation8 = 2};
		if (targetLoc.id == 'productsLocation1') {productsLocation1 = 2};
		if (targetLoc.id == 'productsLocation2') {productsLocation2 = 2};
		if (targetLoc.id == 'productsLocation3') {productsLocation3 = 2};
		if (targetLoc.id == 'productsLocation4') {productsLocation4 = 2};
		if (targetLoc.id == 'productsLocation5') {productsLocation5 = 2};
		if (targetLoc.id == 'productsLocation6') {productsLocation6 = 2};
		if (targetLoc.id == 'productsLocation7') {productsLocation7 = 2};
		if (targetLoc.id == 'productsLocation8') {productsLocation8 = 2};
		if (targetLoc.id == 'populationLocation1') {populationLocation1 = 2};
		if (targetLoc.id == 'populationLocation2') {populationLocation2 = 2};
		if (targetLoc.id == 'populationLocation3') {populationLocation3 = 2};
		if (targetLoc.id == 'populationLocation4') {populationLocation4 = 2};
		if (targetLoc.id == 'populationLocation5') {populationLocation5 = 2};
		if (targetLoc.id == 'populationLocation6') {populationLocation6 = 2};
		if (targetLoc.id == 'populationLocation7') {populationLocation7 = 2};
		if (targetLoc.id == 'populationLocation8') {populationLocation8 = 2};
		if (targetLoc.id == 'populationLocation9') {populationLocation9 = 2};
		if (targetLoc.id == 'populationLocation10') {populationLocation10 = 2};
		document.querySelector('#selectWar').classList.add("none");
		locationsOpen();
	};
};
document.querySelector('#WarSeizeSeize2').addEventListener('click', WarSeizeSeize2);
function WarSeizeSeize2() {
	ourAttackPower = Number((header_robots * robots5 * attack1 * attack2 * attack3 * attack4 * attack5).toFixed(1));
	if (ourAttackPower < Number(targetLoc.dataset.warrobots)) {
		document.querySelector('#WarSeizeSeize2Span4').textContent = "Нет смысла напрасно терять войска!";
		document.querySelector('#WarSeizeSeize2Span4').style.color = '#f00';
	} else {
		lossPercentageAttack = Number((((100 / (ourAttackPower / Number(targetLoc.dataset.warrobots)))/ 100) * Number(targetLoc.dataset.warrobots)).toFixed(0)); 
		header_robots = Number((header_robots - lossPercentageAttack).toFixed(2));
		if (header_robots < 0) {header_robots = 0}
		if (targetLoc.id == 'scienceLocation1') {scienceLocation1 = 2};
		if (targetLoc.id == 'scienceLocation2') {scienceLocation2 = 2};
		if (targetLoc.id == 'scienceLocation3') {scienceLocation3 = 2};
		if (targetLoc.id == 'scienceLocation4') {scienceLocation4 = 2};
		if (targetLoc.id == 'scienceLocation5') {scienceLocation5 = 2};
		if (targetLoc.id == 'scienceLocation6') {scienceLocation6 = 2};
		if (targetLoc.id == 'scienceLocation7') {scienceLocation7 = 2};
		if (targetLoc.id == 'scienceLocation8') {scienceLocation8 = 2};
		if (targetLoc.id == 'electricityLocation1') {electricityLocation1 = 2};
		if (targetLoc.id == 'electricityLocation2') {electricityLocation2 = 2};
		if (targetLoc.id == 'electricityLocation3') {electricityLocation3 = 2};
		if (targetLoc.id == 'electricityLocation4') {electricityLocation4 = 2};
		if (targetLoc.id == 'electricityLocation5') {electricityLocation5 = 2};
		if (targetLoc.id == 'electricityLocation6') {electricityLocation6 = 2};
		if (targetLoc.id == 'electricityLocation7') {electricityLocation7 = 2};
		if (targetLoc.id == 'electricityLocation8') {electricityLocation8 = 2};
		if (targetLoc.id == 'productsLocation1') {productsLocation1 = 2};
		if (targetLoc.id == 'productsLocation2') {productsLocation2 = 2};
		if (targetLoc.id == 'productsLocation3') {productsLocation3 = 2};
		if (targetLoc.id == 'productsLocation4') {productsLocation4 = 2};
		if (targetLoc.id == 'productsLocation5') {productsLocation5 = 2};
		if (targetLoc.id == 'productsLocation6') {productsLocation6 = 2};
		if (targetLoc.id == 'productsLocation7') {productsLocation7 = 2};
		if (targetLoc.id == 'productsLocation8') {productsLocation8 = 2};
		if (targetLoc.id == 'populationLocation1') {populationLocation1 = 2};
		if (targetLoc.id == 'populationLocation2') {populationLocation2 = 2};
		if (targetLoc.id == 'populationLocation3') {populationLocation3 = 2};
		if (targetLoc.id == 'populationLocation4') {populationLocation4 = 2};
		if (targetLoc.id == 'populationLocation5') {populationLocation5 = 2};
		if (targetLoc.id == 'populationLocation6') {populationLocation6 = 2};
		if (targetLoc.id == 'populationLocation7') {populationLocation7 = 2};
		if (targetLoc.id == 'populationLocation8') {populationLocation8 = 2};
		if (targetLoc.id == 'populationLocation9') {populationLocation9 = 2};
		if (targetLoc.id == 'populationLocation10') {populationLocation10 = 2};
		headerGrowth();
		document.querySelector('#selectWar').classList.add("none");
		locationsOpen();
	};
};
document.querySelector('#WarSeizeCancel').addEventListener('click', WarSeizeСance);
function WarSeizeСance() {
	document.querySelector('#selectWar').classList.add("none");
};
// ==================================
document.querySelector('#buyLoc2 button').addEventListener('click', selectWar2);
function selectWar2() {
	document.querySelector('#selectWar2').classList.remove("none");
	document.querySelector('#War2destroy').classList.add("none");
	if (robots4 == 2) {
		document.querySelector('#War2destroy').classList.remove("none");
	};
	document.querySelector('#colonization1').textContent = targetLoc.dataset.colonytrucks;
	document.querySelector('#colonization2').textContent = targetLoc.dataset.colonyprofit;
	document.querySelector('#colonization3').textContent = targetLoc.dataset.profitname;
	document.querySelector('#colonization4').textContent = targetLoc.dataset.destructionprofitproducts;	
	document.querySelector('#War2Span5').textContent = "";
};
document.querySelector('#War2colonization').addEventListener('click', War2colonization);
function War2colonization() {
	if (header_trucks < Number(targetLoc.dataset.colonytrucks)) {
		document.querySelector('#War2Span5').textContent = "Недостаточно колонистов для создания колонии!";
		document.querySelector('#War2Span5').style.color = '#f00';
	} else {
		header_trucks = Number((header_trucks - Number(targetLoc.dataset.colonytrucks)).toFixed(1));
		if (targetLoc.id == 'scienceLocation1') {scienceLocation1 = 3; scienceLocationProfit = Number((scienceLocationProfit + 100).toFixed(1))};
		if (targetLoc.id == 'scienceLocation2') {scienceLocation2 = 3; scienceLocationProfit = Number((scienceLocationProfit + 200).toFixed(1))};
		if (targetLoc.id == 'scienceLocation3') {scienceLocation3 = 3; scienceLocationProfit = Number((scienceLocationProfit + 500).toFixed(1))};
		if (targetLoc.id == 'scienceLocation4') {scienceLocation4 = 3; scienceLocationProfit = Number((scienceLocationProfit + 1000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation5') {scienceLocation5 = 3; scienceLocationProfit = Number((scienceLocationProfit + 2000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation6') {scienceLocation6 = 3; scienceLocationProfit = Number((scienceLocationProfit + 5000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation7') {scienceLocation7 = 3; scienceLocationProfit = Number((scienceLocationProfit + 10000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation8') {scienceLocation8 = 3; scienceLocationProfit = Number((scienceLocationProfit + 20000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation1') {electricityLocation1 = 3; electricityLocationProfit = Number((electricityLocationProfit + 100).toFixed(1))};
		if (targetLoc.id == 'electricityLocation2') {electricityLocation2 = 3; electricityLocationProfit = Number((electricityLocationProfit + 200).toFixed(1))};
		if (targetLoc.id == 'electricityLocation3') {electricityLocation3 = 3; electricityLocationProfit = Number((electricityLocationProfit + 500).toFixed(1))};
		if (targetLoc.id == 'electricityLocation4') {electricityLocation4 = 3; electricityLocationProfit = Number((electricityLocationProfit + 1000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation5') {electricityLocation5 = 3; electricityLocationProfit = Number((electricityLocationProfit + 2000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation6') {electricityLocation6 = 3; electricityLocationProfit = Number((electricityLocationProfit + 5000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation7') {electricityLocation7 = 3; electricityLocationProfit = Number((electricityLocationProfit + 10000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation8') {electricityLocation8 = 3; electricityLocationProfit = Number((electricityLocationProfit + 20000).toFixed(1))};
		if (targetLoc.id == 'productsLocation1') {productsLocation1 = 3; productsLocationProfit = Number((productsLocationProfit + 100).toFixed(1))};
		if (targetLoc.id == 'productsLocation2') {productsLocation2 = 3; productsLocationProfit = Number((productsLocationProfit + 200).toFixed(1))};
		if (targetLoc.id == 'productsLocation3') {productsLocation3 = 3; productsLocationProfit = Number((productsLocationProfit + 500).toFixed(1))};
		if (targetLoc.id == 'productsLocation4') {productsLocation4 = 3; productsLocationProfit = Number((productsLocationProfit + 1000).toFixed(1))};
		if (targetLoc.id == 'productsLocation5') {productsLocation5 = 3; productsLocationProfit = Number((productsLocationProfit + 2000).toFixed(1))};
		if (targetLoc.id == 'productsLocation6') {productsLocation6 = 3; productsLocationProfit = Number((productsLocationProfit + 5000).toFixed(1))};
		if (targetLoc.id == 'productsLocation7') {productsLocation7 = 3; productsLocationProfit = Number((productsLocationProfit + 10000).toFixed(1))};
		if (targetLoc.id == 'productsLocation8') {productsLocation8 = 3; productsLocationProfit = Number((productsLocationProfit + 20000).toFixed(1))};
		if (targetLoc.id == 'populationLocation1') {populationLocation1 = 3; populationLocationProfit = Number((populationLocationProfit + 10).toFixed(1))};
		if (targetLoc.id == 'populationLocation2') {populationLocation2 = 3; populationLocationProfit = Number((populationLocationProfit + 20).toFixed(1))};
		if (targetLoc.id == 'populationLocation3') {populationLocation3 = 3; populationLocationProfit = Number((populationLocationProfit + 30).toFixed(1))};
		if (targetLoc.id == 'populationLocation4') {populationLocation4 = 3; populationLocationProfit = Number((populationLocationProfit + 40).toFixed(1))};
		if (targetLoc.id == 'populationLocation5') {populationLocation5 = 3; populationLocationProfit = Number((populationLocationProfit + 50).toFixed(1))};
		if (targetLoc.id == 'populationLocation6') {populationLocation6 = 3; populationLocationProfit = Number((populationLocationProfit + 70).toFixed(1))};
		if (targetLoc.id == 'populationLocation7') {populationLocation7 = 3; populationLocationProfit = Number((populationLocationProfit + 100).toFixed(1))};
		if (targetLoc.id == 'populationLocation8') {populationLocation8 = 3; populationLocationProfit = Number((populationLocationProfit + 200).toFixed(1))};
		if (targetLoc.id == 'populationLocation9') {populationLocation9 = 3; populationLocationProfit = Number((populationLocationProfit + 500).toFixed(1))};
		if (targetLoc.id == 'populationLocation10') {populationLocation10 = 3; populationLocationProfit = Number((populationLocationProfit + 1000).toFixed(1))};
		headerGrowth();
		document.querySelector('#selectWar2').classList.add("none");
		locationsOpen();
	};
};
document.querySelector('#War2destroy').addEventListener('click', War2destroy);
function War2destroy() {
	if (header_robots < 1) {
		document.querySelector('#War2Span5').textContent = "Недостаточно боевых роботов для разрушения локации!";
		document.querySelector('#War2Span5').style.color = '#f00';
	} else {
		if (targetLoc.id == 'scienceLocation1') {scienceLocation1 = 4; header_products = Number((header_products + 1000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation2') {scienceLocation2 = 4; header_products = Number((header_products + 2000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation3') {scienceLocation3 = 4; header_products = Number((header_products + 5000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation4') {scienceLocation4 = 4; header_products = Number((header_products + 10000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation5') {scienceLocation5 = 4; header_products = Number((header_products + 20000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation6') {scienceLocation6 = 4; header_products = Number((header_products + 50000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation7') {scienceLocation7 = 4; header_products = Number((header_products + 100000).toFixed(1))};
		if (targetLoc.id == 'scienceLocation8') {scienceLocation8 = 4; header_products = Number((header_products + 200000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation1') {electricityLocation1 = 4; header_products = Number((header_products + 1000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation2') {electricityLocation2 = 4; header_products = Number((header_products + 2000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation3') {electricityLocation3 = 4; header_products = Number((header_products + 5000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation4') {electricityLocation4 = 4; header_products = Number((header_products + 10000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation5') {electricityLocation5 = 4; header_products = Number((header_products + 20000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation6') {electricityLocation6 = 4; header_products = Number((header_products + 50000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation7') {electricityLocation7 = 4; header_products = Number((header_products + 100000).toFixed(1))};
		if (targetLoc.id == 'electricityLocation8') {electricityLocation8 = 4; header_products = Number((header_products + 200000).toFixed(1))};
		if (targetLoc.id == 'productsLocation1') {productsLocation1 = 4; header_products = Number((header_products + 1000).toFixed(1))};
		if (targetLoc.id == 'productsLocation2') {productsLocation2 = 4; header_products = Number((header_products + 2000).toFixed(1))};
		if (targetLoc.id == 'productsLocation3') {productsLocation3 = 4; header_products = Number((header_products + 5000).toFixed(1))};
		if (targetLoc.id == 'productsLocation4') {productsLocation4 = 4; header_products = Number((header_products + 10000).toFixed(1))};
		if (targetLoc.id == 'productsLocation5') {productsLocation5 = 4; header_products = Number((header_products + 20000).toFixed(1))};
		if (targetLoc.id == 'productsLocation6') {productsLocation6 = 4; header_products = Number((header_products + 50000).toFixed(1))};
		if (targetLoc.id == 'productsLocation7') {productsLocation7 = 4; header_products = Number((header_products + 100000).toFixed(1))};
		if (targetLoc.id == 'productsLocation8') {productsLocation8 = 4; header_products = Number((header_products + 200000).toFixed(1))};
		if (targetLoc.id == 'populationLocation1') {populationLocation1 = 4; header_products = Number((header_products + 1000).toFixed(1))};
		if (targetLoc.id == 'populationLocation2') {populationLocation2 = 4; header_products = Number((header_products + 2000).toFixed(1))};
		if (targetLoc.id == 'populationLocation3') {populationLocation3 = 4; header_products = Number((header_products + 5000).toFixed(1))};
		if (targetLoc.id == 'populationLocation4') {populationLocation4 = 4; header_products = Number((header_products + 10000).toFixed(1))};
		if (targetLoc.id == 'populationLocation5') {populationLocation5 = 4; header_products = Number((header_products + 20000).toFixed(1))};
		if (targetLoc.id == 'populationLocation6') {populationLocation6 = 4; header_products = Number((header_products + 50000).toFixed(1))};
		if (targetLoc.id == 'populationLocation7') {populationLocation7 = 4; header_products = Number((header_products + 100000).toFixed(1))};
		if (targetLoc.id == 'populationLocation8') {populationLocation8 = 4; header_products = Number((header_products + 200000).toFixed(1))};
		if (targetLoc.id == 'populationLocation9') {populationLocation9 = 4; header_products = Number((header_products + 500000).toFixed(1))};
		if (targetLoc.id == 'populationLocation10') {populationLocation10 = 4; header_products = Number((header_products + 1000000).toFixed(1))};
		headerGrowth();
		document.querySelector('#selectWar2').classList.add("none");
		locationsOpen();
	};
};
document.querySelector('#War2cancel').addEventListener('click', War2cancel);
function War2cancel() {
	document.querySelector('#selectWar2').classList.add("none");
};