
			const second = 1000;
			const minute = 60 * second;
			const hour = 60 * minute;
			const day = 24 * hour;

			let total;
			let finalDate;
			let intervalId;

			if(localStorage.getItem("timer")) {

				finalDate = localStorage.getItem("timer");
				intervalId = setInterval(timer, 1000);

			}
			
			function start() {
				
				const date = document.querySelector("input").value;
				finalDate = new Date(date).getTime();
				localStorage.setItem("timer", finalDate);

				intervalId = setInterval(timer, 1000);
										
			}

			function timer() {

				let now = new Date().getTime();
				total = finalDate - now;

				const days = Math.floor(total / day);
				const hours = Math.floor((total % day) / hour) + 3;
				const minutes = Math.floor((total % hour) / minute);
				const seconds = Math.floor((total % minute) / second);
				
				document.querySelector("h1").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;

			}

			function stop() {

				document.querySelector("h1").innerText = "🙄👆";
				clearInterval(intervalId);
				localStorage.removeItem("timer");

			}