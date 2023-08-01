"use strict";
function buildingsOpen() {
	document.querySelector('.bunker').classList.add("none");
	document.querySelector('.technologies').classList.add("none");
	document.querySelector('.buildings').classList.remove("none");
	document.querySelector('.locations').classList.add("none");
	document.querySelector('.menu').classList.add("none");

	document.querySelector('#bunker').classList.remove("footer1");
	document.querySelector('#technologies').classList.remove("footer2");
	document.querySelector('#buildings').classList.add("footer3");
	document.querySelector('#locations').classList.remove("footer4");
	document.querySelector('#endMove').classList.remove("footer5");
	document.querySelector('#menu').classList.remove("footer6");

	if (powerStation == 1) {
		document.querySelector('.bunker > div:nth-of-type(3)').classList.remove("none");
		document.querySelector('#powerStation1').classList.add("yellow");
		document.querySelector('#powerStation1').dataset.phase = '2';
		document.querySelector('#powerStation2').dataset.phase = '1';
		document.querySelector('#powerStation_workersMax').textContent = 10 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3) input').max = 10 * electricity2;
	};
	if (powerStation == 2) {
		document.querySelector('.bunker > div:nth-of-type(3)').classList.remove("none");
		document.querySelector('#powerStation1').classList.add("yellow");
		document.querySelector('#powerStation2').classList.add("yellow");
		document.querySelector('#powerStation1').dataset.phase = '2';
		document.querySelector('#powerStation2').dataset.phase = '2';
		document.querySelector('#powerStation3').dataset.phase = '1';
		document.querySelector('#powerStation_workersMax').textContent = 100 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3) input').max = 100 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3)').style.width = '70%';
		powerStationPowerSupply = 20;
	};
	if (powerStation == 3) {
		document.querySelector('.bunker > div:nth-of-type(3)').classList.remove("none");
		document.querySelector('#powerStation1').classList.add("yellow");
		document.querySelector('#powerStation2').classList.add("yellow");
		document.querySelector('#powerStation3').classList.add("yellow");
		document.querySelector('#powerStation1').dataset.phase = '2';
		document.querySelector('#powerStation2').dataset.phase = '2';
		document.querySelector('#powerStation3').dataset.phase = '2';
		document.querySelector('#powerStation4').dataset.phase = '1';
		document.querySelector('#powerStation_workersMax').textContent = 500 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3) input').max = 500 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3)').style.width = '80%';
		powerStationPowerSupply = 100;
	};
	if (powerStation == 4) {
		document.querySelector('.bunker > div:nth-of-type(3)').classList.remove("none");
		document.querySelector('#powerStation1').classList.add("yellow");
		document.querySelector('#powerStation2').classList.add("yellow");
		document.querySelector('#powerStation3').classList.add("yellow");
		document.querySelector('#powerStation4').classList.add("yellow");
		document.querySelector('#powerStation1').dataset.phase = '2';
		document.querySelector('#powerStation2').dataset.phase = '2';
		document.querySelector('#powerStation3').dataset.phase = '2';
		document.querySelector('#powerStation4').dataset.phase = '2';
		document.querySelector('#powerStation5').dataset.phase = '1';
		document.querySelector('#powerStation_workersMax').textContent = 2000 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3) input').max = 2000 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3)').style.width = '90%';
		powerStationPowerSupply = 500;
	};
	if (powerStation == 5) {
		document.querySelector('.bunker > div:nth-of-type(3)').classList.remove("none");
		document.querySelector('#powerStation1').classList.add("yellow");
		document.querySelector('#powerStation2').classList.add("yellow");
		document.querySelector('#powerStation3').classList.add("yellow");
		document.querySelector('#powerStation4').classList.add("yellow");
		document.querySelector('#powerStation5').classList.add("yellow");
		document.querySelector('#powerStation1').dataset.phase = '2';
		document.querySelector('#powerStation2').dataset.phase = '2';
		document.querySelector('#powerStation3').dataset.phase = '2';
		document.querySelector('#powerStation4').dataset.phase = '2';
		document.querySelector('#powerStation5').dataset.phase = '2';
		document.querySelector('#powerStation_workersMax').textContent = 5000 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3) input').max = 5000 * electricity2;
		document.querySelector('.bunker > div:nth-of-type(3)').style.width = '99%';
		powerStationPowerSupply = 2500;
	};
	if (scienceCenter == 1) {
		document.querySelector('.bunker > div:nth-of-type(4)').classList.remove("none");
		document.querySelector('#scienceCenter1').classList.add("yellow");
		document.querySelector('#scienceCenter1').dataset.phase = '2';
		document.querySelector('#scienceCenter2').dataset.phase = '1';
		document.querySelector('#scienceCenter_workersMax').textContent = 10 * science2;
		document.querySelector('.bunker > div:nth-of-type(4) input').max = 10 * science2;
	};
	if (scienceCenter == 2) {
		document.querySelector('.bunker > div:nth-of-type(4)').classList.remove("none");
		document.querySelector('#scienceCenter1').classList.add("yellow");
		document.querySelector('#scienceCenter1').dataset.phase = '2';
		document.querySelector('#scienceCenter2').classList.add("yellow");
		document.querySelector('#scienceCenter2').dataset.phase = '2';
		document.querySelector('#scienceCenter3').dataset.phase = '1';
		document.querySelector('#scienceCenter_workersMax').textContent = 100 * science2;
		document.querySelector('.bunker > div:nth-of-type(4) input').max = 100 * science2;
		document.querySelector('.bunker > div:nth-of-type(4)').style.width = '70%';
		scienceCenterPowerSupply = 20;
	};
	if (scienceCenter == 3) {
		document.querySelector('.bunker > div:nth-of-type(4)').classList.remove("none");
		document.querySelector('#scienceCenter1').classList.add("yellow");
		document.querySelector('#scienceCenter1').dataset.phase = '2';
		document.querySelector('#scienceCenter2').classList.add("yellow");
		document.querySelector('#scienceCenter2').dataset.phase = '2';
		document.querySelector('#scienceCenter3').classList.add("yellow");
		document.querySelector('#scienceCenter3').dataset.phase = '2';
		document.querySelector('#scienceCenter4').dataset.phase = '1';
		document.querySelector('#scienceCenter_workersMax').textContent = 500 * science2;
		document.querySelector('.bunker > div:nth-of-type(4) input').max = 500 * science2;
		document.querySelector('.bunker > div:nth-of-type(4)').style.width = '80%';
		scienceCenterPowerSupply = 100;
	};
	if (scienceCenter == 4) {
		document.querySelector('.bunker > div:nth-of-type(4)').classList.remove("none");
		document.querySelector('#scienceCenter1').classList.add("yellow");
		document.querySelector('#scienceCenter1').dataset.phase = '2';
		document.querySelector('#scienceCenter2').classList.add("yellow");
		document.querySelector('#scienceCenter2').dataset.phase = '2';
		document.querySelector('#scienceCenter3').classList.add("yellow");
		document.querySelector('#scienceCenter3').dataset.phase = '2';
		document.querySelector('#scienceCenter4').classList.add("yellow");
		document.querySelector('#scienceCenter4').dataset.phase = '2';
		document.querySelector('#scienceCenter5').dataset.phase = '1';
		document.querySelector('#scienceCenter_workersMax').textContent = 2000 * science2;
		document.querySelector('.bunker > div:nth-of-type(4) input').max = 2000 * science2;
		document.querySelector('.bunker > div:nth-of-type(4)').style.width = '90%';
		scienceCenterPowerSupply = 500;
	};
	if (scienceCenter == 5) {
		document.querySelector('.bunker > div:nth-of-type(4)').classList.remove("none");
		document.querySelector('#scienceCenter1').classList.add("yellow");
		document.querySelector('#scienceCenter1').dataset.phase = '2';
		document.querySelector('#scienceCenter2').classList.add("yellow");
		document.querySelector('#scienceCenter2').dataset.phase = '2';
		document.querySelector('#scienceCenter3').classList.add("yellow");
		document.querySelector('#scienceCenter3').dataset.phase = '2';
		document.querySelector('#scienceCenter4').classList.add("yellow");
		document.querySelector('#scienceCenter4').dataset.phase = '2';
		document.querySelector('#scienceCenter5').classList.add("yellow");
		document.querySelector('#scienceCenter5').dataset.phase = '2';
		document.querySelector('#scienceCenter_workersMax').textContent = 5000 * science2;
		document.querySelector('.bunker > div:nth-of-type(4) input').max = 5000 * science2;
		document.querySelector('.bunker > div:nth-of-type(4)').style.width = '99%';
		scienceCenterPowerSupply = 2500;
	};
	if (productsFactory == 1) {
		document.querySelector('.bunker > div:nth-of-type(5)').classList.remove("none");
		document.querySelector('#productsFactory1').classList.add("yellow");
		document.querySelector('#productsFactory1').dataset.phase = '2';
		document.querySelector('#productsFactory2').dataset.phase = '1';
		document.querySelector('#productsFactory_workersMax').textContent = 10 * products2;
		document.querySelector('.bunker > div:nth-of-type(5) input').max = 10 * products2;
	};
	if (productsFactory == 2) {
		document.querySelector('.bunker > div:nth-of-type(5)').classList.remove("none");
		document.querySelector('#productsFactory1').classList.add("yellow");
		document.querySelector('#productsFactory1').dataset.phase = '2';
		document.querySelector('#productsFactory2').classList.add("yellow");
		document.querySelector('#productsFactory2').dataset.phase = '2';
		document.querySelector('#productsFactory3').dataset.phase = '1';
		document.querySelector('#productsFactory_workersMax').textContent = 100 * products2;
		document.querySelector('.bunker > div:nth-of-type(5) input').max = 100 * products2;
		document.querySelector('.bunker > div:nth-of-type(5)').style.width = '70%';
		productsFactoryPowerSupply = 20;
	};
	if (productsFactory == 3) {
		document.querySelector('.bunker > div:nth-of-type(5)').classList.remove("none");
		document.querySelector('#productsFactory1').classList.add("yellow");
		document.querySelector('#productsFactory1').dataset.phase = '2';
		document.querySelector('#productsFactory2').classList.add("yellow");
		document.querySelector('#productsFactory2').dataset.phase = '2';
		document.querySelector('#productsFactory3').classList.add("yellow");
		document.querySelector('#productsFactory3').dataset.phase = '2';
		document.querySelector('#productsFactory4').dataset.phase = '1';
		document.querySelector('#productsFactory_workersMax').textContent = 500 * products2;
		document.querySelector('.bunker > div:nth-of-type(5) input').max = 500 * products2;
		document.querySelector('.bunker > div:nth-of-type(5)').style.width = '80%';
		productsFactoryPowerSupply = 100;
	};
	if (productsFactory == 4) {
		document.querySelector('.bunker > div:nth-of-type(5)').classList.remove("none");
		document.querySelector('#productsFactory1').classList.add("yellow");
		document.querySelector('#productsFactory1').dataset.phase = '2';
		document.querySelector('#productsFactory2').classList.add("yellow");
		document.querySelector('#productsFactory2').dataset.phase = '2';
		document.querySelector('#productsFactory3').classList.add("yellow");
		document.querySelector('#productsFactory3').dataset.phase = '2';
		document.querySelector('#productsFactory4').classList.add("yellow");
		document.querySelector('#productsFactory4').dataset.phase = '2';
		document.querySelector('#productsFactory5').dataset.phase = '1';
		document.querySelector('#productsFactory_workersMax').textContent = 2000 * products2;
		document.querySelector('.bunker > div:nth-of-type(5) input').max = 2000 * products2;
		document.querySelector('.bunker > div:nth-of-type(5)').style.width = '90%';
		productsFactoryPowerSupply = 500;
	};
	if (productsFactory == 5) {
		document.querySelector('.bunker > div:nth-of-type(5)').classList.remove("none");
		document.querySelector('#productsFactory1').classList.add("yellow");
		document.querySelector('#productsFactory1').dataset.phase = '2';
		document.querySelector('#productsFactory2').classList.add("yellow");
		document.querySelector('#productsFactory2').dataset.phase = '2';
		document.querySelector('#productsFactory3').classList.add("yellow");
		document.querySelector('#productsFactory3').dataset.phase = '2';
		document.querySelector('#productsFactory4').classList.add("yellow");
		document.querySelector('#productsFactory4').dataset.phase = '2';
		document.querySelector('#productsFactory5').classList.add("yellow");
		document.querySelector('#productsFactory5').dataset.phase = '2';
		document.querySelector('#productsFactory_workersMax').textContent = 5000 * products2;
		document.querySelector('.bunker > div:nth-of-type(5) input').max = 5000 * products2;
		document.querySelector('.bunker > div:nth-of-type(5)').style.width = '99%';
		productsFactoryPowerSupply = 2500;
	};
	if (humanArea == 1) {
		document.querySelector('.bunker > div:nth-of-type(6)').classList.remove("none");
		document.querySelector('#humanArea1').classList.add("yellow");
		document.querySelector('#humanArea1').dataset.phase = '2';
		document.querySelector('#humanArea2').dataset.phase = '1';
		document.querySelector('#humanArea_workersMax').textContent = 10 * population2;
		document.querySelector('.bunker > div:nth-of-type(6) input').max = 10 * population2;
	};
	if (humanArea == 2) {
		document.querySelector('.bunker > div:nth-of-type(6)').classList.remove("none");
		document.querySelector('#humanArea1').classList.add("yellow");
		document.querySelector('#humanArea1').dataset.phase = '2';
		document.querySelector('#humanArea2').classList.add("yellow");
		document.querySelector('#humanArea2').dataset.phase = '2';
		document.querySelector('#humanArea3').dataset.phase = '1';
		document.querySelector('#humanArea_workersMax').textContent = 100 * population2;
		document.querySelector('.bunker > div:nth-of-type(6) input').max = 100 * population2;
		document.querySelector('.bunker > div:nth-of-type(6)').style.width = '70%';
		humanAreaPowerSupply = 20;
	};
	if (humanArea == 3) {
		document.querySelector('.bunker > div:nth-of-type(6)').classList.remove("none");
		document.querySelector('#humanArea1').classList.add("yellow");
		document.querySelector('#humanArea1').dataset.phase = '2';
		document.querySelector('#humanArea2').classList.add("yellow");
		document.querySelector('#humanArea2').dataset.phase = '2';
		document.querySelector('#humanArea3').classList.add("yellow");
		document.querySelector('#humanArea3').dataset.phase = '2';
		document.querySelector('#humanArea4').dataset.phase = '1';
		document.querySelector('#humanArea_workersMax').textContent = 500 * population2;
		document.querySelector('.bunker > div:nth-of-type(6) input').max = 500 * population2;
		document.querySelector('.bunker > div:nth-of-type(6)').style.width = '80%';
		humanAreaPowerSupply = 100;
	};
	if (humanArea == 4) {
		document.querySelector('.bunker > div:nth-of-type(6)').classList.remove("none");
		document.querySelector('#humanArea1').classList.add("yellow");
		document.querySelector('#humanArea1').dataset.phase = '2';
		document.querySelector('#humanArea2').classList.add("yellow");
		document.querySelector('#humanArea2').dataset.phase = '2';
		document.querySelector('#humanArea3').classList.add("yellow");
		document.querySelector('#humanArea3').dataset.phase = '2';
		document.querySelector('#humanArea4').classList.add("yellow");
		document.querySelector('#humanArea4').dataset.phase = '2';
		document.querySelector('#humanArea5').dataset.phase = '1';
		document.querySelector('#humanArea_workersMax').textContent = 2000 * population2;
		document.querySelector('.bunker > div:nth-of-type(6) input').max = 2000 * population2;
		document.querySelector('.bunker > div:nth-of-type(6)').style.width = '90%';
		humanAreaPowerSupply = 500;
	};
	if (humanArea == 5) {
		document.querySelector('.bunker > div:nth-of-type(6)').classList.remove("none");
		document.querySelector('#humanArea1').classList.add("yellow");
		document.querySelector('#humanArea1').dataset.phase = '2';
		document.querySelector('#humanArea2').classList.add("yellow");
		document.querySelector('#humanArea2').dataset.phase = '2';
		document.querySelector('#humanArea3').classList.add("yellow");
		document.querySelector('#humanArea3').dataset.phase = '2';
		document.querySelector('#humanArea4').classList.add("yellow");
		document.querySelector('#humanArea4').dataset.phase = '2';
		document.querySelector('#humanArea5').classList.add("yellow");
		document.querySelector('#humanArea5').dataset.phase = '2';
		document.querySelector('#humanArea_workersMax').textContent = 5000 * population2;
		document.querySelector('.bunker > div:nth-of-type(6) input').max = 5000 * population2;
		document.querySelector('.bunker > div:nth-of-type(6)').style.width = '99%';
		humanAreaPowerSupply = 2500;
	};
	if (trucksFactory == 1) {
		document.querySelector('.bunker > div:nth-of-type(7)').classList.remove("none");
		document.querySelector('#trucksFactory1').classList.add("yellow");
		document.querySelector('#trucksFactory1').dataset.phase = '2';
		document.querySelector('#trucksFactory2').dataset.phase = '1';
		document.querySelector('#trucksFactory_workersMax').textContent = 10 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7) input').max = 10 * trucks2;
	};
	if (trucksFactory == 2) {
		document.querySelector('.bunker > div:nth-of-type(7)').classList.remove("none");
		document.querySelector('#trucksFactory1').classList.add("yellow");
		document.querySelector('#trucksFactory1').dataset.phase = '2';
		document.querySelector('#trucksFactory2').classList.add("yellow");
		document.querySelector('#trucksFactory2').dataset.phase = '2';
		document.querySelector('#trucksFactory3').dataset.phase = '1';
		document.querySelector('#trucksFactory_workersMax').textContent = 100 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7) input').max = 100 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7)').style.width = '70%';
		trucksFactoryPowerSupply = 20;
	};
	if (trucksFactory == 3) {
		document.querySelector('.bunker > div:nth-of-type(7)').classList.remove("none");
		document.querySelector('#trucksFactory1').classList.add("yellow");
		document.querySelector('#trucksFactory1').dataset.phase = '2';
		document.querySelector('#trucksFactory2').classList.add("yellow");
		document.querySelector('#trucksFactory2').dataset.phase = '2';
		document.querySelector('#trucksFactory3').classList.add("yellow");
		document.querySelector('#trucksFactory3').dataset.phase = '2';
		document.querySelector('#trucksFactory4').dataset.phase = '1';
		document.querySelector('#trucksFactory_workersMax').textContent = 500 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7) input').max = 500 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7)').style.width = '80%';
		trucksFactoryPowerSupply = 100;
	};
	if (trucksFactory == 4) {
		document.querySelector('.bunker > div:nth-of-type(7)').classList.remove("none");
		document.querySelector('#trucksFactory1').classList.add("yellow");
		document.querySelector('#trucksFactory1').dataset.phase = '2';
		document.querySelector('#trucksFactory2').classList.add("yellow");
		document.querySelector('#trucksFactory2').dataset.phase = '2';
		document.querySelector('#trucksFactory3').classList.add("yellow");
		document.querySelector('#trucksFactory3').dataset.phase = '2';
		document.querySelector('#trucksFactory4').classList.add("yellow");
		document.querySelector('#trucksFactory4').dataset.phase = '2';
		document.querySelector('#trucksFactory5').dataset.phase = '1';
		document.querySelector('#trucksFactory_workersMax').textContent = 2000 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7) input').max = 2000 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7)').style.width = '90%';
		trucksFactoryPowerSupply = 500;
	};
	if (trucksFactory == 5) {
		document.querySelector('.bunker > div:nth-of-type(7)').classList.remove("none");
		document.querySelector('#trucksFactory1').classList.add("yellow");
		document.querySelector('#trucksFactory1').dataset.phase = '2';
		document.querySelector('#trucksFactory2').classList.add("yellow");
		document.querySelector('#trucksFactory2').dataset.phase = '2';
		document.querySelector('#trucksFactory3').classList.add("yellow");
		document.querySelector('#trucksFactory3').dataset.phase = '2';
		document.querySelector('#trucksFactory4').classList.add("yellow");
		document.querySelector('#trucksFactory4').dataset.phase = '2';
		document.querySelector('#trucksFactory5').classList.add("yellow");
		document.querySelector('#trucksFactory5').dataset.phase = '2';
		document.querySelector('#trucksFactory_workersMax').textContent = 5000 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7) input').max = 5000 * trucks2;
		document.querySelector('.bunker > div:nth-of-type(7)').style.width = '99%';
		trucksFactoryPowerSupply = 2500;
	};
	if (militaryBase == 1) {
		document.querySelector('.bunker > div:nth-of-type(8)').classList.remove("none");
		document.querySelector('#militaryBase1').classList.add("yellow");
		document.querySelector('#militaryBase1').dataset.phase = '2';
		document.querySelector('#militaryBase2').dataset.phase = '1';
		document.querySelector('#militaryBase_workersMax').textContent = 10 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8) input').max = 10 * robots2;
	};
	if (militaryBase == 2) {
		document.querySelector('.bunker > div:nth-of-type(8)').classList.remove("none");
		document.querySelector('#militaryBase1').classList.add("yellow");
		document.querySelector('#militaryBase1').dataset.phase = '2';
		document.querySelector('#militaryBase2').classList.add("yellow");
		document.querySelector('#militaryBase2').dataset.phase = '2';
		document.querySelector('#militaryBase3').dataset.phase = '1';
		document.querySelector('#militaryBase_workersMax').textContent = 100 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8) input').max = 100 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8)').style.width = '70%';
		militaryBasePowerSupply = 20;
	};
	if (militaryBase == 3) {
		document.querySelector('.bunker > div:nth-of-type(8)').classList.remove("none");
		document.querySelector('#militaryBase1').classList.add("yellow");
		document.querySelector('#militaryBase1').dataset.phase = '2';
		document.querySelector('#militaryBase2').classList.add("yellow");
		document.querySelector('#militaryBase2').dataset.phase = '2';
		document.querySelector('#militaryBase3').classList.add("yellow");
		document.querySelector('#militaryBase3').dataset.phase = '2';
		document.querySelector('#militaryBase4').dataset.phase = '1';
		document.querySelector('#militaryBase_workersMax').textContent = 500 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8) input').max = 500 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8)').style.width = '80%';
		militaryBasePowerSupply = 100;
	};
	if (militaryBase == 4) {
		document.querySelector('.bunker > div:nth-of-type(8)').classList.remove("none");
		document.querySelector('#militaryBase1').classList.add("yellow");
		document.querySelector('#militaryBase1').dataset.phase = '2';
		document.querySelector('#militaryBase2').classList.add("yellow");
		document.querySelector('#militaryBase2').dataset.phase = '2';
		document.querySelector('#militaryBase3').classList.add("yellow");
		document.querySelector('#militaryBase3').dataset.phase = '2';
		document.querySelector('#militaryBase4').classList.add("yellow");
		document.querySelector('#militaryBase4').dataset.phase = '2';
		document.querySelector('#militaryBase5').dataset.phase = '1';
		document.querySelector('#militaryBase_workersMax').textContent = 2000 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8) input').max = 2000 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8)').style.width = '90%';
		militaryBasePowerSupply = 500;
	};
	if (militaryBase == 5) {
		document.querySelector('.bunker > div:nth-of-type(8)').classList.remove("none");
		document.querySelector('#militaryBase1').classList.add("yellow");
		document.querySelector('#militaryBase1').dataset.phase = '2';
		document.querySelector('#militaryBase2').classList.add("yellow");
		document.querySelector('#militaryBase2').dataset.phase = '2';
		document.querySelector('#militaryBase3').classList.add("yellow");
		document.querySelector('#militaryBase3').dataset.phase = '2';
		document.querySelector('#militaryBase4').classList.add("yellow");
		document.querySelector('#militaryBase4').dataset.phase = '2';
		document.querySelector('#militaryBase5').classList.add("yellow");
		document.querySelector('#militaryBase5').dataset.phase = '2';
		document.querySelector('#militaryBase_workersMax').textContent = 5000 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8) input').max = 5000 * robots2;
		document.querySelector('.bunker > div:nth-of-type(8)').style.width = '99%';
		militaryBasePowerSupply = 2500;
	};
	if (defense == 1.1) {
		document.querySelector('.bunker > div:nth-of-type(2)').classList.remove("none");
		document.querySelector('#defense1').classList.add("yellow");
		document.querySelector('#defense1').dataset.phase = '2';
		document.querySelector('#defense2').dataset.phase = '1';
	};
	if (defense == 1.2) {
		document.querySelector('.bunker > div:nth-of-type(2)').classList.remove("none");
		document.querySelector('#defense1').classList.add("yellow");
		document.querySelector('#defense1').dataset.phase = '2';
		document.querySelector('#defense2').classList.add("yellow");
		document.querySelector('#defense2').dataset.phase = '2';
		document.querySelector('#defense3').dataset.phase = '1';
		document.querySelector('#defense > span:nth-of-type(1)').textContent = 20;
		defensePowerSupply = 20;
	};
	if (defense == 1.3) {
		document.querySelector('.bunker > div:nth-of-type(2)').classList.remove("none");
		document.querySelector('#defense1').classList.add("yellow");
		document.querySelector('#defense1').dataset.phase = '2';
		document.querySelector('#defense2').classList.add("yellow");
		document.querySelector('#defense2').dataset.phase = '2';
		document.querySelector('#defense3').classList.add("yellow");
		document.querySelector('#defense3').dataset.phase = '2';
		document.querySelector('#defense4').dataset.phase = '1';
		document.querySelector('#defense > span:nth-of-type(1)').textContent = 30;
		defensePowerSupply = 100;
	};
	if (defense == 1.5) {
		document.querySelector('.bunker > div:nth-of-type(2)').classList.remove("none");
		document.querySelector('#defense1').classList.add("yellow");
		document.querySelector('#defense1').dataset.phase = '2';
		document.querySelector('#defense2').classList.add("yellow");
		document.querySelector('#defense2').dataset.phase = '2';
		document.querySelector('#defense3').classList.add("yellow");
		document.querySelector('#defense3').dataset.phase = '2';
		document.querySelector('#defense4').classList.add("yellow");
		document.querySelector('#defense4').dataset.phase = '2';
		document.querySelector('#defense5').dataset.phase = '1';
		document.querySelector('#defense > span:nth-of-type(1)').textContent = 50;
		defensePowerSupply = 500;
	};
	if (defense >= 2) {
		document.querySelector('.bunker > div:nth-of-type(2)').classList.remove("none");
		document.querySelector('#defense1').classList.add("yellow");
		document.querySelector('#defense1').dataset.phase = '2';
		document.querySelector('#defense2').classList.add("yellow");
		document.querySelector('#defense2').dataset.phase = '2';
		document.querySelector('#defense3').classList.add("yellow");
		document.querySelector('#defense3').dataset.phase = '2';
		document.querySelector('#defense4').classList.add("yellow");
		document.querySelector('#defense4').dataset.phase = '2';
		document.querySelector('#defense5').classList.add("yellow");
		document.querySelector('#defense5').dataset.phase = '2';
		document.querySelector('#defense > span:nth-of-type(1)').textContent = defUpPercentage;
		defensePowerSupply = 2500;
	};

	document.querySelectorAll('.buildings div').forEach((elem) => { 
		if (elem.dataset.phase != '1' || Number(elem.dataset.price) > header_products) {
			elem.style.opacity = '0.5';
		} else {
			elem.style.opacity = '1';
		};
	});
};
// ==================================
let target = document.querySelector('#infoBuild');
document.querySelector('.buildings').addEventListener('click', selectionBuilding);
function selectionBuilding(event) {
	document.querySelector('#infoBuild span:nth-of-type(2)').textContent = 'Выбери здание что бы узнать подробности';
	document.querySelector('#infoBuild span:nth-of-type(1)').textContent = '';
	document.querySelector('#infoBuild span:nth-of-type(1)').style.color = '#000';
	target.classList.remove("green");
	target.classList.remove("red");
	document.querySelector('#buyBuild').classList.add("none");
	if (event.target.nodeName === 'DIV') {
		target = event.target;	
	};	
	if (event.target.parentNode.nodeName === 'DIV') {
		target = event.target.parentNode;	
	};
	document.querySelector('#infoBuild span:nth-of-type(1)').textContent = target.dataset.name;
	if (target.dataset.phase == '0') {
		document.querySelector('#infoBuild span:nth-of-type(2)').textContent = target.dataset.inform0;
		target.classList.add("red");
	} else if (target.dataset.phase == '1' && Number(target.dataset.price) <= header_products) {
		document.querySelector('#infoBuild span:nth-of-type(2)').textContent = target.dataset.inform1;
		target.classList.add("green");
		document.querySelector('#buyBuild').classList.remove("none");
	} else if (target.dataset.phase == '1' && Number(target.dataset.price) > header_products) {
		document.querySelector('#infoBuild span:nth-of-type(1)').textContent = 'Недостаточно продукции';
		document.querySelector('#infoBuild span:nth-of-type(1)').style.color = '#f00';
		document.querySelector('#infoBuild span:nth-of-type(2)').textContent = target.dataset.inform1;
		target.classList.add("green");
	} else if (target.dataset.phase == '2') {
		document.querySelector('#infoBuild span:nth-of-type(2)').textContent = target.dataset.inform2;
	};
};
// ==================================
document.querySelector('#buyBuild').addEventListener('click', buyBuild);
function buyBuild() {
	header_products = Number((header_products - target.dataset.price * products5).toFixed(3));
	if (target.id == 'powerStation1') {powerStation = 1};
	if (target.id == 'powerStation2') {powerStation = 2};
	if (target.id == 'powerStation3') {powerStation = 3};
	if (target.id == 'powerStation4') {powerStation = 4};
	if (target.id == 'powerStation5') {powerStation = 5};
	if (target.id == 'scienceCenter1') {scienceCenter = 1};
	if (target.id == 'scienceCenter2') {scienceCenter = 2};
	if (target.id == 'scienceCenter3') {scienceCenter = 3};
	if (target.id == 'scienceCenter4') {scienceCenter = 4};
	if (target.id == 'scienceCenter5') {scienceCenter = 5};
	if (target.id == 'productsFactory1') {productsFactory = 1};
	if (target.id == 'productsFactory2') {productsFactory = 2};
	if (target.id == 'productsFactory3') {productsFactory = 3};
	if (target.id == 'productsFactory4') {productsFactory = 4};
	if (target.id == 'productsFactory5') {productsFactory = 5};
	if (target.id == 'humanArea1') {humanArea = 1};
	if (target.id == 'humanArea2') {humanArea = 2};
	if (target.id == 'humanArea3') {humanArea = 3};
	if (target.id == 'humanArea4') {humanArea = 4};
	if (target.id == 'humanArea5') {humanArea = 5};
	if (target.id == 'trucksFactory1') {trucksFactory = 1};
	if (target.id == 'trucksFactory2') {trucksFactory = 2};
	if (target.id == 'trucksFactory3') {trucksFactory = 3};
	if (target.id == 'trucksFactory4') {trucksFactory = 4};
	if (target.id == 'trucksFactory5') {trucksFactory = 5};
	if (target.id == 'militaryBase1') {militaryBase = 1};
	if (target.id == 'militaryBase2') {militaryBase = 2};
	if (target.id == 'militaryBase3') {militaryBase = 3};
	if (target.id == 'militaryBase4') {militaryBase = 4};
	if (target.id == 'militaryBase5') {militaryBase = 5};
	if (target.id == 'defense1') {defense = 1.1};
	if (target.id == 'defense2') {defense = 1.2};
	if (target.id == 'defense3') {defense = 1.3};
	if (target.id == 'defense4') {defense = 1.5};
	if (target.id == 'defense5') {defense = 2};
	buildingsOpen();
	headerGrowth();
	defenseUpgradeReady();
};
// ==================================
document.querySelector('.bunker > div:nth-of-type(2)').addEventListener('click', defenseUpgrade);
function defenseUpgrade() {
	if (defense >= 2 && header_products >= 100000) {
		header_products = Number((header_products - 100000).toFixed(3));
		defense = Number((defense + 0.1).toFixed(1));
		defUpPercentage = Number((defUpPercentage + 10).toFixed(3));
		document.querySelector('#defense > span:nth-of-type(1)').textContent = defUpPercentage;
		headerGrowth();
		defenseUpgradeReady();
	};
};
function defenseUpgradeReady() {
	if (defense < 2 || header_products < 100000) {
		document.querySelector('#defenseUp').classList.add('none');
	} else {
		document.querySelector('#defenseUp').classList.remove('none');
	};
};