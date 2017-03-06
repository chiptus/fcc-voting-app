export function convertArrayToObject(arr = [], key = 'id') {
  return arr.reduce((acc, cur) => ({
    ...acc,
    [cur[key]]: cur,
  }),{})
}