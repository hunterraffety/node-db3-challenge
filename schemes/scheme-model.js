const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first()
    .then(scheme => {
      if (scheme) {
        return scheme;
      } else {
        return null;
      }
    });
}

function findSteps(id) {
  return db('steps')
    .innerJoin('schemes as s', 's.id', 'steps.scheme_id')
    .where({ scheme_id: id })
    .select(
      's.scheme_name as SchemeName',
      'steps.step_number as StepNumber',
      'steps.instructions as Instructions'
    );
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(id => ({ id }))
    .catch(error => {
      res.json(error);
    });
}

function update(changes, id) {
  return db('schemes')
    .where({ id: id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}
