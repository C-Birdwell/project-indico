import { createStore, combineReducers } from 'redux'
import { character, visual } from '../reducers'

export default () => {
  const store = createStore(
    combineReducers({
      character,
      visual,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}
