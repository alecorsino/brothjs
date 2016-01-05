var Ui = require('./ui/broth.ui'),
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
    getStyle: Styles.getStyle,
    setStyle: Styles.setStyle,
    hide: Styles.hide,
    show: Styles.show
  };

  module.exports = Soup;
