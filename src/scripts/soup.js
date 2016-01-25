var Ui = require('./ui/broth.ui'),
    Dom = require('./dom/broth.dom'),
    Styles = require('./styles/broth.styles'),
    tools = require('./tools/broth.tools');
    //
    // Ui.init();

//TODO Check if selector is anElement then wrap it with Soup.
  function Soup(elem){
      this.element = elem;
  };

  Soup.prototype = {
    addTooltip: Ui.addTooltip,
    styleHyperTxt: Styles.styleHyperTxt,
    detach: Dom.detach,
    getStyle: function (value){return Styles.getStyle(this.element,value)},
    hide: function (){Styles.hide(this.element)},
    setStyle: function (style,value){Styles.setStyle(this.element,style,value)},
    show: function (){Styles.show(this.element)}
  };

  module.exports = Soup;
