import React, { useState } from "react";
import Contact from "../models/contact.model";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";

const initialContacts = [
  new Contact("Lucas", "lucas@gmail.com", 1),
  new Contact("Pedro", "pedro@gmail.com", 2),
  new Contact("Mario", "mario@gmail.com", 3),
];

const ContactComponent = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [id, setId] = useState(null);

  const deleteContact = (id) => {
    const flag = window.confirm(`Quieres eliminar este elemento con el id ${id}?`);
    if(flag) setContacts((contact) => contact.filter(c => c.id !== id));
  }

  const getContact = (id) => {
    const getContact = contacts.filter(contact => contact.id === id);
    setId(getContact);
  }

  const editContact = (contact) => {
    const newContacts = contacts.map(c => c.id === contact.id ? new Contact(contact.name, contact.email, contact.id, contact.status) : c);
    console.log(newContacts);
    setContacts(newContacts);
    setId(null);
  }

  const statusContact = (id) => {
    setContacts((contact) => contact.map(c => c.id === id ? {...c, status: !c.status} : c))
  }
  
  const addContact = (newContact) => {
    setContacts([
      ...contacts,
      {
        ...newContact,
        id: new Date().getMilliseconds()
      }
    ])
  }

  return (
    <div>
      <h1>Contacts</h1>
      <ContactTable 
        contacts={contacts} 
        deleteContact={deleteContact} 
        getContact={getContact} 
        statusContact={statusContact}
      />
      <ContactForm 
        addContact={addContact} 
        editContact={editContact} 
        id={id} 
      />
    </div>
  );
};

export default ContactComponent;
