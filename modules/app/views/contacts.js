var Backbone = require('backbone');
var _ = require('underscore');
var ContactViews = require('app/views/contact');
ContactsViews = Backbone.View.extend({

  template: __inline('./template/tpl-contacts.tmpl'),

  renderOne: function(contact) {
    var itemView = new ContactViews({model: contact});
    this.$('.contacts-container').append(itemView.render().$el);
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);

    this.collection.each(this.renderOne, this);

    return this;
  }
});
module.exports = ContactsViews;
