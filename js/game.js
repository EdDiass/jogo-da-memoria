const grid = document.querySelector('.grid')

const characters = [
  'fenix',
  'jett',
  'kj',
  'omen',
  'raze',
  'robo',
  'sage',
  'sky',
  'viper',
  'breach'
]

const createElement = (tag, className) => {
  const element = document.createElement(tag)
  element.className = className
  return element
}

const revealCard = ({ target }) => {
  target.parentNode.classList.add('reveal-card')
}

const creatCard = character => {
  const card = createElement('div', 'card')
  const front = createElement('div', 'face front')
  const back = createElement('div', 'face back')

  front.style.backgroundImage = `url('../img/${character}.png')`

  card.appendChild(front)
  card.appendChild(back)

  card.addEventListener('click', revealCard)

  return card
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters]

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  shuffledArray.forEach(character => {
    const card = creatCard(character)
    grid.appendChild(card)
  })
}

loadGame()
