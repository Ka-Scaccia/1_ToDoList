import React from 'react'
import "../CSS/rootEgeneral.css";

export const Header = ({ count, setCount }) => {
  return (
    <>
      <h1>Le mie attività</h1>
      <h3>Hai {count} task in sospeso per oggi</h3>
    </>
  )
}
