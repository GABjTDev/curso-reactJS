export default class Task {
  id;
  title;
  date;
  status;

  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.date = new Date().toDateString();
    this.status = false;
  }
}
