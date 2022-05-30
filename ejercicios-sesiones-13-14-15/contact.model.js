export default class Contact {
  id;
  nombre;
  email;
  status = false;

  constructor(nombre, email, id, status) {
    this.nombre = nombre;
    this.email = email;
    this.id = id;
    this.status = status;
  }
}
