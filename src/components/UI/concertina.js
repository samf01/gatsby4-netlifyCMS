import React, { useRef, useState, useEffect } from "react"
import { animated, useSpring, config } from "react-spring"
import styled from "styled-components"

const Accordian = styled(animated.div)`
  overflow-y: hidden;
  height: 0;
`

const Concertina = ({ children, open }) => {
  const [height, setHeight] = useState("0px")
  const accord = useRef(null)

  const styles = useSpring({
    config: config.gentle,
    height: height,
  })
  useEffect(() => {
    if (open) {
      setHeight(accord.current.scrollHeight + "px")
    } else setHeight("0px")
  }, [open])

  return (
    <Accordian style={styles} ref={accord}>
      {children}
    </Accordian>
  )
}

export default Concertina
