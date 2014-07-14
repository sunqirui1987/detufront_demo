var Backbone = require('backbone');
ContactModel = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar: null
  }
});
module.exports = ContactModel;
