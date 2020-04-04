var score1 =localStorage.getItem("score")/36
var color1 = '#ff0000';
if (score1 <= 0.25) {
	var color1='00ff00'
}
var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: score1,
    fill: {
		color: color1
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	document.getElementById("strong").innerHTML = Math.floor(score1*100)+"% depression";	
});
