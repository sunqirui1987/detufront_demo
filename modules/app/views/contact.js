var Backbone = require('backbone');
var _ = require('underscore');
ContactViews = Backbone.View.extend({
  tagName: 'li',
  className: 'media col-md-6 col-lg-4',
  template: __inline('./template/tpl-contact.tmpl'),

  events: {
    'click .delete-contract': 'onClickDelete'
  },

  initialize: function() {
    this.listenTo(this.model, 'remove', this.remove);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    this.$el.append(html);
    return this;
  },

  onClickDelete: function(e) {
    e.preventDefault();
    this.model.collection.remove(this.model);
  }
});
module.exports = ContactViews;