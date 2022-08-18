const button2 = document.getElementById('detalhes2')
const popup2 = document.querySelector('.popup-wrapper2')
const closeButton2 = document.querySelector('.popup-close2')
 
button2.addEventListener('click',() => {
    popup2.style.display = "block"
})

closeButton2.addEventListener('click', () => {
    popup2.style.display = 'none'
})

popup2.addEventListener('click', () => {
    popup2.style.display = 'none'
})