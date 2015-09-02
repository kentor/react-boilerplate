const Immutable = require('immutable');

const Member = Immutable.Record({
  email: '',
  id: '',
  name: '',
});

module.exports = Member;
