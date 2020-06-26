import { v4 as uuidv4 } from 'uuid'

import { randomizeArray, updateArrayObject, setValueOfArray } from '../utils'
import { dataCharacterCategory } from '../data'

import {
  CHARACTER_COLLECTION,
  CHARACTER_CREATE,
  CHARACTER_DATA,
  CHARACTER_HEALTH_ADD,
  CHARACTER_HEALTH_SET,
  CHARACTER_HEALTH_SUB,
  CHARACTER_DEFENSE_ADD,
  CHARACTER_DEFENSE_SUB,
  CHARACTER_ATTACK_ADD,
  CHARACTER_ATTACK_SUB,
} from '../typeDefs'

const INITIAL_STATE = {
  characterCollection: [],
}

const characterContent = () => ({
  id: uuidv4(),
  health: 0,
  attack: 0,
  defense: 0,
  category: randomizeArray(dataCharacterCategory),
})

export const character = (state = INITIAL_STATE, action) => {
  const updateCharacterStats = (stat, amt) => ({
    ...state,
    characterCollection: updateArrayObject(action.payload, state.characterCollection, stat, amt),
  })

  switch (action.type) {
    case CHARACTER_COLLECTION:
      return { ...state, characterCollection: action.payload }

    case CHARACTER_CREATE:
      return { ...state, characterCollection: state.characterCollection.concat(characterContent()) }

    case CHARACTER_HEALTH_ADD:
      return updateCharacterStats('health', 1)

    case CHARACTER_HEALTH_SUB:
      return updateCharacterStats('health', -1)

    case CHARACTER_ATTACK_ADD:
      return updateCharacterStats('attack', 1)

    case CHARACTER_ATTACK_SUB:
      return updateCharacterStats('attack', -1)

    case CHARACTER_DEFENSE_ADD:
      return updateCharacterStats('defense', 1)

    case CHARACTER_DEFENSE_SUB:
      return updateCharacterStats('defense', -1)

    case CHARACTER_HEALTH_SET:
      return {
        ...state,
        characterCollection: setValueOfArray(state.characterCollection, 'health', 0),
      }

    default:
      return { ...state }
  }
}
