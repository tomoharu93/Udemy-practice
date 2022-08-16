const resetButton = document.querySelector('#reset')
const winningScoreButton = document.querySelector('#winningScore')

let p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}

let p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

let winningScore = 3
let isGameOver = false

function reset() {
  isGameOver = false
  for (let p of [p1, p2]) {
    p.score = 0
    p.display.textContent = 0
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.button.disabled = false
  }
}

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1
    player.display.textContent = player.score
    if (winningScore === player.score) {
      isGameOver = true
      player.display.classList.add('has-text-success')
      opponent.display.classList.add('has-text-danger')
      player.button.disabled = true
      opponent.button.disabled = true
    }
  }
}

winningScoreButton.addEventListener('change', function() {
  winningScore = parseInt(this.value)
  reset()
})

p1.button.addEventListener('click', function() {
  updateScore(p1, p2)
})

p2.button.addEventListener('click', function() {
  updateScore(p2, p1)
})

resetButton.addEventListener('click', reset)
