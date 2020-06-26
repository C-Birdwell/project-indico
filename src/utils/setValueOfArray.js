export const setValueOfArray = (array, value, amount) => {
  const updateAll = array.map(v => ({ ...v, [`${value}`]: amount }))

  return updateAll
}
