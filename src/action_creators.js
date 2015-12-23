export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function setSelected(selected) {
  return {
    type: 'SET_SELECTED',
    selected
  }
}

export function openModal(modal) {
  return {
    type: 'OPEN_MODAL',
    modal
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}

export function startTransition(start) {
  return {
    type: 'START_TRANSITION',
    start
  }
}
