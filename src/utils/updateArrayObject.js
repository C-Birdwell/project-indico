import update from 'immutability-helper'

export const updateArrayObject = (state, id, array, keyVal, amount) => {
  const key = array.findIndex(val => val.id === id)

  console.log(array[key][keyVal])

  return update(state, {
    [`${array}`]: {
      [key]: {
        keyVal: { $set: 0 + amount },
      },
    },
  })
}
