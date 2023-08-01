"use strict";
let header_electricity = 1;
let header_science = 0;
let header_products = 0;
let header_population = 100;
let header_trucks = 0;
let header_robots = 0;

let move = 1;

let techPrice = 1;

let mortality = 0;

let electricity1 = 1;
let electricity2 = 1;
let electricity3 = 1;
let electricity4 = 1;
let electricity5 = 1;
let science1 = 1;
let science2 = 1;
let science3 = 1;
let science4 = 1;
let science5 = 1;
let products1 = 1;
let products2 = 1;
let products3 = 1;
let products4 = 1;
let products5 = 1;
let population1 = 1;
let population2 = 1;
let population3 = 1;
let population4 = 1;
let population5 = 1;
let trucks1 = 1;
let trucks2 = 1;
let trucks3 = 1;
let trucks4 = 1;
let trucks5 = 1;
let robots1 = 1;
let robots2 = 1;
let robots3 = 1;
let robots4 = 1;
let robots5 = 1;
let attack1 = 1;
let attack2 = 1;
let attack3 = 1;
let attack4 = 1;
let attack5 = 1;

let powerStation = 0;
let scienceCenter = 0;
let productsFactory = 0;
let humanArea = 1;
let trucksFactory = 0;
let militaryBase = 0;
let defense = 1;
let defUpPercentage = 100;

let powerStationPowerSupply = 0;
let scienceCenterPowerSupply = 0;
let productsFactoryPowerSupply = 0;
let humanAreaPowerSupply = 0;
let trucksFactoryPowerSupply = 0;
let militaryBasePowerSupply = 0;
let defensePowerSupply = 0;

let scienceLocation1 = 1;
let scienceLocation2 = 0;
let scienceLocation3 = 0;
let scienceLocation4 = 0;
let scienceLocation5 = 0;
let scienceLocation6 = 0;
let scienceLocation7 = 0;
let scienceLocation8 = 0;
let electricityLocation1 = 1;
let electricityLocation2 = 0;
let electricityLocation3 = 0;
let electricityLocation4 = 0;
let electricityLocation5 = 0;
let electricityLocation6 = 0;
let electricityLocation7 = 0;
let electricityLocation8 = 0;
let productsLocation1 = 1;
let productsLocation2 = 0;
let productsLocation3 = 0;
let productsLocation4 = 0;
let productsLocation5 = 0;
let productsLocation6 = 0;
let productsLocation7 = 0;
let productsLocation8 = 0;
let populationLocation1 = 1;
let populationLocation2 = 0;
let populationLocation3 = 0;
let populationLocation4 = 0;
let populationLocation5 = 0;
let populationLocation6 = 0;
let populationLocation7 = 0;
let populationLocation8 = 0;
let populationLocation9 = 0;
let populationLocation10 = 0;

let scienceLocationProfit = 0;
let electricityLocationProfit = 0;
let productsLocationProfit = 0;
let populationLocationProfit = 0;
// ================================
let header_electricity_Growth;
let header_science_Growth;
let header_products_Growth;
let header_population_Growth;
let header_trucks_Growth;
let header_robots_Growth;
// ================================
let centralBuilding_electricity = 10;
let centralBuilding_science = 10;
let centralBuilding_products = 10;
let centralBuilding_workersMax = Math.floor(header_population);
let centralBuilding_workers = Math.floor(header_population);
let centralBuilding_workersMin;

let powerStation_slider = 0;
let powerStation_workers = 0;
let powerStation_electricity = 0;

let scienceCenter_slider = 0;
let scienceCenter_workers = 0;
let scienceCenter_science = 0;

let productsFactory_slider = 0;
let productsFactory_workers = 0;
let productsFactory_products = 0;

let humanArea_slider = 0;
let humanArea_workers = 0;
let humanArea_population = 0;

let trucksFactory_slider = 0;
let trucksFactory_workers = 0;
let trucksFactory_trucks = 0;

let militaryBase_slider = 0;
let militaryBase_workers = 0;
let militaryBase_robots = 0;
// ================================
let troubleMove = 9;
let troublePower = 5;
let ourPower = 0;
let ourAttackPower = 0;
let lossPercentage;
let lossPercentageAttack;
// ================================