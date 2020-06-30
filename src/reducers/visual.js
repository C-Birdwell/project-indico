import { WINDOW_SIZE } from '../typeDefs'

const INITIAL_STATE = {
  windowSize: 0,
  windowMode: 'desktop',
}

const detectWindowSize = val => {
  //return val <= 1150 ? 'mobile' : 'desktop'
  let winSize = ''
  if (val <= 900 && val >= 501) {
    winSize = 'pad'
  } else if (val <= 500) {
    winSize = 'mobile'
  } else {
    winSize = 'desktop'
  }
  return winSize
}

export const visual = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.payload,
        windowMode: detectWindowSize(action.payload),
      }

    default:
      return { ...state }
  }
}
