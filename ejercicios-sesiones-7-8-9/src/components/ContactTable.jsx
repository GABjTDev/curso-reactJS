import React from "react";

const ContactTable = ({ contacts, deleteContact, getContact, statusContact }) => {
  return (
    <table className="container-md table table-dark table-hover mb-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Conectado</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => {
          return (
            <tr key={contact.id}>
              <th style={{width:"80px"}}>{contact.id}</th>
              <td>{contact.nombre}</td>
              <td>{contact.email}</td>
              <td style={{width:"150px"}}>{contact.status? 'Conectado' : 'No conectado'}</td>
              <td>
                <button type="button" className={`btn me-2 ${!contact.status? 'btn-success' : 'btn-secondary'}`} onClick={() => statusContact(contact.id)} style={{width:"120px"}}>
                  {!contact.status? 'Conectar' : 'Desconectar'}
                </button>
                <button type="button" className="btn btn-warning me-2" onClick={() => getContact(contact.id)}>
                  Editar
                </button>
                <button type="button" className="btn btn-danger" onClick={() => deleteContact(contact.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactTable;
