var Backbone = require('backbone');
ContactRouter = Backbone.Router.extend({
  routes: {
    '': 'home',
    'contacts': 'showContacts',
    'contacts/new': 'newContact',
    'contacts/edit/:id': 'editContact'
  }
});

module.exports = ContactRouter;