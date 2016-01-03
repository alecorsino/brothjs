var UI = {},
    _toolTipId = 'UItoolTip',
    _toolTipStyle = 'display:none; background: #333; background:rgba(0,0,0,.8); border-radius: 5px; color: #FFFFFF;position:absolute; padding: 1em; z-index: 99;',
    _tooltipDiv,
    doc;

/*eslint-disable */

    UI.addTooltip = addTooltip;
    UI.init = init;
    UI.createTooltipDiv = createTooltipDiv;

    function addTooltip(txt){
        this.element.addEventListener('mouseover',function(event){
          _tooltipDiv.textContent = txt;
          _tooltipDiv.style.display = 'block';
          _tooltipDiv.style.top = event.pageY+'px';
          _tooltipDiv.style.left = event.pageX+'px';
            // console.log('X:',event.pageX,txt);
            // console.log('Y:',event.pageY,txt);

        },false);
        this.element.addEventListener('mouseout',function(event){
          _tooltipDiv.style.display = 'none';

        },false);
        return this;
    };

    function init(document){
        doc = document;
        createTooltipDiv();
    };

    function createTooltipDiv(){
        _tooltipDiv = doc.createElement('div');
        _tooltipDiv.id = _toolTipId;
        _tooltipDiv.style.cssText = _toolTipStyle;
        doc.body.appendChild(_tooltipDiv);
    };

  module.exports = UI;
/*eslint-enable */
