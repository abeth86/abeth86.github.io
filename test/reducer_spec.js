import {List, Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {

  it('Initializes a starting state', () => {
    const initialState = Map({
      selected: 'Home'
    })
    const action = {
      type: 'SET_STATE',
      state: null
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      selected: 'Home'
    }))
  })

  it('Handles route selections', () => {
    const initialState = Map()
    const action = {
      type: 'SET_SELECTED',
      selected: 'About'
    }
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      selected: 'About'
    }))
  })

})
