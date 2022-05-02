import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Graph from './Graph'
import { fetchData, setData, checkData } from '../actions'
import { Dropdown, Button, ButtonGroup, SplitButton, DropdownButton, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'


function App() {
  const regions = ['Auckland Region', 'Bay of Plenty Region', 'Canterbury Region', 'Gisborne Region', "Hawke's Bay Region", "Manawatu-Whanganui Region", 'Northland Region', 'Otago Region', 'Southland Region', 'Taranaki Region', 'Waikato Region', 'Tasman Region', 'Wellington Region', 'West Coast Region', 'Marlborough Region']
  const [graph, setGraph] = useState()
  const dispatch = useDispatch()
  const databaseState = useSelector(state => state.databaseState)
  const [database, setDatabase] = useState()

  useEffect(() => {
    dispatch(fetchData('Auckland Region'))
  }, [])

  useEffect(() => {
  dispatch(checkData())
  if (databaseState === true) {
    setDatabase('Loading')
} else {
  setDatabase('')
}
  }, [databaseState])

  function handleClick(event) {
    dispatch(fetchData(event.target.outerText))
    setGraph(<Graph />)
  }

  return (
    <>
      <div style={{ margin: "10px" }}>
        <DropdownButton id="dropdown-item-button" autoClose="outside" title="Choose a graph">
          <Dropdown.ItemText>Pick a region</Dropdown.ItemText>
          <Dropdown.Divider />
          {regions.map((element, i) => {
            return <div id={element} key={i}><Dropdown.Item as="button" onClick={handleClick}>{element}</Dropdown.Item>
            <Dropdown.Divider /></div>
          })}
        </DropdownButton>
      </div>
      <div style={{textAlign: 'center', margin: "auto"}}>
      <h1>{database}</h1>
      </div>
      <div style={{ width: 1400, height: 1200, margin: "auto", paddingLeft: "35px" }}>
        {graph}
      </div>
    </>
  )
}

export default App
