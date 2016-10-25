angular.module('myApp').service('srvc', function(){

var quotes = [
    { text: 'My mom left me when I was young',
    author: 'Nacho Libre'
    },
    { text: 'Have you seen our trousers?',
    author: 'The sisterhood'
    },
    { text: 'Yeah Yeah Yeah',
    author: 'Usher'
    }
];
//Send quotes data
this.getQuotes = function(){
  return quotes;
};
//Add new quotes
this.addData = function(newQuote){
    if(newQuote.text && newQuote.author){
      quotes.push(newQuote);
      return true;
    }
    return false;
};
//remove Quotes
this.removeData = function(index){
  return quotes.splice(index,1);
};
});
