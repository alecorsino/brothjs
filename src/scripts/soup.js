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
    decorate: Styles.decorate,
    detach: Dom.detach,
    getStyle: Styles.getStyle,
    hide: Styles.hide,
    setStyle: Styles.setStyle,
    show: Styles.show,
  };

  module.exports = Soup;
