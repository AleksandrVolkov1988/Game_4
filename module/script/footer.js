"use strict";
document.querySelector('#bunker').addEventListener('click', bunkerOpen);
// =================================
document.querySelector('#technologies').addEventListener('click', technologiesOpen);
// =================================
document.querySelector('#buildings').addEventListener('click', buildingsOpen);
// =================================
document.querySelector('#locations').addEventListener('click', locationsOpen);
// =================================
document.querySelector('#endMove').addEventListener('click', () => {
	header_electricity = Number((header_electricity + header_electricity_Growth).toFixed(3));
	if (header_electricity < 0) {
        header_electricity = 0;
    };	
	header_science = Number((header_science + header_science_Growth).toFixed(3));
	header_products = Number((header_products + header_products_Growth).toFixed(3));
	header_population = Number((header_population + header_population_Growth).toFixed(3));
	header_trucks = Number((header_trucks + header_trucks_Growth).toFixed(3));
	header_robots = Number((header_robots + header_robots_Growth).toFixed(3));
    
    centralBuilding_workersMax = Math.floor(header_population);
	centralBuilding_workers = centralBuilding_workersMax 	- powerStation_workers
															- scienceCenter_workers
															- productsFactory_workers
															- humanArea_workers
															- trucksFactory_workers
															- militaryBase_workers;
	move += 1;
	mortality = Number(((move / 200) * (move / 4) * (move / 4) * population4).toFixed(1));
	document.querySelector('#move span').textContent = move;
	if (header_population < 0) {
		header_population = 0;
		GameOver();
	};
	if (centralBuilding_workers < 0) {
		centralBuilding_workersMin = Number((0 - centralBuilding_workers).toFixed(1));
		humanArea_workers = Number((humanArea_workers - centralBuilding_workersMin).toFixed(1));
        humanArea_slider = Number((humanArea_slider - centralBuilding_workersMin).toFixed(1));
        document.querySelector('.bunker > div:nth-of-type(6) input').value = humanArea_slider;
        centralBuilding_workers = 0;
	};
	buildingResources();
	centralBuildingResources();
	headerGrowth();
	bunkerOpen();
	troubleLevel();
	techReady();
	defenseUpgradeReady();
	save();
	console.log(troublePower);
});
// =================================
document.querySelector('#menu').addEventListener('click', menuOpen);
// =================================
function GameOver() {
	localStorage.clear();
	document.querySelector('body').innerHTML = `GAME OVER`;
	document.querySelector('body').style.color = '#fff';
	document.querySelector('body').style.fontSize = '150px';
	document.querySelector('body').style.marginTop = '100px';
	document.querySelector('body').style.textAlign = 'center';
	setTimeout(function() {location.reload()},3000);
};