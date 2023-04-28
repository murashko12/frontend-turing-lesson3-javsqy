import './style.css';

const addButton = document.querySelector('.add__button') //
const buttons =  document.querySelectorAll('.button')
const childDiv = document.querySelector('.child')

function showMes() {
  alert('Ура нажал!')
}

function addNewButton() {
  const newButton = document.createElement('button')
  newButton.classList.add('button')
  childDiv.appendChild(newButton)
  newButton.innerHTML = 'Новая кнопка'
  newButton.addEventListener('click', showMes)
}

addButton.addEventListener('click', addNewButton)

buttons.forEach((button) => {
  button.addEventListener('click', showMes)
})

