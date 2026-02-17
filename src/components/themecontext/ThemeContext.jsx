import React, { createContext, useState } from 'react'

export const Theme=createContext()

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("Light")

  return (
    <div><Theme.Provider value={[theme,setTheme]}>
      {props.children}</Theme.Provider></div>
  )
}

export default ThemeContext