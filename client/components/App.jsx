import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Graph from './Graph'
import { fetchData, setData, checkData } from '../actions'
import { Dropdown, Button, ButtonGroup, SplitButton, DropdownButton, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import LoadingSpinner from './LoadingSpinner'
import AddUserRegion from './AddUserRegion'

function App() {
  const regions = ['Auckland Region', 'Bay of Plenty Region', 'Canterbury Region', 'Gisborne Region', "Hawke's Bay Region", "Manawatu-Whanganui Region", 'Northland Region', 'Otago Region', 'Southland Region', 'Taranaki Region', 'Waikato Region', 'Tasman Region', 'Wellington Region', 'West Coast Region', 'Marlborough Region']
  const [graph, setGraph] = useState()
  const dispatch = useDispatch()
  const databaseState = useSelector(state => state.databaseState)
  const [database, setDatabase] = useState()
  const [userInput, setUserInput] = useState()

  useEffect(() => {
    dispatch(fetchData('Auckland Region'))
  }, [])

  useEffect(() => {
    dispatch(checkData())
    if (databaseState === true) {
      setDatabase(<LoadingSpinner />)
    } else {
      setDatabase(null)
    }
  }, [databaseState])

  function handleClick(event) {
    dispatch(fetchData(event.target.outerText))
    setUserInput()
    setGraph(<Graph />)
  }

  function handleAddUserClick () {
    setGraph(null)
    setUserInput(<AddUserRegion />)
  }



  return (
    <>
      <div style={{ margin: "15px"}}>
        <DropdownButton id="dropdown-item-button" autoClose="outside" title="Menu" disable={databaseState}>
          <Dropdown.ItemText>Regional bar graphs:</Dropdown.ItemText>
          <Dropdown.Divider />
          {regions.map((element, i) => {
            return <div id={element} key={i}><Dropdown.Item as="button" onClick={handleClick}>{element}</Dropdown.Item>
              <Dropdown.Divider /></div>
          })}
          <Dropdown.ItemText>Add a userprofile:</Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.Item as="button" onClick={handleAddUserClick}>Add</Dropdown.Item>
        </DropdownButton>
      </div>
      <div style={{ textAlign: 'center', margin: "auto" }}>
        {database}
      </div>
      <div style={{ width: 1400, height: 1200, margin: "auto", paddingLeft: "35px" }}>
        {graph}
        <p style={{textAlign: 'center'}}>{userInput}</p>
      </div>
    </>
  )
}

export default App
