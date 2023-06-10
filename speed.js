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




	const  kiloPerHour = document.querySelector(".opt1")
	const  milesPerhour = document.querySelector(".opt2")
	const  meterPerseconds = document.querySelector(".opt3")
	const  feetPerseconds = document.querySelector(".opt4")
	const  millimeterPerseconds = document.querySelector(".opt5")
	const  centimeterPerseconds = document.querySelector(".opt6")
	const  kilometerPerseconds = document.querySelector(".opt7")
	
	const enter = document.querySelector(".enter")





								/*KILOMETER/HOUR CALCULATION*/

		function for_kiloPerHour(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Km/h" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1.609)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Km/h"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3.6
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " Km/h"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.097
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Km/h"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0036
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " Km/h"))
				    }
				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.036
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " Km/h"))
				    }
				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3600
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " Km/h"))
				    }    
			}

				kiloPerHour.addEventListener("click", for_kiloPerHour);






												/*MILES/HOUR CALCULATION*/

		function for_milesPerHour(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.621)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mph" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mph"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2.237
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mph"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.682
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mph"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00224
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " mph"))
				    }
				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0224
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " mph"))
				    }
				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2236.936
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mph"))
				    }  
			}

				milesPerhour.addEventListener("click", for_milesPerHour);







																/*METER/SEC CALCULATION*/

		function for_meterPerSec(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.278)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m/s" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (0.447)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m/s"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " m/s"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.305
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m/s"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m/s"))
				    }
				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.01
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " m/s"))
				    }
				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " m/s"))
				    }  
			}

				meterPerseconds.addEventListener("click", for_meterPerSec);









										/*FEET/SEC CALCULATION*/

		function for_feetPerSec(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.911)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ft/s" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1.467)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ft/s"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3.281
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ft/s"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ft/s"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00328
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " ft/s"))
				    }

				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0328
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " ft/s"))
				    }

				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.911
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ft/s"))
				    } 
			}

				feetPerseconds.addEventListener("click", for_feetPerSec);






						/*MILLIMETER/SEC CALCULATION*/

		function for_millimeterPerseconds(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(277.78)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " mm/s" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (447.04)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " mm/s"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm/s"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 304.8
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " mm/s"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm/s"))
				    }

				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm/s"))
				    }

				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm/s"))
				    } 
			}

				millimeterPerseconds.addEventListener("click", for_millimeterPerseconds);









				/*CENTIMETER/SEC CALCULATION*/

		function for_centimeterPerseconds(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(27.778)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " cm/s" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (44.704)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " cm/s"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm/s"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 30.48
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " cm/s"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " cm/s"))
				    }

				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm/s"))
				    }

				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm/s"))
				    } 
			}

				centimeterPerseconds.addEventListener("click", for_centimeterPerseconds);








				/*CENTIMETER/SEC CALCULATION*/

		function for_kilometerPerseconds(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "kilometers/hour" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000278)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " km/s" ))
				    }

				else if(option.value === "miles/hour" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (0.000447)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " km/s"))
				    }

				else if(option.value === "meter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " km/s"))
				    }

				else if(option.value === "feet/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.097
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " km/s"))
				    }

				else if(option.value === "millimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " km/s"))
				    }

				else if(option.value === "centimeter/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " km/s"))
				    }

				else if(option.value === "kilometer/seconds" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " km/s"))
				    } 
			}

				kilometerPerseconds.addEventListener("click", for_kilometerPerseconds);








										/*TO CLEAR CALCULATIONS*/

			const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});