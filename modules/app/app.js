var Backbone = require('backbone');
Backbone.$ = require('jquery');
var _ = require('underscore');
var common = require('common');

var ContactRouter = require('app/router');
var ContactModel = require('app/models/contact');
var ContactCollections = require('app/collections/contacts');
var ContactViews = require('app/views/contact');
var ContactsViews = require('app/views/contacts');
var ContactFormViews = require('app/views/contactForm');
App = {
  Models: {},
  Collections: {},
  Views: {},

  start: function(data) {
    var contacts = new ContactCollections(data.contacts),
        router = new ContactRouter();

    router.on('route:home', function() {
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:showContacts', function() {
      var contactsView = new ContactsViews({
        collection: contacts
      });

      Backbone.$('.main-container').html(contactsView.render().$el);
    });

    router.on('route:newContact', function() {
      var newContactForm = new ContactFormViews({
        model: new ContactModel()
      });

      newContactForm.on('form:submitted', function(attrs) {
        attrs.id = contacts.isEmpty() ? 1 : (_.max(contacts.pluck('id')) + 1);
        contacts.add(attrs);
        router.navigate('contacts', true);
      });

      Backbone.$('.main-container').html(newContactForm.render().$el);
    });

    router.on('route:editContact', function(id) {
      var contact = contacts.get(id),
          editContactForm;

      if (contact) {
        editContactForm = new ContactFormViews({
            model: contact
        });

        editContactForm.on('form:submitted', function(attrs) {
          contact.set(attrs);
          router.navigate('contacts', true);
        });

        Backbone.$('.main-container').html(editContactForm.render().$el);
      } else {
        router.navigate('contacts', true);
      }
    });

    Backbone.history.start();
  }
};
module.exports = App;

