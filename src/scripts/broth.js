var m_soup = require('./soup');

  function Broth(selector){
    if ( typeof selector === "string" ) {
      return new m_soup.Soup(selector);
    }

    console.log('just Broth, add some ingredients');
  };

  Broth.ready = function(fn){
    window.onload = function(){
      init();
      fn(); //User callback on doc ready
    }
  };

  function init(document){
    document = document || window.document;
    m_soup.init(document);
    console.log('Broth is ready to cook');
  };

module.exports =  Broth;
