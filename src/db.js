const pgp = require('pg-promise')(/* options */);
const db  = pgp(process.env.DB_URI);

module.exports = {
  getClient: getClient,
  addClient: addClient,
};

function getClient(id) {
  let query = db.one('SELECT * FROM client WHERE id = ${id}', {id: id});
  return doQuery(query);
}

function addClient(name) {
  let query = db.one('INSERT INTO client(name) VALUES($1) RETURNING id', [name]);
  return doQuery(query);
}

function doQuery(queryPromise) {
  return queryPromise.catch(errorHandler);
}

function errorHandler(e) {
  console.error(e)
}
