document.querySelector('.bunker').innerHTML = `
			<div>Центральное здание<br>
				Рабочие: <span id="centralBuilding_workers">0</span> <span>&#8260;</span> <span id="centralBuilding_workersMax">0</span><br><br>
				Электроэнергия: <span id="centralBuilding_electricity">0</span><div class="centralBuildingImg"><img src="img/electricity.png" height="100%"></div><br>
			  	Наука: <span id="centralBuilding_science">0</span><div class="centralBuildingImg"><img src="img/science.png" height="100%"></div><br>
			  	Продукция: <span id="centralBuilding_products">0</span><div class="centralBuildingImg"><img src="img/products.png" height="100%"></div><br>
			  	<div id="centralBuilding_info">
			  		<div id="move">ХОД: <span>1</span></div>
			  		<div id="troubles" class="none">УГРОЗА АТАКИ<br><span>Осталось 0 ходов</span></div>
			  	</div>
			</div>
<!-- ====================================================== -->
			<div class="none"><span class="name">Фортификационные сооружения</span><br><br>
				<div id="defense"> Защита увеличена на: <span>10</span> %</div>
				<div id="defenseUp"><span>«</span>Можно улучшить<span>«</span></div>
			</div>
<!-- ====================================================== -->
			<div class="none"><span class="name">Электростанция</span><br>
				Рабочие: <span id="powerStation_workers">0</span> <span>&#8260;</span> <span id="powerStation_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="powerStation_slider"><br>
		  		Электроэнергия: <span id="powerStation_electricity">0</span> 
		  		<div class="bunkerImg"><img src="img/electricity.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div class="none"><span class="name">Научный центр</span><br>
				Рабочие: <span id="scienceCenter_workers">0</span> <span>&#8260;</span> <span id="scienceCenter_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="scienceCenter_slider"><br>
				Наука: <span id="scienceCenter_science">0</span>
				<div class="bunkerImg"><img src="img/science.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div class="none"><span class="name">Производственный цех</span><br>
				Рабочие: <span id="productsFactory_workers">0</span> <span>&#8260;</span> <span id="productsFactory_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="productsFactory_slider"><br>
				Продукция: <span id="productsFactory_products">0</span>
				<div class="bunkerImg"><img src="img/products.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div><span class="name">Жилой район</span><br>
				Рабочие: <span id="humanArea_workers">0</span> <span>&#8260;</span> <span id="humanArea_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="humanArea_slider"><br>
				Население: <span id="humanArea_population">0</span>
				<div class="bunkerImg"><img src="img/population.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div  class="none"><span class="name">Транспортный узел</span><br>
				Рабочие: <span id="trucksFactory_workers">0</span> <span>&#8260;</span> <span id="trucksFactory_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="trucksFactory_slider"><br>
				Грузовая техника: <span id="trucksFactory_trucks">0</span>
		  		<div class="bunkerImg"><img src="img/trucks.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div  class="none"><span class="name">Военная база</span><br>
				Рабочие: <span id="militaryBase_workers">0</span> <span>&#8260;</span> <span id="militaryBase_workersMax">10</span><br>
				<input type="range" min="0" max="10" value="0" class="slider" id="militaryBase_slider"><br>
				Боевые роботы: <span id="militaryBase_robots">0</span>
		  		<div class="bunkerImg"><img src="img/robots.png" height="100%"></div>
			</div>
<!-- ====================================================== -->
			<div id="troubles_info" class="none">
				<span>Разведка доложила что в нашем направлении движется группа местных мородеров. Не стоит их недооценивать. Технологию боевых роботов мы перейняли у них. Если их штурм окажется успешным, мы понесем значительный ущерб.</span><br>
				<span>У нас есть <span id="troubles_info1">0</span> ходов что бы подготовить оборону.</span><br>
				<span>Мощь их армии: <span id="troubles_info2">0</span></span><br>
				<span>Наша мощь: <span id="troubles_info3">0</span></span><br>
				<span>Предворительная оценка: <span id="troubles_info4">Мы победим!</span></span><br>
				<span>В случае победы чем больше у нас будет боевых роботов, тем меньше будут потери. Мы еще успеем усилить нашу оборону.</span>
			</div>
<!-- ====================================================== -->
			<div id="troubles_final" class="none">
				<span id="troubles_final1">Мы победили!</span><br>
				<span>Наши потери составили: <span id="troubles_final2">0</span> боевых роботов.</span><span id="troubles_final22"></span><br>
				<span id="troubles_final3"></span><br><br>
				<span>Это не единственная враждебная группа. Мы постоянно будем подвергаться подобным атакам. Нужно быть начеку!</span><br><br>
				<div id="troubles_final_button">OK</div>
			</div>
`