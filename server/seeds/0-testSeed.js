
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('testTable').del()
    .then(function () {
      // Inserts seed entries
      return knex('testTable').insert([
        {id: 1, name: ''},
        {id: 2, name: ''},
        {id: 3, name: ''}
      ]);
    });
};
