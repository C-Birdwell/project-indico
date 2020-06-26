export const updateArrayObject = (id, array, keyVal, amount) => {
  const key = array.findIndex(val => val.id === id)
  let newArray = array
  const keyValue = newArray[key][`${keyVal}`]

  newArray.splice(key, 1, { ...newArray[key], [`${keyVal}`]: keyValue + amount })

  return newArray
}
