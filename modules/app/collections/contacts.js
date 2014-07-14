var Backbone = require('backbone');
var ContactModel = require('app/models/contact');
ContactCollections = Backbone.Collection.extend({
  model: ContactModel
});
module.exports = ContactCollections;
