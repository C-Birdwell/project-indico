export const randomizeArray = categoryArray => {
  const randomValue = categoryArray[Math.floor(categoryArray.length * Math.random())]

  return randomValue
}
