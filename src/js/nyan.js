
function cycleFrames (_nyanCat, _currentFrame) {
	_nyanCat.classList = []
	_nyanCat.classList.add(`frame${_currentFrame}`)
}

(function () {
	let nyanCat = document.getElementById('nyan-cat')
	let currentFrame = 1

	setInterval(function () {
		currentFrame = (currentFrame % 6) + 1
		cycleFrames(nyanCat, currentFrame)
	}, 70)
})()

/*
Credits - https://github.com/cristurm/nyan-cat (main)
Credits - https://github.com/rdeville/nyan-cat (support)
*/