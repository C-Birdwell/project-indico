export const gridFromArray = (array, col) => {
  let gridArray = [[]]
  let countColumns = 1

  for (var i = 0; i < array.length; i++) {
    gridArray[gridArray.length - 1].push(array[i])
    if (countColumns <= col) {
      countColumns++
    }
    if (countColumns > col && i !== array.length - 1) {
      countColumns = 1
      gridArray.push([])
    }
  }

  return gridArray
}
