export function convertArrayToObject(arr = [], key = '_id') {
  return arr.reduce((acc, cur) => ({
    ...acc,
    [cur[key]]: cur,
  }),{})
}