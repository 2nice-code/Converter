

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




	const  celsius = document.querySelector(".opt1")
	const  fahrenheit = document.querySelector(".opt2")
	const  kelvin = document.querySelector(".opt3")
	const  rankine = document.querySelector(".opt4")
	
	const enter = document.querySelector(".enter")





								/*CELSIUS CALCULATION*/

		function for_Celsius(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "celsius" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °C" ))
				    }

				else if(option.value === "fahrenheit" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value - 32) * (5/9)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °C"))
				    }

				else if(option.value === "kelvin" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value - 273.15
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °C"))
				    }

				else if(option.value === "rankine" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value - 491.67) * 5/9
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " °C"))
				    }


			}

				celsius.addEventListener("click", for_Celsius);








								/*FAHRENHEIT CALCULATION*/

		function for_Fahrenheit(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "celsius" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value * 9/5) + 32
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °F" ))
				    }

				else if(option.value === "fahrenheit" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °F"))
				    }

				else if(option.value === "kelvin" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value - 273.15) * 9/5 + 32
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °F"))
				    }

				else if(option.value === "rankine" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value - 459.67)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °F"))
				    }


			}

				fahrenheit.addEventListener("click", for_Fahrenheit);








								/*KELVIN CALCULATIONS*/

		function for_Kelvin(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "celsius" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (273.15 + enter.value)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " °K"))
				    }

				else if(option.value === "fahrenheit" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value - 32) * 5/9 + 273.15
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °K"))
				    }

				else if(option.value === "kelvin" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °K"))
				    }

				else if(option.value === "rankine" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value * 5/9)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " °K"))
				    }


			}

				kelvin.addEventListener("click", for_Kelvin);








												/*RANKINE CALCULATIONS*/

		function for_rankine(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "celsius" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value * 9/5 + 491.67)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °R" ))
				    }

				else if(option.value === "fahrenheit" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = ( Number (enter.value) + 459.67)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °R"))
				    }

				else if(option.value === "kelvin" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.8
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " °R"))
				    }

				else if(option.value === "rankine" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value * 1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " °R"))
				    }


			}

				rankine.addEventListener("click", for_rankine);






						/*TO CLEAR CALCULATIONS*/

			const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});
			
