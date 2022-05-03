import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editData, fetchUserNames } from '../actions'

export default function AddUserRegion() {
  const [formData, setFormData] = useState('');
  const [selectData, setSelectData] = useState('');
  const [buttonState, setButtonState] = useState(false);
  const dispatch = useDispatch()
  const userData = useSelector(state => state.getUserNames)

  function handleSelect(e) {
    e.preventDefault()
    setSelectData(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setButtonState(true)
    dispatch(editData({ name: selectData, newName: formData }))
  }

  function handleText(e) {
    e.preventDefault()
    setFormData(e.target.value)
  }

  return (
    <>
      <Form.Select aria-label="names of users" size='sm' value={selectData} onChange={handleSelect}>
        <option>Labels</option>
        {userData.map((element, i) => {
          return <option key={i}>{element.name}</option>
        })}
      </Form.Select>
      <Form.Label htmlFor="inputLabel">Graph Label</Form.Label>
      <Form.Control
        type="text"
        id="label"
        aria-describedby="labelBlock"
        value={formData}
        onChange={handleText}
      />
      <Form.Text className="text-muted">
        new label name
      </Form.Text>
      <br></br>
      <br></br>
      <input type="submit" onClick={handleSubmit} value="Submit" disabled={buttonState} />
    </>
  )
}