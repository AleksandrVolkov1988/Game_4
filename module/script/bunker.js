"use strict";
function bunkerOpen() {
    document.querySelector('.bunker').classList.remove("none");
    document.querySelector('.technologies').classList.add("none");
    document.querySelector('.buildings').classList.add("none");
    document.querySelector('.locations').classList.add("none");
    document.querySelector('.menu').classList.add("none");

    document.querySelector('#bunker').classList.add("footer1");
    document.querySelector('#technologies').classList.remove("footer2");
    document.querySelector('#buildings').classList.remove("footer3");
    document.querySelector('#locations').classList.remove("footer4");
    document.querySelector('#endMove').classList.remove("footer5");
    document.querySelector('#menu').classList.remove("footer6");
    defenseUpgradeReady();
};
// ==================================
document.querySelector('#powerStation_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - this.value 
                                                            - scienceCenter_workers
                                                            - productsFactory_workers
                                                            - humanArea_workers
                                                            - trucksFactory_workers
                                                            - militaryBase_workers;
    if (centralBuilding_workers >= 0) {
        powerStation_workers = this.value;
        powerStation_slider = this.value;
    } else {
        this.value = powerStation_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
document.querySelector('#scienceCenter_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - powerStation_workers
                                                            - this.value
                                                            - productsFactory_workers
                                                            - humanArea_workers
                                                            - trucksFactory_workers
                                                            - militaryBase_workers;
    if (centralBuilding_workers >= 0) {
        scienceCenter_workers = this.value;
        scienceCenter_slider = this.value;
    } else {
        this.value = scienceCenter_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
document.querySelector('#productsFactory_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - powerStation_workers
                                                            - scienceCenter_workers
                                                            - this.value
                                                            - humanArea_workers
                                                            - trucksFactory_workers
                                                            - militaryBase_workers;
    if (centralBuilding_workers >= 0) {
        productsFactory_workers = this.value;
        productsFactory_slider = this.value;
    } else {
        this.value = productsFactory_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
document.querySelector('#humanArea_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - powerStation_workers
                                                            - scienceCenter_workers
                                                            - productsFactory_workers
                                                            - this.value
                                                            - trucksFactory_workers
                                                            - militaryBase_workers;
    if (centralBuilding_workers >= 0) {
        humanArea_workers = this.value;
        humanArea_slider = this.value;
    } else {
        this.value = humanArea_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
document.querySelector('#trucksFactory_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - powerStation_workers
                                                            - scienceCenter_workers
                                                            - productsFactory_workers
                                                            - humanArea_workers
                                                            - this.value
                                                            - militaryBase_workers;
    if (centralBuilding_workers >= 0) {
        trucksFactory_workers = this.value;
        trucksFactory_slider = this.value;
    } else {
        this.value = trucksFactory_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
document.querySelector('#militaryBase_slider').oninput = function() {
    centralBuilding_workers = centralBuilding_workersMax    - powerStation_workers
                                                            - scienceCenter_workers
                                                            - productsFactory_workers
                                                            - humanArea_workers
                                                            - trucksFactory_workers
                                                            - this.value;
    if (centralBuilding_workers >= 0) {
        militaryBase_workers = this.value;
        militaryBase_slider = this.value;
    } else {
        this.value = militaryBase_slider;
        centralBuilding_workers = 0;
    };
    fillColor(this);
    centralBuildingResources();
    buildingResources();
    headerGrowth();
};
// ==================================
let percent;
function fillColor(slider) {
    percent = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #4a5 ${percent}%, #aaa ${percent}% 100%)`;
};
// ==================================
centralBuildingResources();
function centralBuildingResources() {
    centralBuilding_electricity = Number((centralBuilding_workers * 0.1 * electricity4).toFixed(1));
    centralBuilding_science = Number((centralBuilding_workers * 0.1 * science4).toFixed(1));
    centralBuilding_products = Number((centralBuilding_workers * 0.1 * electricity4).toFixed(1));

    document.querySelector('#centralBuilding_workersMax').textContent = centralBuilding_workersMax;
    document.querySelector('#centralBuilding_workers').textContent = centralBuilding_workers;

    document.querySelector('#centralBuilding_electricity').textContent = `+ ${centralBuilding_electricity}`;
    document.querySelector('#centralBuilding_science').textContent = `+ ${centralBuilding_science}`;
    document.querySelector('#centralBuilding_products').textContent = `+ ${centralBuilding_products}`;
};
buildingResources();
function buildingResources() {
    powerStation_electricity = Number((powerStation_workers * 1 * electricity1 * electricity3).toFixed(1));   
    scienceCenter_science = Number((scienceCenter_workers * 1 * science1 * science3).toFixed(1)); 
    productsFactory_products = Number((productsFactory_workers * 1 * products1 * products3).toFixed(1));    
    humanArea_population = Number((humanArea_workers * 0.1 * population1 * population3).toFixed(1));    
    trucksFactory_trucks = Number((trucksFactory_workers * 0.1 * trucks1 * trucks3).toFixed(1));    
    militaryBase_robots = Number((militaryBase_workers * 0.1 * robots1 * robots3).toFixed(1));  

    document.querySelector('#powerStation_workers').textContent = powerStation_workers;
    document.querySelector('#scienceCenter_workers').textContent = scienceCenter_workers;
    document.querySelector('#productsFactory_workers').textContent = productsFactory_workers;
    document.querySelector('#humanArea_workers').textContent = humanArea_workers;
    document.querySelector('#trucksFactory_workers').textContent = trucksFactory_workers;
    document.querySelector('#militaryBase_workers').textContent = militaryBase_workers;

    document.querySelector('#powerStation_electricity').textContent = `+ ${powerStation_electricity}`;
    document.querySelector('#scienceCenter_science').textContent = `+ ${scienceCenter_science}`;
    document.querySelector('#productsFactory_products').textContent = `+ ${productsFactory_products}`;
    document.querySelector('#humanArea_population').textContent = `+ ${humanArea_population}`;
    document.querySelector('#trucksFactory_trucks').textContent = `+ ${trucksFactory_trucks}`;
    document.querySelector('#militaryBase_robots').textContent = `+ ${militaryBase_robots}`;

    if (header_electricity <= 0) {
        scienceCenter_science = 0;
        productsFactory_products = 0;
        humanArea_population = 0;
        trucksFactory_trucks = 0;
        militaryBase_robots = 0;
    };
};
// ==================================
document.querySelector('#troubles').addEventListener('click', (event) => {
    document.querySelector('#troubles_info').classList.toggle('none');
    troublePreliminaryResult();
});
document.querySelector('#troubles_info').addEventListener('click', (event) => {
    document.querySelector('#troubles_info').classList.toggle('none');
});