import React from 'react'
import PropTypes from 'prop-types'
import ComponentB from './ComponentB'

const ComponentA = ({newContact, setNewContact}) => {
  return (
    <div>

      <h1>Bienvenido {`${newContact.nombre} ${newContact.apellido}`}</h1>

      <h2>Datos</h2>
      <p>
        Email: <span>{newContact.email}</span>
      </p>
      <p>
        Conectado: <span>{newContact.conectado ? "En Línea" : "No Disponible"}</span>
      </p>

      <ComponentB setNewContact={setNewContact} />
    </div>
  )
}

ComponentA.propTypes = {
  newContact: PropTypes.object,
  setNewContact: PropTypes.func
}

export default ComponentA