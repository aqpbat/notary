function showMobileMenu() {
  const menuShowButton = document.querySelector('#menuShowButton')
  const mobileMenu = document.querySelector('#mobileMenu')

  menuShowButton.addEventListener('click', () => {
    menuShowButton.classList.toggle('active')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
  })
}

showMobileMenu()

// ! RIGHTS

function showRightsModal() {
  const showRightsModalButton = document.querySelector('#rightsButton')
  const rightsModal = document.querySelector('#rightsModal')
  const closeButton = document.querySelector('#rightsModalClose')
  
  showRightsModalButton.addEventListener('click', () => {
    rightsModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    rightsModal.classList.remove('open')
  })
}

showRightsModal()

// ! DEALS

function showDealsModal() {
  const showDealsModalButton = document.querySelector('#dealsButton')
  const dealsModal = document.querySelector('#dealsModal')
  const closeButton = document.querySelector('#dealsModalClose')

  showDealsModalButton.addEventListener('click', () => {
    dealsModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    dealsModal.classList.remove('open')
  })
}

showDealsModal()

// ! ESTATE

function showEstateModal() {
  const showEstateModalButton = document.querySelector('#estateButton')
  const estateModal = document.querySelector('#estateModal')
  const closeButton = document.querySelector('#estateModalClose')

  showEstateModalButton.addEventListener('click', () => {
    estateModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    estateModal.classList.remove('open')
  })
}

showEstateModal()

// ! FAMILY

function showFamilyModal() {
  const showFamilyModalButton = document.querySelector('#familyButton')
  const familyModal = document.querySelector('#familyModal')
  const closeButton = document.querySelector('#familyModalClose')

  showFamilyModalButton.addEventListener('click', () => {
    familyModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    familyModal.classList.remove('open')
  })
}

showFamilyModal()

// ! SECURITY

function showSecurityModal() {
  const showSecurityModalButton = document.querySelector('#securityButton')
  const securityModal = document.querySelector('#securityModal')
  const closeButton = document.querySelector('#securityModalClose')

  showSecurityModalButton.addEventListener('click', () => {
    securityModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    securityModal.classList.remove('open')
  })
}

showSecurityModal()

// ! TRANSLATE

function showTranslateModal() {
  const showTranslateModalButton = document.querySelector('#translateButton')
  const translateModal = document.querySelector('#translateModal')
  const closeButton = document.querySelector('#translateModalClose')

  showTranslateModalButton.addEventListener('click', () => {
    translateModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    translateModal.classList.remove('open')
  })
}

showTranslateModal()

function showMediationModal() {
  const showMediationModalButton = document.querySelector('#mediationButton')
  const mediationModal = document.querySelector('#mediationModal')
  const closeButton = document.querySelector('#mediationModalClose')

  showMediationModalButton.addEventListener('click', () => {
    mediationModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    mediationModal.classList.remove('open')
  })
}

showMediationModal()


function showOtherLegalModal() {
  const showOthersLegalModalButton = document.querySelector('#othersLegalButton')
  const othersLegalModal = document.querySelector('#otherLegalModal')
  const closeButton = document.querySelector('#otherLegalModalClose')

  showOthersLegalModalButton.addEventListener('click', () => {
    othersLegalModal.classList.toggle('open')
  })

  closeButton.addEventListener('click', () => {
    othersLegalModal.classList.remove('open')
  })
}

showOtherLegalModal()


const accordion = document.getElementsByClassName('question-block')

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () => {
    accordion[i].classList.toggle('active')
  })
}