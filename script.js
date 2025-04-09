const elementsToAnimate = document.querySelectorAll('.wrapper > div')
const closeBtns = document.querySelectorAll('.close-btn')

elementsToAnimate.forEach(el => {
	el.addEventListener('click', e => {
		elementsToAnimate.forEach(element => {
			element.classList.remove('active')
			element.children[0].classList.remove('active')
		})

		el.classList.add('active')
		el.children[0].classList.add('active')
		console.log(1)
	})
})

closeBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		e.stopPropagation()
		elementsToAnimate.forEach(el => el.classList.remove('active'))
		btn.classList.remove('active')
		console.log(2)
	})
})	
