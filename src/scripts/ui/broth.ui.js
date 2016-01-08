//TODO Move ui fragments to its own file.
var
    UI = {},
    Dom = require('../broth.dom'),
    doc = document || window.document,
    $tooltipDiv;

/*eslint-disable */
exports.addTooltip = function(txt){
  if (!$tooltipDiv){$tooltipDiv = require('./broth.tooltip').createTooltipDiv();//TODO FIX THIS SHIT!!!
  Dom.appendToBody($tooltipDiv.element);
}

    this.element.addEventListener('mouseover',function(event){
      $tooltipDiv.element.textContent = txt;
      $tooltipDiv.show();
      $tooltipDiv.element.style.top = event.pageY+'px';
      $tooltipDiv.element.style.left = event.pageX+'px';
      // $tooltipDiv.setStyle(['top:',event.pageY,'px;','left:',event.pageX,'px'].join('')); //NEED all the styles to be set

    },false);
    this.element.addEventListener('mouseout',function(event){
      $tooltipDiv.hide();

    },false);
    return this;
};

    exports.init = function (){
        // Dom.appendToBody($tooltipDiv.element);
    };

/*eslint-enable */
