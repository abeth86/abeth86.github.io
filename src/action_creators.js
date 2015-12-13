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
