let ul_drop=document.querySelectorAll('.ham ul.title')
let ham_menu=document.querySelector('.ham')
let ham_button=document.querySelector('.menu .hambtn')
let search_button=document.querySelector('.menu .searchbtn')
let search_drop=document.querySelector('.search-mobile')
let search_cancle=document.querySelector('.search-mobile a')
let mobileSearchForm = document.querySelector('#mobile-search-form');
let dim=document.querySelector('.menu-dim')
let modal=document.querySelector('.app-modal')
let modal_close= document.querySelector('.app-modal .close')

function resetAccordion(){
    ul_drop.forEach((item) => item.classList.remove('open'))
}

function closeSearch(){
    search_drop.classList.remove('open')
    mobileSearchForm.reset()
}

function closeHamMenu(){
    ham_menu.classList.remove('open')
    resetAccordion()
}

function updateDim(){
    dim.classList.toggle('open',
        ham_menu.classList.contains('open') || search_drop.classList.contains('open')
    )
}

search_button.addEventListener('click', () => {
    closeHamMenu()
    search_drop.classList.toggle('open')
    updateDim()
})

search_cancle.addEventListener('click', (e) => {
    e.preventDefault()
    closeSearch()
    updateDim()
})

ul_drop.forEach((ul) => {
    ul.addEventListener('click', () => {
        const isOpen = ul.classList.contains('open')
        resetAccordion()
        if(!isOpen) ul.classList.add('open')
    })
})

    document.querySelectorAll('.ham li.drop').forEach((drop) => {
    drop.addEventListener('click', (e) => e.stopPropagation())
})

ham_button.addEventListener('click', () => {
    const willClose = ham_menu.classList.contains('open')

    closeSearch()
    ham_menu.classList.toggle('open')

    if (willClose) resetAccordion()
    updateDim()
})

dim.addEventListener('click', () => {
    closeHamMenu()
    closeSearch()
    updateDim()
})

modal_close.addEventListener('click', () => {
    modal.style.display = 'none'
})



document.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (a && a.getAttribute('href') === '#') {
      e.preventDefault();
    }
  });