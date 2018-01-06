const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getForm: getForm,
  addForm: addForm,
};

function getForm(id) {
  let query = db.one('SELECT * FROM form WHERE id = ${id}', {id: id});
  return doQuery(query);
}

function addForm(client, form) {
  let query = db.one('INSERT INTO form(config) VALUES($1) RETURNING id', [form]);
  return doQuery(query);
}
