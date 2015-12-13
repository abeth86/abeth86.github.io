import {List, Map} from 'immutable'

function setState(state, newState=Map({})) {
  return state.merge(newState)
}

export default function(state, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
  }
}
