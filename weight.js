
	/* SIDE BAR*/
	const close = document.querySelector(".closebtn")
	const open = document.querySelector(".openbtn")
	const animation = document.querySelector(".anim")


				function opennav(){
					document.getElementById("mysidenav").style.width = "100%";
					animation.className = "anim"
				}

		open.addEventListener("click", opennav);

				function closenav(){
					document.getElementById("mysidenav").style.width = "0";
				}
		
		close.addEventListener("click", closenav);





	const  miligrams = document.querySelector(".opt1")
	const  grams = document.querySelector(".opt2")
	const  carats = document.querySelector(".opt3")
	const  pound = document.querySelector(".opt4")
	const  kilogram = document.querySelector(".opt5")
	const  ounce = document.querySelector(".opt6")
	const  tonnes = document.querySelector(".opt7")
	
	const enter = document.querySelector(".enter")





								

								/*MILIGRAM CALCULATION*/

		function for_Miligram(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				
				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mg" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1000)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mg" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(200)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mg" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(453592.37)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " mg" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1000000)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mg"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 28349.523
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mg"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " g"))
				    }

			}

				miligrams.addEventListener("click", for_Miligram);








								/*GRAMS CALCULATION*/

		function for_grams(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				
				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " g" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " g" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.2)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " g" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(453.6)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " g" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1000)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " g"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 28.35
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " g"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " g"))
				    }

			}

				grams.addEventListener("click", for_grams);









												/*CARAT CALCULATION*/

		function for_Carats(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				
				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.005)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ct" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(5)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ct" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ct" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(2267.962)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ct" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (5000)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ct"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 141.75
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " ct"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 5000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ct"))
				    }

			}

				carats.addEventListener("click", for_Carats);






								/*POUND CALCULATION*/

		function for_pound(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				
				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000002205)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(9) + " lb" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00022)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " lb" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000441)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " lb" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " lb" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (2.205)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " lb"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0625
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " lb"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2205
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " lb"))
				    }

			}

				pound.addEventListener("click", for_pound);









											/*KILOGRAM CALCULATION*/

		function for_kilogram(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " kg" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " kg" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0002)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " kg" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.454)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " kg" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " kg"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0283
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " kg"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " kg"))
				    }

			}

				kilogram.addEventListener("click", for_kilogram);









											/*OUNCE CALCULATION*/

		function for_ounce(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00003527)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(8) + " Oz" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0353)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " Oz" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(16)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Oz" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00705)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " Oz" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (35.274)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Oz"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Oz"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 35273.97
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " Oz"))
				    }

			}

				ounce.addEventListener("click", for_ounce);








															/*TONNES CALCULATION*/

		function for_tonnes(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

				if(option.value === "miligram" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000000001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(9) + " tons" ))
				    }

			    else if(option.value === "grams" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " tons" ))
				    }

				else if(option.value === "carats" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0000002)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " Oz" ))
				    }

			    else if(option.value === "pound" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000454)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " tons" ))
				    }

				else if(option.value === "kilogram" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (0.001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " tons"))
				    }

				else if(option.value === "ounce" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000284
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " tons"))
				    }

				else if(option.value === "tonnes" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " tons"))
				    }

			}

				tonnes.addEventListener("click", for_tonnes);





						/*TO CLEAR CALCULATIONS*/

			const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});