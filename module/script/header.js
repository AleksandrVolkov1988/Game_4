"use strict";
document.querySelector('#header_electricity_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#ffc';
    document.querySelector('#header_info1').textContent = "Электроэнергия добывается в Центральном здании, а так же на Электростанции в 10 раз эффективней. Необходима для поддержания работоспособности зданий. Если уровень енергии упадет до нуля, все здания(кроме колоний) перестануть приносить прибыль.";
    document.querySelector('#header_info2').textContent = "";
});
document.querySelector('#header_science_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#fcf';
    document.querySelector('#header_info1').textContent = "Наука добывается в Центральном здании, а так же в Научном центре в 10 раз эффективней. Необходима для изучения технологий.";
    document.querySelector('#header_info2').textContent = "";
});
document.querySelector('#header_products_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#fb9';
    document.querySelector('#header_info1').textContent = "Продукция добывается в Центральном здании, а так же в Производственном цеху в 10 раз эффективней. Необходима для постройки зданий.";
    document.querySelector('#header_info2').textContent = "";
});
document.querySelector('#header_population_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#cfc';
    document.querySelector('#header_info1').textContent = "Население появляется когда в Жилом районе работают рабочие. Необходимо для работы в зданиях. Если уровень населения упадет до нуля - игра будет окончена. Учитывайте уровень смертности. Смертность растет каждый ход из-за ухудшения экологии.";
    document.querySelector('#header_info2').textContent = `Смертность:  ${mortality} человек в ход`;
});
document.querySelector('#header_trucks_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#cff';
    document.querySelector('#header_info1').textContent = "Колонисты создаются в Транспортном узле. необходимы для создания колоний. Для того что бы колонисты сами могли захватывать локации, без помощи боевых роботов требуется специальная технология.";
    document.querySelector('#header_info2').textContent = "";
});
document.querySelector('#header_robots_div').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
    document.querySelector('#header_info').style.background = '#faa';
    document.querySelector('#header_info1').textContent = "Боевые роботы создается на Военной базе. Необходимы для обороны от захватчиков, а так же для преодоления обороны локаций. Для того что бы боевые роботы смогли вывозить ресурсы с разрушенных локаций необходима специальная технология.";
    document.querySelector('#header_info2').textContent = "";
});

document.querySelector('#header_info').addEventListener('click', (event) => {
    document.querySelector('#header_info').classList.toggle('none');
});
// ================================
headerGrowth();
function headerGrowth() {
    header_electricity_Growth = Number((centralBuilding_electricity + powerStation_electricity + (electricityLocationProfit * trucks5)
                                     - (powerStationPowerSupply
                                      + scienceCenterPowerSupply
                                      + productsFactoryPowerSupply
                                      + humanAreaPowerSupply
                                      + trucksFactoryPowerSupply
                                      + militaryBasePowerSupply
                                      + defensePowerSupply) * electricity5).toFixed(1));
    header_science_Growth = Number((centralBuilding_science + scienceCenter_science + (scienceLocationProfit * trucks5)).toFixed(1));
    header_products_Growth = Number((centralBuilding_products + productsFactory_products + (productsLocationProfit * trucks5)).toFixed(1));
    header_population_Growth = Number((humanArea_population - mortality + (populationLocationProfit * trucks5)).toFixed(1));
    header_trucks_Growth = Number((trucksFactory_trucks).toFixed(1));
    header_robots_Growth = Number((militaryBase_robots).toFixed(1));

    if (header_electricity_Growth > 0) {
        document.querySelector('#header_electricity_Growth').textContent = `+ ${header_electricity_Growth}`;
        document.querySelector('#header_electricity_Growth').style.color = '#000';
    } else {
        document.querySelector('#header_electricity_Growth').textContent = header_electricity_Growth;
        document.querySelector('#header_electricity_Growth').style.color = '#f00';
    };
    document.querySelector('#header_science_Growth').textContent = header_science_Growth;
    document.querySelector('#header_products_Growth').textContent = header_products_Growth;
    if (header_population_Growth > 0) {
        document.querySelector('#header_population_Growth').textContent = `+ ${header_population_Growth}`;
        document.querySelector('#header_population_Growth').style.color = '#000';
    } else {
        document.querySelector('#header_population_Growth').textContent = header_population_Growth;
        document.querySelector('#header_population_Growth').style.color = '#f00';
    };
    document.querySelector('#header_trucks_Growth').textContent = header_trucks_Growth;
    document.querySelector('#header_robots_Growth').textContent = header_robots_Growth;

    document.querySelector('#header_electricity').textContent = header_electricity;
    document.querySelector('#header_science').textContent = header_science;
    document.querySelector('#header_products').textContent = header_products;
    document.querySelector('#header_population').textContent = header_population;
    document.querySelector('#header_trucks').textContent = header_trucks;
    document.querySelector('#header_robots').textContent = header_robots;
};
