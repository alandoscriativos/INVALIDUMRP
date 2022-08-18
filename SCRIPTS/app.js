const button = document.getElementById('detalhes')
const popup = document.querySelector('.popup-wrapper')
const closeButton = document.querySelector('.popup-close')

const button2 = document.getElementById('detalhes2')
const popup2 = document.querySelector('.popup-wrapper2')
const closeButton2 = document.querySelector('.popup-close2')

const button3 = document.getElementById('detalhes3')
const popup3 = document.querySelector('.popup-wrapper3')
const closeButton3 = document.querySelector('.popup-close3')
 
/*POPUP 1*/ 
button.addEventListener('click',() => {
    popup.style.display = "block"
})

closeButton.addEventListener('click', () => {
    popup.style.display = 'none'
})

popup.addEventListener('click', () => {
    popup.style.display = 'none'
})

/*POPUP 2*/ 
button2.addEventListener('click',() => {
    popup2.style.display = "block"
})

closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none'
})

popup2.addEventListener('click', () => {
    popup2.style.display = 'none'
})

/*POPUP 3*/
button3.addEventListener('click',() => {
    popup3.style.display = "block"
})

closeButton3.addEventListener('click', () => {
    popup3.style.display = 'none'
})

popup3.addEventListener('click', () => {
    popup3.style.display = 'none'
})