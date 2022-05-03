import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function AddUserRegion() {
  const regions = ['Auckland Region', 'Bay of Plenty Region', 'Canterbury Region', 'Gisborne Region', "Hawke's Bay Region", "Manawatu-Whanganui Region", 'Northland Region', 'Otago Region', 'Southland Region', 'Taranaki Region', 'Waikato Region', 'Tasman Region', 'Wellington Region', 'West Coast Region', 'Marlborough Region']
  const [formData, setFormData] = useState();
  const [selectData, setSelectData] = useState();
  const [optionsState, setOptionsState] = useState();

  function handleSelect(e) {
    e.preventDefault()
    setSelectData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData, selectData)
  }

  function handleText(e) {
    e.preventDefault()
    setFormData(e.target.value)
  }

  return (
    <>
      <Form.Select aria-label="region drop down" size='lg' value={selectData} onChange={handleSelect}>
        <option>Select region</option>
        {regions.map((element, i) => {
          return <option key={i}>{element}</option>
        })}
      </Form.Select>
      <Form.Label htmlFor="inputLabel">Label</Form.Label>
      <Form.Control
        type="text"
        id="label"
        aria-describedby="labelBlock"
        value={formData}
        onChange={handleText}
      />
      <input type="submit" onClick={handleSubmit} value="Submit" />
    </>
  )
}