"use strict";
function save() {
	localStorage.setItem('header_electricity', header_electricity);
	localStorage.setItem('header_science', header_science);
	localStorage.setItem('header_products', header_products);
	localStorage.setItem('header_population', header_population);
	localStorage.setItem('header_trucks', header_trucks);
	localStorage.setItem('header_robots', header_robots);
	localStorage.setItem('move', move);
	localStorage.setItem('techPrice', techPrice);
	localStorage.setItem('mortality', mortality);
	localStorage.setItem('electricity1', electricity1);
	localStorage.setItem('electricity2', electricity2);
	localStorage.setItem('electricity3', electricity3);
	localStorage.setItem('electricity4', electricity4);
	localStorage.setItem('electricity5', electricity5);
	localStorage.setItem('science1', science1);
	localStorage.setItem('science2', science2);
	localStorage.setItem('science3', science3);
	localStorage.setItem('science4', science4);
	localStorage.setItem('science5', science5);
	localStorage.setItem('products1', products1);
	localStorage.setItem('products2', products2);
	localStorage.setItem('products3', products3);
	localStorage.setItem('products4', products4);
	localStorage.setItem('products5', products5);
	localStorage.setItem('population1', population1);
	localStorage.setItem('population2', population2);
	localStorage.setItem('population3', population3);
	localStorage.setItem('population4', population4);
	localStorage.setItem('population5', population5);
	localStorage.setItem('trucks1', trucks1);
	localStorage.setItem('trucks2', trucks2);
	localStorage.setItem('trucks3', trucks3);
	localStorage.setItem('trucks4', trucks4);
	localStorage.setItem('trucks5', trucks5);
	localStorage.setItem('robots1', robots1);
	localStorage.setItem('robots2', robots2);
	localStorage.setItem('robots3', robots3);
	localStorage.setItem('robots4', robots4);
	localStorage.setItem('robots5', robots5);
	localStorage.setItem('attack1', attack1);
	localStorage.setItem('attack2', attack2);
	localStorage.setItem('attack3', attack3);
	localStorage.setItem('attack4', attack4);
	localStorage.setItem('attack5', attack5);
	localStorage.setItem('powerStation', powerStation);
	localStorage.setItem('scienceCenter', scienceCenter);
	localStorage.setItem('productsFactory', productsFactory);
	localStorage.setItem('humanArea', humanArea);
	localStorage.setItem('trucksFactory', trucksFactory);
	localStorage.setItem('militaryBase', militaryBase);
	localStorage.setItem('defense', defense);
	localStorage.setItem('defUpPercentage', defUpPercentage);
	localStorage.setItem('powerStationPowerSupply', powerStationPowerSupply);
	localStorage.setItem('scienceCenterPowerSupply', scienceCenterPowerSupply);
	localStorage.setItem('productsFactoryPowerSupply', productsFactoryPowerSupply);
	localStorage.setItem('humanAreaPowerSupply', humanAreaPowerSupply);
	localStorage.setItem('trucksFactoryPowerSupply', trucksFactoryPowerSupply);
	localStorage.setItem('militaryBasePowerSupply', militaryBasePowerSupply);
	localStorage.setItem('defensePowerSupply', defensePowerSupply);
	localStorage.setItem('scienceLocation1', scienceLocation1);
	localStorage.setItem('scienceLocation2', scienceLocation2);
	localStorage.setItem('scienceLocation3', scienceLocation3);
	localStorage.setItem('scienceLocation4', scienceLocation4);
	localStorage.setItem('scienceLocation5', scienceLocation5);
	localStorage.setItem('scienceLocation6', scienceLocation6);
	localStorage.setItem('scienceLocation7', scienceLocation7);
	localStorage.setItem('scienceLocation8', scienceLocation8);
	localStorage.setItem('electricityLocation1', electricityLocation1);
	localStorage.setItem('electricityLocation2', electricityLocation2);
	localStorage.setItem('electricityLocation3', electricityLocation3);
	localStorage.setItem('electricityLocation4', electricityLocation4);
	localStorage.setItem('electricityLocation5', electricityLocation5);
	localStorage.setItem('electricityLocation6', electricityLocation6);
	localStorage.setItem('electricityLocation7', electricityLocation7);
	localStorage.setItem('electricityLocation8', electricityLocation8);
	localStorage.setItem('productsLocation1', productsLocation1);
	localStorage.setItem('productsLocation2', productsLocation2);
	localStorage.setItem('productsLocation3', productsLocation3);
	localStorage.setItem('productsLocation4', productsLocation4);
	localStorage.setItem('productsLocation5', productsLocation5);
	localStorage.setItem('productsLocation6', productsLocation6);
	localStorage.setItem('productsLocation7', productsLocation7);
	localStorage.setItem('productsLocation8', productsLocation8);
	localStorage.setItem('populationLocation1', populationLocation1);
	localStorage.setItem('populationLocation2', populationLocation2);
	localStorage.setItem('populationLocation3', populationLocation3);
	localStorage.setItem('populationLocation4', populationLocation4);
	localStorage.setItem('populationLocation5', populationLocation5);
	localStorage.setItem('populationLocation6', populationLocation6);
	localStorage.setItem('populationLocation7', populationLocation7);
	localStorage.setItem('populationLocation8', populationLocation8);
	localStorage.setItem('populationLocation9', populationLocation9);
	localStorage.setItem('populationLocation10', populationLocation10);
	localStorage.setItem('scienceLocationProfit', scienceLocationProfit);
	localStorage.setItem('electricityLocationProfit', electricityLocationProfit);
    localStorage.setItem('productsLocationProfit', productsLocationProfit);
	localStorage.setItem('populationLocationProfit', populationLocationProfit);  
	localStorage.setItem('troubleMove', troubleMove); 
	localStorage.setItem('troublePower', troublePower); 
};
function load() {
	if (localStorage.getItem('header_electricity') !== null) {
		header_electricity = Number(localStorage.getItem('header_electricity'));
    };
	if (localStorage.getItem('header_science') !== null) {
		header_science = Number(localStorage.getItem('header_science'));
    };
	if (localStorage.getItem('header_products') !== null) {
		header_products = Number(localStorage.getItem('header_products'));
    };
	if (localStorage.getItem('header_population') !== null) {
		header_population = Number(localStorage.getItem('header_population'));
    };
	if (localStorage.getItem('header_trucks') !== null) {
		header_trucks = Number(localStorage.getItem('header_trucks'));
    };
	if (localStorage.getItem('header_robots') !== null) {
		header_robots = Number(localStorage.getItem('header_robots'));
    };
	if (localStorage.getItem('move') !== null) {
		move = Number(localStorage.getItem('move'));
    };
	if (localStorage.getItem('techPrice') !== null) {
		techPrice = Number(localStorage.getItem('techPrice'));
    };
	if (localStorage.getItem('mortality') !== null) {
		mortality = Number(localStorage.getItem('mortality'));
    };
	if (localStorage.getItem('electricity1') !== null) {
		electricity1 = Number(localStorage.getItem('electricity1'));
    };
	if (localStorage.getItem('electricity2') !== null) {
		electricity2 = Number(localStorage.getItem('electricity2'));
    };
	if (localStorage.getItem('electricity3') !== null) {
		electricity3 = Number(localStorage.getItem('electricity3'));
    };
	if (localStorage.getItem('electricity4') !== null) {
		electricity4 = Number(localStorage.getItem('electricity4'));
    };
	if (localStorage.getItem('electricity5') !== null) {
		electricity5 = Number(localStorage.getItem('electricity5'));
    };
	if (localStorage.getItem('science1') !== null) {
		science1 = Number(localStorage.getItem('science1'));
    };
	if (localStorage.getItem('science2') !== null) {
		science2 = Number(localStorage.getItem('science2'));
    };
	if (localStorage.getItem('science3') !== null) {
		science3 = Number(localStorage.getItem('science3'));
    };
	if (localStorage.getItem('science4') !== null) {
		science4 = Number(localStorage.getItem('science4'));
    };
	if (localStorage.getItem('science5') !== null) {
		science5 = Number(localStorage.getItem('science5'));
    };
	if (localStorage.getItem('products1') !== null) {
		products1 = Number(localStorage.getItem('products1'));
    };
	if (localStorage.getItem('products2') !== null) {
		products2 = Number(localStorage.getItem('products2'));
    };
	if (localStorage.getItem('products3') !== null) {
		products3 = Number(localStorage.getItem('products3'));
    };
	if (localStorage.getItem('products4') !== null) {
		products4 = Number(localStorage.getItem('products4'));
    };
	if (localStorage.getItem('products5') !== null) {
		products5 = Number(localStorage.getItem('products5'));
    };
	if (localStorage.getItem('population1') !== null) {
		population1 = Number(localStorage.getItem('population1'));
    };
	if (localStorage.getItem('population2') !== null) {
		population2 = Number(localStorage.getItem('population2'));
    };
	if (localStorage.getItem('population3') !== null) {
		population3 = Number(localStorage.getItem('population3'));
    };
	if (localStorage.getItem('population4') !== null) {
		population4 = Number(localStorage.getItem('population4'));
    };
	if (localStorage.getItem('population5') !== null) {
		population5 = Number(localStorage.getItem('population5'));
    };
	if (localStorage.getItem('trucks1') !== null) {
		trucks1 = Number(localStorage.getItem('trucks1'));
    };
	if (localStorage.getItem('trucks2') !== null) {
		trucks2 = Number(localStorage.getItem('trucks2'));
    };
	if (localStorage.getItem('trucks3') !== null) {
		trucks3 = Number(localStorage.getItem('trucks3'));
    };
	if (localStorage.getItem('trucks4') !== null) {
		trucks4 = Number(localStorage.getItem('trucks4'));
    };
	if (localStorage.getItem('trucks5') !== null) {
		trucks5 = Number(localStorage.getItem('trucks5'));
    };
	if (localStorage.getItem('robots1') !== null) {
		robots1 = Number(localStorage.getItem('robots1'));
    };
	if (localStorage.getItem('robots2') !== null) {
		robots2 = Number(localStorage.getItem('robots2'));
    };
	if (localStorage.getItem('robots3') !== null) {
		robots3 = Number(localStorage.getItem('robots3'));
    };
	if (localStorage.getItem('robots4') !== null) {
		robots4 = Number(localStorage.getItem('robots4'));
    };
	if (localStorage.getItem('robots5') !== null) {
		robots5 = Number(localStorage.getItem('robots5'));
    };
	if (localStorage.getItem('attack1') !== null) {
		attack1 = Number(localStorage.getItem('attack1'));
    };
	if (localStorage.getItem('attack2') !== null) {
		attack2 = Number(localStorage.getItem('attack2'));
    };
	if (localStorage.getItem('attack3') !== null) {
		attack3 = Number(localStorage.getItem('attack3'));
    };
	if (localStorage.getItem('attack4') !== null) {
		attack4 = Number(localStorage.getItem('attack4'));
    };
	if (localStorage.getItem('attack5') !== null) {
		attack5 = Number(localStorage.getItem('attack5'));
    };
	if (localStorage.getItem('powerStation') !== null) {
		powerStation = Number(localStorage.getItem('powerStation'));
    };
	if (localStorage.getItem('scienceCenter') !== null) {
		scienceCenter = Number(localStorage.getItem('scienceCenter'));
    };
	if (localStorage.getItem('productsFactory') !== null) {
		productsFactory = Number(localStorage.getItem('productsFactory'));
    };
	if (localStorage.getItem('humanArea') !== null) {
		humanArea = Number(localStorage.getItem('humanArea'));
    };
	if (localStorage.getItem('trucksFactory') !== null) {
		trucksFactory = Number(localStorage.getItem('trucksFactory'));
    };
	if (localStorage.getItem('militaryBase') !== null) {
		militaryBase = Number(localStorage.getItem('militaryBase'));
    };
	if (localStorage.getItem('defense') !== null) {
		defense = Number(localStorage.getItem('defense'));
    };
	if (localStorage.getItem('defUpPercentage') !== null) {
		defUpPercentage = Number(localStorage.getItem('defUpPercentage'));
    };
	if (localStorage.getItem('powerStationPowerSupply') !== null) {
		powerStationPowerSupply = Number(localStorage.getItem('powerStationPowerSupply'));
    };
	if (localStorage.getItem('scienceCenterPowerSupply') !== null) {
		scienceCenterPowerSupply = Number(localStorage.getItem('scienceCenterPowerSupply'));
    };
	if (localStorage.getItem('productsFactoryPowerSupply') !== null) {
		productsFactoryPowerSupply = Number(localStorage.getItem('productsFactoryPowerSupply'));
    };
	if (localStorage.getItem('humanAreaPowerSupply') !== null) {
		humanAreaPowerSupply = Number(localStorage.getItem('humanAreaPowerSupply'));
    };
	if (localStorage.getItem('trucksFactoryPowerSupply') !== null) {
		trucksFactoryPowerSupply = Number(localStorage.getItem('trucksFactoryPowerSupply'));
    };
	if (localStorage.getItem('militaryBasePowerSupply') !== null) {
		militaryBasePowerSupply = Number(localStorage.getItem('militaryBasePowerSupply'));
    };
	if (localStorage.getItem('defensePowerSupply') !== null) {
		defensePowerSupply = Number(localStorage.getItem('defensePowerSupply'));
    };
	if (localStorage.getItem('scienceLocation1') !== null) {
		scienceLocation1 = Number(localStorage.getItem('scienceLocation1'));
    };
	if (localStorage.getItem('scienceLocation2') !== null) {
		scienceLocation2 = Number(localStorage.getItem('scienceLocation2'));
    };
	if (localStorage.getItem('scienceLocation3') !== null) {
		scienceLocation3 = Number(localStorage.getItem('scienceLocation3'));
    };
	if (localStorage.getItem('scienceLocation4') !== null) {
		scienceLocation4 = Number(localStorage.getItem('scienceLocation4'));
    };
	if (localStorage.getItem('scienceLocation5') !== null) {
		scienceLocation5 = Number(localStorage.getItem('scienceLocation5'));
    };
	if (localStorage.getItem('scienceLocation6') !== null) {
		scienceLocation6 = Number(localStorage.getItem('scienceLocation6'));
    };
	if (localStorage.getItem('scienceLocation7') !== null) {
		scienceLocation7 = Number(localStorage.getItem('scienceLocation7'));
    };
	if (localStorage.getItem('scienceLocation8') !== null) {
		scienceLocation8 = Number(localStorage.getItem('scienceLocation8'));
    };
	if (localStorage.getItem('electricityLocation1') !== null) {
		electricityLocation1 = Number(localStorage.getItem('electricityLocation1'));
    };
	if (localStorage.getItem('electricityLocation2') !== null) {
		electricityLocation2 = Number(localStorage.getItem('electricityLocation2'));
    };
	if (localStorage.getItem('electricityLocation3') !== null) {
		electricityLocation3 = Number(localStorage.getItem('electricityLocation3'));
    };
	if (localStorage.getItem('electricityLocation4') !== null) {
		electricityLocation4 = Number(localStorage.getItem('electricityLocation4'));
    };
	if (localStorage.getItem('electricityLocation5') !== null) {
		electricityLocation5 = Number(localStorage.getItem('electricityLocation5'));
    };
	if (localStorage.getItem('electricityLocation6') !== null) {
		electricityLocation6 = Number(localStorage.getItem('electricityLocation6'));
    };
	if (localStorage.getItem('electricityLocation7') !== null) {
		electricityLocation7 = Number(localStorage.getItem('electricityLocation7'));
    };
	if (localStorage.getItem('electricityLocation8') !== null) {
		electricityLocation8 = Number(localStorage.getItem('electricityLocation8'));
    };
	if (localStorage.getItem('productsLocation1') !== null) {
		productsLocation1 = Number(localStorage.getItem('productsLocation1'));
    };
	if (localStorage.getItem('productsLocation2') !== null) {
		productsLocation2 = Number(localStorage.getItem('productsLocation2'));
    };
	if (localStorage.getItem('productsLocation3') !== null) {
		productsLocation3 = Number(localStorage.getItem('productsLocation3'));
    };
	if (localStorage.getItem('productsLocation4') !== null) {
		productsLocation4 = Number(localStorage.getItem('productsLocation4'));
    };
	if (localStorage.getItem('productsLocation5') !== null) {
		productsLocation5 = Number(localStorage.getItem('productsLocation5'));
    };
	if (localStorage.getItem('productsLocation6') !== null) {
		productsLocation6 = Number(localStorage.getItem('productsLocation6'));
    };
	if (localStorage.getItem('productsLocation7') !== null) {
		productsLocation7 = Number(localStorage.getItem('productsLocation7'));
    };
	if (localStorage.getItem('productsLocation8') !== null) {
		productsLocation8 = Number(localStorage.getItem('productsLocation8'));
    };
	if (localStorage.getItem('populationLocation1') !== null) {
		populationLocation1 = Number(localStorage.getItem('populationLocation1'));
    };
	if (localStorage.getItem('populationLocation2') !== null) {
		populationLocation2 = Number(localStorage.getItem('populationLocation2'));
    };
	if (localStorage.getItem('populationLocation3') !== null) {
		populationLocation3 = Number(localStorage.getItem('populationLocation3'));
    };
	if (localStorage.getItem('populationLocation4') !== null) {
		populationLocation4 = Number(localStorage.getItem('populationLocation4'));
    };
	if (localStorage.getItem('populationLocation5') !== null) {
		populationLocation5 = Number(localStorage.getItem('populationLocation5'));
    };
	if (localStorage.getItem('populationLocation6') !== null) {
		populationLocation6 = Number(localStorage.getItem('populationLocation6'));
    };
	if (localStorage.getItem('populationLocation7') !== null) {
		populationLocation7 = Number(localStorage.getItem('populationLocation7'));
    };
	if (localStorage.getItem('populationLocation8') !== null) {
		populationLocation8 = Number(localStorage.getItem('populationLocation8'));
    };
	if (localStorage.getItem('populationLocation9') !== null) {
		populationLocation9 = Number(localStorage.getItem('populationLocation9'));
    };
	if (localStorage.getItem('populationLocation10') !== null) {
		populationLocation10 = Number(localStorage.getItem('populationLocation10'));
    };
	if (localStorage.getItem('scienceLocationProfit') !== null) {
		scienceLocationProfit = Number(localStorage.getItem('scienceLocationProfit'));
    };
	if (localStorage.getItem('electricityLocationProfit') !== null) {
		electricityLocationProfit = Number(localStorage.getItem('electricityLocationProfit'));
    };
    if (localStorage.getItem('productsLocationProfit') !== null) {
		productsLocationProfit = Number(localStorage.getItem('productsLocationProfit'));
    };
	if (localStorage.getItem('populationLocationProfit') !== null) {
		populationLocationProfit = Number(localStorage.getItem('populationLocationProfit'));
    };
	if (localStorage.getItem('troubleMove') !== null) {
		troubleMove = Number(localStorage.getItem('troubleMove'));
    };
    if (localStorage.getItem('troublePower') !== null) {
		troublePower = Number(localStorage.getItem('troublePower'));
    };
    centralBuilding_workersMax = Math.floor(header_population);
	centralBuilding_workers = Math.floor(header_population);
    buildingsOpen();
    technologiesOpen();
    techReady();
    locationsOpen();
    bunkerOpen();
    centralBuildingResources();
    buildingResources();
    headerGrowth();
    document.querySelector('#move span').textContent = move;
};
load();