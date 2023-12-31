document.querySelector('.buildings').innerHTML = `
			<div id="powerStation1" class="column1 row1" 
				 data-phase="1" 
				 data-price="10"
				 data-inform0="Постройка недоступна. Сначала нужно построить Электростанцию"
				 data-inform1="Строит электростанцию, на которой cмогут работать 10 рабочих и производить электроэнергию. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь на электростанции могут работать до 10 рабочих"
				 data-name="Электростанция">
				 <img src="img/electricity.png" width="100%">
				 <br>✯
			</div>
			<div id="powerStation2" class="column1 row2" 
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Электростанцию"
				 data-inform1="Постройте что бы на электростанции смогли работать до 100 рабочих. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь на электростанции могут работать до 100 рабочих. Потребление: 20 электроэнергии"
				 data-name="Улучшенная Электростанция">
				 <img src="img/electricity.png" width="100%">
				 <br>✯✯
			</div>
			<div id="powerStation3" class="column1 row3" 
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Улучшенную Электростанцию"
				 data-inform1="Постройте что бы на электростанции смогли работать до 500 рабочих. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь на электростанции могут работать до 500 рабочих. Потребление: 100 электроэнергии"
				 data-name="Мощная Электростанция">
				 <img src="img/electricity.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="powerStation4" class="column1 row4" 
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Мощную Электростанцию"
				 data-inform1="Постройте что бы на электростанции смогли работать до 2 000 рабочих. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь на электростанции могут работать до 2 000 рабочих. Потребление: 500 электроэнергии"
				 data-name="Сверхмощная Электростанция">
				 <img src="img/electricity.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="powerStation5" class="column1 row5" 
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхмощную Электростанцию"
				 data-inform1="Постройте что бы на электростанции смогли работать до 5 000 рабочих. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь на электростанции могут работать до 5 000 рабочих. Потребление: 2500 электроэнергии"
				 data-name="Атомная Электростанция">
				 <img src="img/electricity.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="scienceCenter1" class="column2 row1" 
				 data-phase="1" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Научный центр"
				 data-inform1="Строит Научный центр, на котором cмогут работать 10 ученых и изучать науку. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь в Научном центре могут работать до 10 ученых"
				 data-name="Научный центр">
				 <img src="img/science.png" width="100%">
				 <br>✯
			</div>
			<div id="scienceCenter2" class="column2 row2"
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Научный центр"
				 data-inform1="Постройте что бы в Научном центре смогли работать до 100 ученых. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь в Научном центре могут работать до 100 ученых. Потребление: 20 электроэнергии"
				 data-name="Улучшенный Научный центр">
				 <img src="img/science.png" width="100%">
				 <br>✯✯
			</div>
			<div id="scienceCenter3" class="column2 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Улучшенный Научный центр"
				 data-inform1="Постройте что бы в Научном центре смогли работать до 500 ученых. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь в Научном центре могут работать до 500 ученых. Потребление: 100 электроэнергии"
				 data-name="Прогресивный Научный центр">
				 <img src="img/science.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="scienceCenter4" class="column2 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Прогресивный Научный центр"
				 data-inform1="Постройте что бы в Научном центре смогли работать до 2 000 ученых. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Научном центре могут работать до 2 000 ученых. Потребление: 500 электроэнергии"
				 data-name="Сверхпрогресивный Научный центр">
				 <img src="img/science.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="scienceCenter5" class="column2 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхпрогресивный Научный центр"
				 data-inform1="Постройте что бы в Научном центре смогли работать до 5 000 ученых. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Научном центре могут работать до 5 000 ученых. Потребление: 2500 электроэнергии"
				 data-name="Научный центр будущего">
				 <img src="img/science.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="productsFactory1" class="column3 row1"
				 data-phase="1" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Производственный цех"
				 data-inform1="Строит производственный цех, на котором смогут работать 10 рабочих и производить продукцию. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь в Производственном цеху могут работать до 10 рабочих"
				 data-name="Производственный цех">
				 <img src="img/products.png" width="100%">
				 <br>✯
			</div>
			<div id="productsFactory2" class="column3 row2"
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Производственный цех"
				 data-inform1="Постройте что бы в Производственном цеху смогли работать до 100 рабочих. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь в Производственном цеху могут работать до 100 рабочих. Потребление: 20 электроэнергии"
				 data-name="Улучшенный Производственный цех">
				 <img src="img/products.png" width="100%">
				 <br>✯✯
			</div>
			<div id="productsFactory3" class="column3 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Улучшенный Производственный цех"
				 data-inform1="Постройте что бы в Производственном цеху смогли работать до 500 рабочих. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь в Производственном цеху могут работать до 500 рабочих. Потребление: 100 электроэнергии"
				 data-name="Прибыльный Производственный цех">
				 <img src="img/products.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="productsFactory4" class="column3 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Прибыльный Производственный цех"
				 data-inform1="Постройте что бы в Производственном цеху смогли работать до 2 000 рабочих. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Производственном цеху могут работать до 2 000 рабочих. Потребление: 500 электроэнергии"
				 data-name="Сверхприбыльный Производственный цех">
				 <img src="img/products.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="productsFactory5" class="column3 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхприбыльный Производственный цех"
				 data-inform1="Постройте что бы в Производственном цеху смогли работать до 5 000 рабочих. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Производственном цеху могут работать до 5 000 рабочих. Потребление: 2500 электроэнергии"
				 data-name="Высокотехнологичный Производственный цех ">
				 <img src="img/products.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="humanArea1" class="column4 row1 yellow"
				 data-phase="2" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Жилой район"
				 data-inform1="Строит Жилой район, в котором могут работать 10 рабочих и производить пищу, что бы прокормить больше населения. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь в Жилом районе могут работать до 10 рабочих"
				 data-name="Жилой район">
				 <img src="img/population.png" width="100%">
				 <br>✯
			</div>
			<div id="humanArea2" class="column4 row2"
				 data-phase="1" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Жилой район"
				 data-inform1="Постройте что бы в Жилом районе смогли работать до 100 рабочих. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь в Жилом районе могут работать до 100 рабочих. Потребление: 20 электроэнергии"
				 data-name="Средний Жилой район">
				 <img src="img/population.png" width="100%">
				 <br>✯✯
			</div>
			<div id="humanArea3" class="column4 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Средний Жилой район"
				 data-inform1="Постройте что бы в Жилом районе смогли работать до 500 рабочих. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь в Жилом районе могут работать до 500 рабочих. Потребление: 100 электроэнергии"
				 data-name="Крупный Жилой район">
				 <img src="img/population.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="humanArea4" class="column4 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Крупный Жилой район"
				 data-inform1="Постройте что бы в Жилом районе смогли работать до 2 000 рабочих. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Жилом районе могут работать до 2 000 рабочих. Потребление: 500 электроэнергии"
				 data-name=" Сверхкрупный Жилой район">
				 <img src="img/population.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="humanArea5" class="column4 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхкрупный Жилой район"
				 data-inform1="Постройте что бы в Жилом районе смогли работать до 5 000 рабочих. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Жилом районе могут работать до 5 000 рабочих. Потребление: 2500 электроэнергии"
				 data-name="Огромный Жилой район">
				 <img src="img/population.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="trucksFactory1" class="column5 row1"
				 data-phase="1" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Транспортный узел"
				 data-inform1="Строит Транспортный узел, где 10 человек смогут создавать грузовую технику. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь в Транспортном узле могут работать до 10 рабочих"
				 data-name="Транспортный узел">
				 <img src="img/trucks.png" width="100%">
				 <br>✯
			</div>
			<div id="trucksFactory2" class="column5 row2"
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Транспортный узел"
				 data-inform1="Постройте что бы в Транспортном узле смогли работать до 100 рабочих. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь в Транспортном узле могут работать до 100 рабочих. Потребление: 20 электроэнергии"
				 data-name="Средний Транспортный узел">
				 <img src="img/trucks.png" width="100%">
				 <br>✯✯
			</div>
			<div id="trucksFactory3" class="column5 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Средний Транспортный узел"
				 data-inform1="Постройте что бы в Транспортном узле смогли работать до 500 рабочих. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь в Транспортном узле могут работать до 500 рабочих. Потребление: 100 электроэнергии"
				 data-name="Крупный Транспортный узел">
				 <img src="img/trucks.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="trucksFactory4" class="column5 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Крупный Транспортный узел"
				 data-inform1="Постройте что бы в Транспортном узле смогли работать до 2 000 рабочих. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Транспортном узле могут работать до 2 000 рабочих. Потребление: 500 электроэнергии"
				 data-name="Сверхкрупный Транспортный узел">
				 <img src="img/trucks.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="trucksFactory5" class="column5 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхкрупный Транспортный узел"
				 data-inform1="Постройте что бы в Транспортном узле смогли работать до 5 000 рабочих. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь в Транспортном узле могут работать до 5 000 рабочих. Потребление: 2500 электроэнергии"
				 data-name="Огромный Транспортный узел">
				 <img src="img/trucks.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="militaryBase1" class="column6 row1"
				 data-phase="1" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Военную базу"
				 data-inform1="Строит Военную базу, где 10 человек смогут создавать боевых роботов. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь на Военной базе могут работать до 10 рабочих"
				 data-name="Военная база">
				 <img src="img/robots.png" width="100%">
				 <br>✯
			</div>
			<div id="militaryBase2" class="column6 row2"
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Военную базу"
				 data-inform1="Постройте что бы на Военной базе смогли работать до 100 рабочих. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь на Военной базе могут работать до 100 рабочих. Потребление: 20 электроэнергии"
				 data-name="Продвинутая Военная база">
				 <img src="img/robots.png" width="100%">
				 <br>✯✯
			</div>
			<div id="militaryBase3" class="column6 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Продвинутаю Военную базу"
				 data-inform1="Постройте что бы на Военной базе смогли работать до 500 рабочих. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь на Военной базе могут работать до 500 рабочих. Потребление: 100 электроэнергии"
				 data-name="Современная Военная база">
				 <img src="img/robots.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="militaryBase4" class="column6 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Современную Военную базу"
				 data-inform1="Постройте что бы на Военной базе смогли работать до 2 000 рабочих. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь на Военной базе могут работать до 2 000 рабочих. Потребление: 500 электроэнергии"
				 data-name="Сверхсовременная Военная база">
				 <img src="img/robots.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="militaryBase5" class="column6 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхсовременную Военную базу"
				 data-inform1="Постройте что бы на Военной базе смогли работать до 5 000 рабочих. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь на Военной базе могут работать до 5 000 рабочих. Потребление: 2500 электроэнергии"
				 data-name="Военная база будущего">
				 <img src="img/robots.png" width="100%">
				 <br>✯✯✯✯✯
			</div>

			<div id="defense1" class="column7 row1"
				 data-phase="1" 
				 data-price="10" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Фортификационные сооружения"
				 data-inform1="Строит Фортификационные сооружения, увеливающие продуктивность боевых роботов во время обороны на 10%. Цена: 10 продукции."
				 data-inform2="Уже построено. Теперь Фортификационные сооружения увеливают продуктивность боевых роботов во время обороны на 10%"
				 data-name="Фортификационные сооружения">
				 <img src="img/defense.png" width="100%">
				 <br>✯
			</div>
			<div id="defense2" class="column7 row2"
				 data-phase="0" 
				 data-price="100" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Фортификационные сооружения"
				 data-inform1="Постройте что бы Фортификационные сооружения увеличивали продуктивность боевых роботов во время обороны на 20%. Цена: 100 продукции. Потребление: 20 электроэнергии"
				 data-inform2="Уже построено. Теперь Фортификационные сооружения увеливают продуктивность боевых роботов во время обороны на 20%. Потребление: 20 электроэнергии"
				 data-name="Улучшенные Фортификационные сооружения">
				 <img src="img/defense.png" width="100%">
				 <br>✯✯
			</div>
			<div id="defense3" class="column7 row3"
				 data-phase="0" 
				 data-price="1000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Улучшенные Фортификационные сооружения"
				 data-inform1="Постройте что бы Фортификационные сооружения увеличивали продуктивность боевых роботов во время обороны на 30%. Цена: 1000 продукции. Потребление: 100 электроэнергии"
				 data-inform2="Уже построено. Теперь Фортификационные сооружения увеливают продуктивность боевых роботов во время обороны на 30%. Потребление: 100 электроэнергии"
				 data-name="Современные Фортификационные сооружения">
				 <img src="img/defense.png" width="100%">
				 <br>✯✯✯
			</div>
			<div id="defense4" class="column7 row4"
				 data-phase="0" 
				 data-price="10000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Современные Фортификационные сооружения"
				 data-inform1="Постройте что бы Фортификационные сооружения увеличивали продуктивность боевых роботов во время обороны на 50%. Цена: 10 000 продукции. Потребление: 500 электроэнергии"
				 data-inform2="Уже построено. Теперь Фортификационные сооружения увеливают продуктивность боевых роботов во время обороны на 50%. Потребление: 500 электроэнергии"
				 data-name="Сверхсовременные Фортификационные сооружения">
				 <img src="img/defense.png" width="100%">
				 <br>✯✯✯✯
			</div>
			<div id="defense5" class="column7 row5"
				 data-phase="0" 
				 data-price="100000" 
				 data-inform0="Постройка недоступна. Сначала нужно построить Сверхсовременные Фортификационные сооружения"
				 data-inform1="Постройте что бы Фортификационные сооружения увеличивали продуктивность боевых роботов во время обороны на 100%. Цена: 100 000 продукции. Потребление: 2500 электроэнергии"
				 data-inform2="Уже построено. Теперь Фортификационные сооружения увеливают продуктивность боевых роботов во время обороны на 100%. Потребление: 2500 электроэнергии"
				 data-name="Фортификационные сооружения будущего">
				 <img src="img/defense.png" width="100%">
				 <br>✯✯✯✯✯
			</div>
			<article id="infoBuild" class="column8 row15">
				<span></span><br><br>
				<span>Выбери здание что бы узнать подробности</span>
				<button id="buyBuild" class="none">Купить</button>
			</article>
`