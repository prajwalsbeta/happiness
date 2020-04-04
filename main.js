let questions = [
	// key corresponds to radio button name attribute
	//value is the answer or the option no
	'q1',
	'q2',
	'q3',
	'q4',
	'q5',
]
$(document).ready(function () {
	localStorage.setItem('score', 0)
	document
		.querySelector("[type='submit']")
		.addEventListener('click', handleFormSubmit)
})

function handleFormSubmit(e) {
	e.preventDefault()
	localStorage.setItem('score', 0)
	score = calculateScore()
	localStorage.setItem('score', score)
	//remove it later (debugging)
	alert('score: ' + localStorage.score)
	// TODO :- redirect based on score value
}

function calculateScore() {
	let score = 0
	for (let question of questions) {
		document.getElementsByName(question).forEach((elem) => {
			if (elem.checked && elem.value) {
				//if answer is correct
				score += +elem.value
			}
		})
	}
	return score
}
