import React from 'react'
import PropTypes from 'prop-types'

const ComponentB = ({setNewContact}) => {

  const handleStatus = () => {
    setNewContact((prevContact) => {
      return {
        ...prevContact,
        conectado: !prevContact.conectado
      }
    })
  }
  

  return (
    <button onClick={handleStatus}>Loguear</button>
  )
}

ComponentB.propTypes = {
  setNewContact: PropTypes.func
}

export default ComponentB