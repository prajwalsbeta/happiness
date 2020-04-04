let questionsAnswers = [
	// key corresponds to radio button name attribute
	//value is the answer or the option no
	['q1', '1'],
	['q2', '1'],
	['q3', '2'],
	['q4', '3'],
	['q5', '2'],
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
	for (let [question, answer] of questionsAnswers) {
		document.getElementsByName(question).forEach((elem) => {
			if (elem.checked && elem.value === answer) {
				//if answer is correct
				score += 1
			}
		})
	}
	return score
}
