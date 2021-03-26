const btn = document.querySelector('.mobile-nav-logo')
const items = document.querySelector('.mobile-nav-items')



btn.addEventListener('click', () => {
    items.classList.toggle("mob-hidden")
})