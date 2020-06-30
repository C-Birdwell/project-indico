import { v4 as uuidv4 } from 'uuid'
import update from 'immutability-helper'

import { randomizeArray, setValueOfArray } from '../utils'
import { dataCharacterCategory } from '../data'

import {
  CHARACTER_COLLECTION,
  CHARACTER_CREATE,
  CHARACTER_DELETE,
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

const createID = () => uuidv4()

export const character = (state = INITIAL_STATE, action) => {
  // TODO: refactor function for reusability
  // const updateCharacterStats = (stat, amt) =>
  //   updateArrayObject(state, action.payload, state.characterCollection, stat, amt)

  // const updateCharacterStats = array => {
  //   update(state, {
  //     array: {
  //       [findKey(action.payload)]: {
  //         health: {
  //           $set: state.characterCollection[findKey(action.payload)].health + 1,
  //         },
  //       },
  //     },
  //   })
  // }

  // TODO: decouple functions for reusability
  const findKey = id => state.characterCollection.findIndex(val => val.id == id)
  const foundKey = findKey(action.payload)

  switch (action.type) {
    case CHARACTER_COLLECTION:
      return { ...state, characterCollection: action.payload }

    case CHARACTER_CREATE:
      return {
        ...state,
        characterCollection: state.characterCollection.concat(characterContent()),
      }

    case CHARACTER_DELETE:
      return {
        ...state,
        characterCollection: state.characterCollection.filter(val => val.id !== action.payload),
      }

    // case CHARACTER_HEALTH_ADD:
    //   return updateArrayObject(state, action.payload, state.characterCollection, 'health', 1)

    // case CHARACTER_HEALTH_ADD:
    //   return updateCharacterStats(state.characterCollection)

    case CHARACTER_HEALTH_ADD:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            health: {
              $set: state.characterCollection[foundKey].health + 1,
            },
          },
        },
      })

    // case CHARACTER_HEALTH_SUB:
    //   return updateCharacterStats('health', -1)

    case CHARACTER_HEALTH_SUB:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            health: {
              $set: state.characterCollection[foundKey].health - 1,
            },
          },
        },
      })

    // case CHARACTER_ATTACK_ADD:
    //   return updateCharacterStats('attack', 1)

    case CHARACTER_ATTACK_ADD:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            attack: {
              $set: state.characterCollection[foundKey].attack + 1,
            },
          },
        },
      })

    // case CHARACTER_ATTACK_SUB:
    //   return updateCharacterStats('attack', -1)

    case CHARACTER_ATTACK_SUB:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            attack: {
              $set: state.characterCollection[foundKey].attack - 1,
            },
          },
        },
      })

    // case CHARACTER_DEFENSE_ADD:
    //   return updateCharacterStats('defense', 1)

    case CHARACTER_DEFENSE_ADD:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            defense: {
              $set: state.characterCollection[foundKey].defense + 1,
            },
          },
        },
      })

    // case CHARACTER_DEFENSE_SUB:
    //   return updateCharacterStats('defense', -1)

    case CHARACTER_DEFENSE_SUB:
      return update(state, {
        characterCollection: {
          [foundKey]: {
            defense: {
              $set: state.characterCollection[foundKey].defense - 1,
            },
          },
        },
      })

    case CHARACTER_HEALTH_SET:
      return {
        ...state,
        characterCollection: setValueOfArray(state.characterCollection, 'health', 0),
      }

    default:
      return { ...state }
  }
}
