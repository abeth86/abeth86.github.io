import {List, Map} from 'immutable'

const initialState = Map({
  selected: 'Home'
})

function setState(state, newState) {
  return state.merge(newState)
}

function setSelected(state, selected) {
  return state.set('selected', selected)
}

export default function(state=initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'SET_SELECTED':
      return setSelected(state, action.selected)
  }
  return state
}
