import {Map} from 'immutable'

const initialState = Map({
  selected: 'Home',
  transition: false,
  icons: [
    '/img/html5-min.png',
    '/img/css3-min.png',
    '/img/less-min.png',
    '/img/es6-min.png',
    '/img/reactjs-min.png',
    '/img/angularjs-min.png',
    '/img/nodejs-min.png'
  ],
  workHistory: [
    '/img/strikingly-min.png'
  ],
  gists: [
    {
      id: 'awitherspoon/585b46eba5990af8bd24',
      title: 'FizzBuzz in JS'
    },
    {
      id: 'awitherspoon/c19d1a241477251c65e4',
      title: 'FizzBuzz in C#'
    },
    {
      id: 'awitherspoon/05286c61b90a23de3615',
      title: 'Array flattening'
    },
    {
      id: 'awitherspoon/3463cf48710b4570e712',
      title: 'Only once'
    },
    {
      id: 'awitherspoon/d2aa3e660c8211ca26ba',
      title: 'Visible nodes'
    },
    {
      id: 'awitherspoon/4b292d4d19f01d8975b6',
      title: 'Factorials with memoization'
    }
  ]
})

function setState (state, newState) {
  return state.merge(newState)
}

function setSelected (state, selected) {
  return state.set('selected', selected)
}

function openModal (state, modal) {
  return state.set('openedModal', modal)
}

function closeModal (state) {
  return state.remove('openedModal')
}

function startTransition (state, start) {
  return state.set('transition', start)
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'SET_SELECTED':
      return setSelected(state, action.selected)
    case 'OPEN_MODAL':
      return openModal(state, action.modal)
    case 'CLOSE_MODAL':
      return closeModal(state)
    case 'START_TRANSITION':
      return startTransition(state, action.start)
  }
  return state
}
