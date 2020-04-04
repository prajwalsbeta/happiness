var progressBarOptions = {
	startAngle: -1.55,
	size: 200,
    value: 0.75,
    fill: {
		color: '#ffa500'
	}
}

$('.circle').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
	
});