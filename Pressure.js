

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




	const  pascal = document.querySelector(".opt1")
	const  bar = document.querySelector(".opt2")
	const  atmosphere = document.querySelector(".opt3")
	const  psi = document.querySelector(".opt4")
	const  psf = document.querySelector(".opt5")
	const  mercury = document.querySelector(".opt6")
	
	const enter = document.querySelector(".enter")





								/*PASCAL CALCULATION*/

		function for_pascals(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " pa" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (100000)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " pa"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 101325
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " pa"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 6894.8
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(1) + " pa"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 47.88
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " pa"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 133.322
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " pa"))
				    }

			}

				pascal.addEventListener("click", for_pascals);






								/*BAR CALCULATION*/

		function for_bar(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.00001)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " bar" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (1)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " bar"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1.01325
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " bar"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.0689
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " bar"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000479
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " bar"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001333
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " bar"))
				    }


			}

				bar.addEventListener("click", for_bar);







								/*ATMOSPHERE CALCULATION*/

		function for_atmosphere(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000009869)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(9) + " atm" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (0.987)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " atm"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " atm"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.068
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " atm"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.000473
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " atm"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.001316
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " atm"))
				    }


			}

				atmosphere.addEventListener("click", for_atmosphere);





												/*PSI CALCULATION*/

		function for_psi(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.000145)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(6) + " psi" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (14.504)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " psi"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 14.696
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " psi"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " psi"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.00694
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(5) + " psi"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 51.715
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " psi"))
				    }


			}

				psi.addEventListener("click", for_psi);








												/*PSF CALCULATION*/

		function for_psf(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.02)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " psf" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (2088.54)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " psf"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2116.22
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " psf"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 144
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " psf"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " psf"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 2.78
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " psf"))
				    }


			}

				psf.addEventListener("click", for_psf);






																/*PSF CALCULATION*/

		function for_mercury(){
				

				
			 	const select = document.getElementById("measurement");
			    const option = select.options[select.selectedIndex];
				const inputedNumber = enter.value.length
				
				

			    if(option.value === "pascals" && inputedNumber > 0){
			    	const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * Number(0.0075)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(4) + " mmHg" ))
				    }

				else if(option.value === "bar" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = (enter.value) * (750.062)
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mmHg"))
				    }

				else if(option.value === "atmospheres" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 760
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mmHg"))
				    }

				else if(option.value === "psi" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 51.715
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(3) + " mmHg"))
				    }

				else if(option.value === "psf" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 0.36
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate.toFixed(2) + " mmHg"))
				    }

				else if(option.value === "mercury" && inputedNumber > 0){
					const word = document.getElementById("word");
								word.textContent="";

			    	const calculate = enter.value * 1
					var result = document.querySelector(".result")
					result.appendChild(document.createTextNode(calculate + " mmHg"))
				    }


			}

				mercury.addEventListener("click", for_mercury);







						/*TO CLEAR CALCULATIONS*/

			const button = document.querySelector(".clear")

		button.addEventListener("click", function(){
			const word = document.getElementById("word");
								word.textContent="0";
			
								enter.value="";

		});
			
