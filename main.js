let questions = [
	'q1',
	'q2',
	'q3',
	'q4',
	'q5',
	' q6',
	' q7',
	' q8',
	' q9',
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
	if (score <= 10) {
        window.location = "result2.html"
    }
    else{
        window.location = "result.html"
    }
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
