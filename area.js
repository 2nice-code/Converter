

	/* SIDE BAR*/
	const close = document.querySelector(".closebtn")
	const open = document.querySelector(".openbtn")


				function opennav(){
					document.getElementById("mysidenav").style.width = "100%";
				}

		open.addEventListener("click", opennav);

				function closenav(){
					document.getElementById("mysidenav").style.width = "0";
				}
		
		close.addEventListener("click", closenav);




	const  squarefeet = document.querySelector(".opt1")
	const  acres = document.querySelector(".opt2")
	const  squaremeters = document.querySelector(".opt3")
	const  hactares = document.querySelector(".opt4")
	const  squareKilometer = document.querySelector(".opt5")
	const  squareMiles = document.querySelector(".opt6")
	const  squaremilimeter = document.querySelector(".opt7")
	const  squarecentimeter = document.querySelector(".opt8")
	
	const enter = document.querySelector(".enter")





								/*SQUARE FEET*/

		function for_SquareFeet(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqf" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 43560
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqf"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10.764
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Sqf"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 107639.104
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Sqf"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10763910.4
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " Sqf"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 27878400
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqf"))
				    }

				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00001076
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(8) + " Sqf"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001076
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " Sqf"))
				    }

			}

				squarefeet.addEventListener("click", for_SquareFeet);








								/*ACRES FEET*/

		function for_acres(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00002296)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(8) + " acres;" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " acres"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000247
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " acres"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2.471
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " acres"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 247.105
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " acres"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 640
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " acres"))
				    }
				
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000000002471
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(13) + " acres"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00000001076
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(11) + " acres"))
				    }			}

				acres.addEventListener("click", for_acres);







								/*SQUARE METER*/

		function for_squareMeter(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0929)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " Sqm" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 4046.856
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Sqm"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqm"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqm"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqm"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2589988.11
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(11) + " Sqm"))
				    }
				
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " Sqm"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " Sqm"))
				    }


			}

				squaremeters.addEventListener("click", for_squareMeter);







												/*HECTARES*/

		function for_hectares(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00000929)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " hec" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.405
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " hec"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " hec"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " hec"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " hec"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 258.999
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " hec"))
				    }
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " hec"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(8) + " hec"))
				    }
			}

				hactares.addEventListener("click", for_hectares);







															/*SQUARE KILOMETER*/

		function for_squareKilometer(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0000000929)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " Sqk" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00405
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " Sqk"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " Sqk"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.01
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Sqk"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqk"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2.59
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Sqk"))
				    }
				
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000000000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(12) + " Sqk"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " Sqk"))
				    }
			}

				squareKilometer.addEventListener("click", for_squareKilometer);




																			/*SQUARE MILES CALCULATION*/

		function for_squareMiles(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0000003587)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " Sqmi" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00156
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " Sqmi"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000003861
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " Sqmi"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00386
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " Sqmi"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.386
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Sqmi"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmi"))
				    }
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000000000003861
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(16) + " Sqmi"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00000000003861
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(14) + " Sqf"))
				    }
			}

				squareMiles.addEventListener("click", for_squareMiles);






										/*SQUARE MILE CALCULATION*/

		function square_milimeter(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(92903.04)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Sqmm" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 4047000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10000000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2589988110336
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }
				
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }
			}

				squaremilimeter.addEventListener("click", square_milimeter);








														/*SQUARE CENTIMETER CALCULATION*/

		function square_centimeter(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "square_feet" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(929.03)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Sqcm" ))
				    }

				else if(option.value === "acres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 40468564.2
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " Sqcm"))
				    }

				else if(option.value === "square_meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqcm"))
				    }

				else if(option.value === "hactares" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqcm"))
				    }

				else if(option.value === "square_kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10000000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqcm"))
				    }

				else if(option.value === "square_miles" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 25899881103
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqcm"))
				    }
				
				else if(option.value === "square_milimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.01
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Sqmm"))
				    }

				else if(option.value === "square_centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Sqmm"))
				    }
			}

				squarecentimeter.addEventListener("click", square_centimeter);







						/*TO CLEAR CALCULATIONS*/

			const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});
			
