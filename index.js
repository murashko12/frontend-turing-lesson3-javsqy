import './style.css';

const addButton = document.querySelector('.add__button') //
const buttons =  document.querySelectorAll('.button')
const childDiv = document.querySelector('.child')

function showMes() {
  alert('Ура, нажал!')
}



buttons.forEach((button) => {
  button.addEventListener('click', showMes)
})