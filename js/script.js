$(function(){
  // creates Quote model w/default attributes
  var Quote = Backbone.Model.extend({
    defaults: {
      text: '',
      author: ''
    }

  });

// creates Quotes collection, holds objects of Quote model
  var QuoteList = Backbone.Collection.extend({
    model: Quote

  });

  // creates pre-made collection of quotes
  var quotes = new QuoteList([
    new Quote({ author: 'Oscar Wilde', text: 'Be yourself; everyone else is already taken.' }),
    new Quote({ author: 'Mahatma Gandhi', text: 'Be the change that you wish to see in the world.' }),
    new Quote({ author: 'Eleanor Roosevelt', text: 'No one can make you feel inferior without your consent.' }),
    new Quote({ author: 'Martin Luther King, Jr.', text: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.' }),
    new Quote({ author: 'Marilyn Monroe', text: 'Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.' }),
  ]);

  // turning each quote into HTML
  var QuoteView = Backbone.View.extend({
    tagName: 'li',

    render: function(){
      // creating HTML

      this.$el.html('<h1>' + this.model.get('text') + '</h1>' + '<p> - ' + this.model.get('author') + '</p>');
      return this;

    }
  })

});
