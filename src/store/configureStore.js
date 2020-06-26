import { createStore, combineReducers } from 'redux'
import { character } from '../reducers'

export default () => {
  const store = createStore(
    combineReducers({
      character,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

  return store
}
