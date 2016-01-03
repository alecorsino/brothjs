var Dom = require ('./broth.dom'),
    Ui = require ('./broth.ui');
    Styles = require ('./styles/broth.styles');

  function Soup(selector){
    this.element = Dom.findElement(selector);
  };

  Soup.prototype = {
    addTooltip: Ui.addTooltip,
    findElement: Dom.findElement,
    getStyle: Styles.getStyle,
    setStyle: Styles.setStyle,
    hide: Styles.hide,
    show: Styles.show
  };

  function init(document){
    Ui.init(document);
    Dom.init(document);
  };

module.exports = {
  Soup:Soup,
  init:init
};
