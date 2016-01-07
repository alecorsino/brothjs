var Soup = require('./soup');
var Dom = require('./broth.dom');

//TODO Check Selector returns a valid elemen otherwise don't cook a Soup
  function Broth(selector){
    if ( typeof selector === "string" ) {
      var e = Dom.findElement(selector);
      return new Soup(e); //MUST RECIEVE AN ELEMENT
    }

    console.log('...just Broth, add some ingredients');
  };

// Modular design, we can swap implemntations
// to support different browsers when needed.
  Broth.ready = Dom.ready;

  Broth.create = function(type,id){
    var elem = Dom.create(type);
    elem.id = id || ''; //TODO some elemnt don't have ID
    return new Soup(elem);
  }

module.exports =  Broth;
