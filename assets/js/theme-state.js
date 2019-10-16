function saveState () {
  const state = document.getElementById('switcher').checked
  localStorage.setItem('themeState', state)

  changeState(state)
}

function loadState () {
  const state = JSON.parse(localStorage.getItem('themeState'))
  document.getElementById('switcher').checked = state

  changeState(state)
}

function changeState (state) {
  if (state) {
    document.documentElement.style.setProperty('--main-color', 'var(--dark-main-color)')
    document.documentElement.style.setProperty('--secondary-color', 'var(--dark-secondary-color)')
  } else {
    document.documentElement.style.setProperty('--main-color', 'var(--light-main-color)')
    document.documentElement.style.setProperty('--secondary-color', 'var(--light-secondary-color)')
  }
}

loadState()
