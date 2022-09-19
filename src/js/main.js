function showMenu() {
  let menuShowButton = document.querySelector('#menuShowButton')
  let mobileMenu = document.querySelector('#mobileMenu')

  menuShowButton.addEventListener('click', () => {
    menuShowButton.classList.toggle('active')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  })
}

showMenu()