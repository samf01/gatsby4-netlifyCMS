import _ from "lodash"
//Array check which item is closest to the required value
export const closestItem = _.debounce((num, arr) => {
  let curr = arr[0]
  let diff = Math.abs(num - curr)
  for (let val = 0; val < arr.length; val++) {
    let newdiff = Math.abs(num - arr[val])
    if (newdiff < diff) {
      diff = newdiff
      curr = arr[val]
    }
  }
  return arr.indexOf(curr)
}, 10)
