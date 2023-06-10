	
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




	const  milli = document.querySelector(".opt1")
	const  centi = document.querySelector(".opt2")
	const  met = document.querySelector(".opt3")
	const  kilo = document.querySelector(".opt4")
	const  ches = document.querySelector(".opt5")
	const  feet = document.querySelector(".opt6")
	const  miles = document.querySelector(".opt7")
	const  yard = document.querySelector(".opt8")

	
	const enter = document.querySelector(".enter")
	


		/* MILLIMETER CALCULATIONS*/

 		function for_Millimeter(){

			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm"))
				    } 

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 10
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm"))

				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 25.4
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " mm"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 304.8
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " mm"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1609344
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mm"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 914.4
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " mm"))
				    }
			
				};

	
		milli.addEventListener("click", for_Millimeter);





			/* CENTIMETER CALCULATIONS*/



 		function for_Centimeter(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (Number(0.1) * enter.value)  
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " cm"))

				    } 

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 100000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " cm"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2.54
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " cm"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 30.48
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " cm"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 160934.4
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " cm"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 91.44
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " cm"))
				    }
				}

		centi.addEventListener("click", for_Centimeter);



				/*METER CALCULATIONS*/



 		function for_Meter(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m"))
				    } 

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.01
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " m"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " m"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1000
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " m"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0254
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " m"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.305
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1609.344
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " m"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.9144
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " m"))
				    }

				}


		met.addEventListener("click", for_Meter);



						/*KILOMETER CALCULATIONS*/



 		function for_Kilometer(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " km"))
				    }

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " km"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " km"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " km"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0000254
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " km"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0003048
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " km"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.6093
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " km"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0009144
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " km"))
				    }
				}

		kilo.addEventListener("click", for_Kilometer);



								/*INCHES CALCULATIONS*/



 		function for_Inches(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0394)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " inch"))
				    }

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.394
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " inch"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 39.37
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " inch"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 39370.079
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " inch"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " inch"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 12
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " inch"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 63360
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " inch"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 36
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " inch"))
				    }

				}

		ches.addEventListener("click", for_Inches);




					/*FEET CALCULATIONS*/



 		function for_Feet(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00328)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " ft"))
				    }

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0394
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " ft"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3.281
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " ft"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3281
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ft"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0833
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " ft"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ft"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 5280
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ft"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 3
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " ft"))
				    }
				}

		feet.addEventListener("click", for_Feet);




									/*MILES CALCULATIONS*/



 		function for_Miles(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0000006214)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(10) + " mi"))
				    }

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000006214
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(9) + " mi"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0006214
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " mi"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.621
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mi"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00001578
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " mi"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0001893
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(7) + " mi"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mi"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000568
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " mi"))
				    }
				}

		miles.addEventListener("click", for_Miles);



						/*YARD CALCULATIONS*/



 		function for_Yard(){

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "millimeter" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00109)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " yd"))
				    }

				else if(option.value === "centimeter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0109
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " yd"))
				    }

				else if(option.value === "meter" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.094
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " yd"))
				    }

				else if(option.value === "kilometer" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1093.613
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " yd"))
				    }

				else if(option.value === "inches" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0278
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " yd"))
				    }

				else if(option.value === "feet" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.333
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " yd"))
				    }

				else if(option.value === "mile" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1760
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " yd"))
				    }

				else if(option.value === "yard" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mi"))
				    }
				}

		yard.addEventListener("click", for_Yard);


					/*TO CLEAR CALCULATIONS*/

		const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});








