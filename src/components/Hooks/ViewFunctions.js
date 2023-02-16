export function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect()
  return (
    bounding.bottom > -50 &&
    bounding.top <
      (window.innerHeight || document.documentElement.clientHeight + 50)
  )
}

export function getBottom(elem) {
  var bounding = elem.getBoundingClientRect()
  return bounding.bottom
}

export function scrollToPosY(elem) {
  //make sure to pass in a DOMElement: ref.current...
  const box = elem.getBoundingClientRect()
  const body = document.body
  const docEl = document.documentElement

  //The top edge of the document
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  //The document padding
  const clientTop = docEl.clientTop || body.clientTop || 0
  //This is the elements middle - the screen height / 2 + document current scroll position  - nothing
  let top =
    box.top -
    12 +
    box.height / 2 -
    window.innerHeight / 2 +
    scrollTop -
    clientTop

  //scroll to (x, y)
  return window.scrollTo(0, top)
}
