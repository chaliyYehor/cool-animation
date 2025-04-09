const elementsToAnimate = document.querySelectorAll('.piece')

elementsToAnimate.forEach(el => {
	el.addEventListener('click', (e) => {
		elementsToAnimate.forEach(element => element.classList.remove('active'))

		el.classList.add('active')
	})
})