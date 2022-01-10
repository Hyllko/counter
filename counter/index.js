const count = document.querySelector(".box__count");

const btns = document.querySelectorAll(".btn");
let counter = 0;

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			counter--;
		} else if (styles.contains("increase")) {
			counter++;
		} else {
			counter = 0;
		}

		if (counter > 0) {
			count.style.color = "green";
			animateNum(count, 250);
		}
		if (counter < 0) {
			count.style.color = "red";
			animateNum(count, 250);
		}
		if (counter === 0) {
			count.style.color = "#222";
		}

		count.textContent = counter;
	});
});

const animateNum = (target, duration) => {
	target.animate([{ opacity: "0" }, { opacity: "1" }], {
		duration: duration,
		fill: "forwards",
	});
};
