"use strict";
function troubleLevel() {
	troubleMove -= 1;
	if (troubleMove > 5) {
		document.querySelector('#troubles').classList.add('none');
	};
	if (troubleMove == 5) {
		document.querySelector('#troubles').classList.remove('none');
		document.querySelector('#troubles').style.color = '#0ff';
		document.querySelector('#troubles span').textContent = `Осталось ${troubleMove} ходов`;
	};
	if (troubleMove == 4) {
		document.querySelector('#troubles').classList.remove('none');
		document.querySelector('#troubles').style.color = '#0f0';
		document.querySelector('#troubles span').textContent = `Осталось ${troubleMove} хода`;
	};
	if (troubleMove == 3) {
		document.querySelector('#troubles').classList.remove('none');
		document.querySelector('#troubles').style.color = '#ff0';
		document.querySelector('#troubles span').textContent = `Осталось ${troubleMove} хода`;
	};
	if (troubleMove == 2) {
		document.querySelector('#troubles').classList.remove('none');
		document.querySelector('#troubles').style.color = '#f90';
		document.querySelector('#troubles span').textContent = `Осталось ${troubleMove} хода`;
	};
	if (troubleMove == 1) {
		document.querySelector('#troubles').classList.remove('none');
		document.querySelector('#troubles').style.color = '#f00';
		document.querySelector('#troubles span').textContent = `Остался ${troubleMove} ход`;
	};
	if (troubleMove < 1) {
		document.querySelector('#troubles').classList.add('none');
		document.querySelector('#troubles_final').classList.remove('none');
		ourPower = Number((header_robots * robots5 * defense).toFixed(1)); 
		if (troublePower > ourPower) {
			document.querySelector('#troubles_final1').textContent = "Мы проиграли!";
			document.querySelector('#troubles_final2').textContent = "Потеряли всех";
			document.querySelector('#troubles_final22').textContent = "Так же они украли всю нашу науку и продукцию.";
			header_science = 0;
			header_products = 0;
			header_robots = 0;
			if (population5 == 1) {
				document.querySelector('#troubles_final3').textContent = `${move} населения погибло`;
				header_population = Number((header_population - move).toFixed(2)); 
			};
			buildingResources();
			centralBuildingResources();
			headerGrowth();
			bunkerOpen();
		} else {
			document.querySelector('#troubles_final1').textContent = "Мы победили!";
			lossPercentage = Number((((100 / (ourPower / troublePower))/ 100) * troublePower).toFixed(0)); 
			header_robots = Number((header_robots - lossPercentage).toFixed(2));
			if (header_robots < 0) {header_robots = 0}
			document.querySelector('#troubles_final2').textContent = lossPercentage;
			buildingResources();
			centralBuildingResources();
			headerGrowth();
			bunkerOpen();
		};
		troubleMove = 10;
		troublePower = Number(((move / 200) * (move / 2) * (move / 2) * (move / 50) + 5).toFixed(0));
	};
};
// ==============================================
document.querySelector('#troubles_final_button').addEventListener('click', (event) => {
    document.querySelector('#troubles_final').classList.add('none');
});
// ==============================================
function troublePreliminaryResult() {
	document.querySelector('#troubles_info1').textContent = troubleMove;
	document.querySelector('#troubles_info2').textContent = troublePower;
	ourPower = Number((header_robots * robots5 * defense).toFixed(1)); 
	document.querySelector('#troubles_info3').textContent = ourPower;
	if (troublePower > ourPower) {
		document.querySelector('#troubles_info4').textContent = "Мы проиграем!";
		document.querySelector('#troubles_info4').style.color = '#f00';
	} else {
		document.querySelector('#troubles_info4').textContent = "Мы победим!";
		document.querySelector('#troubles_info4').style.color = '#0f0';
	};	
};
