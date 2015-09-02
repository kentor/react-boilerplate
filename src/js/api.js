const axios = require('axios');

function API(base, request) {
  this.base = base;
  this.request = request;
}

Object.assign(API.prototype, {
  createTodo(text) {
    return this.request({
      url: this.url('todos'),
      method: 'post',
      data: { text },
    });
  },

  deleteTodo(id) {
    return this.request({
      url: this.url('todos', id),
      method: 'delete',
    });
  },

  getTodos() {
    return this.request({
      url: this.url('todos'),
    });
  },

  updateTodo(id, data) {
    return this.request({
      url: this.url('todos', id),
      method: 'patch',
      data,
    });
  },

  createMember(data) {
    return this.request({
      url: this.url('members'),
      method: 'post',
      data,
    });
  },

  deleteMember(id) {
    return this.request({
      url: this.url('members', id),
      method: 'delete',
    });
  },

  getMembers() {
    return this.request({
      url: this.url('members'),
    });
  },

  url(...args) {
    return `${this.base}${args.join('/')}.json`;
  },
});

module.exports = new API('https://kentor1.firebaseio.com/', axios);
