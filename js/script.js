$(function(){
  var Quote = Backbone.Model.extend({
    defaults: {
      text: '',
      author: ''
    }

  });

  var QuoteList = Backbone.Collection.extend({
    model: Quote

  });

});
