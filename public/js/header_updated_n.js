const toggleBtn = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleBtn.addEventListener('click', (e) => {
	e.preventDefault()
	navbarLinks.classList.toggle('active')
	
})