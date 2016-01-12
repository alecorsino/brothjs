var Soup = require('./soup');
var Dom = require('./dom/broth.dom');
var Syles = require('./styles/broth.styles');

//TODO Check Selector returns a valid elemen otherwise don't cook a Soup
function Broth(selector){
    if ( typeof selector === "string" ) {
        var e = Dom.findElement(selector);
        return new Soup(e); //MUST RECIEVE AN ELEMENT
    }else if (selector instanceof Soup){
        console.log('Instance of Soup');
    }

    console.log('...just Broth, add some ingredients');
};

Broth.create = function(type,id){
  var elem = Dom.create(type);
  elem.id = id || ''; //TODO some elemnt don't have ID
  return new Soup(elem);
};

  Broth.ready = Dom.ready;
  Broth.appendToBody = Dom.appendToBody;
  Broth.styleTxt = Syles.styleTxt;

/* Init Broth
   This method will initialise the engine
   and any module.
   TODO See Dom.DOMContentLoaded and check init method
        we should move it here
*/
Broth.ready(function(){

});

module.exports =  Broth;
