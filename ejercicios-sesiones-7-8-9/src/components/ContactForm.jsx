import React, { useEffect, useRef } from "react";
import Contact from "../models/contact.model";

const ContactForm = ({addContact, id, editContact}) => {

  const inputName = useRef(null);
  const inputEmail = useRef(null);

  useEffect(() => {

    if(id){
      inputName.current.value = id[0].nombre;
      inputEmail.current.value = id[0].email;
    }

  }, [id])
  

  const handleSubmit = (e) => {

    let name = e.target.InputName.value.trim();
    let email = e.target.InputEmail.value.trim();


    if(name !== "" && email !== ""){

      if(id){
        editContact({...id[0], name, email})
      }else{
        addContact(new Contact(name, email))
      }

      e.target.InputName.value = "";
      e.target.InputEmail.value = "";
    }

    e.preventDefault();

  }


  return <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="InputName" className="form-label">Nombre</label>
        <input type="text" className="form-control" id="InputName" autoComplete="off" ref={inputName} />
      </div>
      <div className="mb-3">
        <label htmlFor="InputEmail" className="form-label">Email</label>
        <input type="email" className="form-control" id="InputEmail" autoComplete="off" ref={inputEmail}/>
      </div>
      <button type="submit" className="btn btn-primary">{id ? 'Editar' : "Crear"}</button>
  </form>
};

export default ContactForm;
