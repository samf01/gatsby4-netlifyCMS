import { useState, useEffect } from "react"

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  //JS Media Query function - call from component and pass in the breakpoint. Use like a ternary operator.
  //For example: let isPageWide = useMediaQuery("(min-width: 1024px)") then use it in a ternary or as a truthy value

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => {
      setMatches(media.matches)
    }
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, query])

  return matches
}
