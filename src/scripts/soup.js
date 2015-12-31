var Dom = require ('./broth.dom'),
    Ui = require ('./broth.ui').UI;

  function Soup(selector){
    this.element = Dom.findElement(selector);
  };

  Soup.prototype = {
    addTooltip: Ui.addTooltip,
    findElement: Dom.findElement
  };

  function init(document){
    Ui.init(document);
    Dom.init(document);
  };

module.exports = {
  Soup:Soup,
  init:init
};
