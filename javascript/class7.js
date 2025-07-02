let h3 = document.getElementById('text')

function mee(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		h3.textContent = `${num1} is the biggest`
	}
	else if (num2 > num1 && num2 > num3) {
		h3.textContent = `${num2} is the biggest`
	}

	else {
		h3.textContent = `${num3} is the biggest`
	}
}

console.log(mee(30,700, 100))