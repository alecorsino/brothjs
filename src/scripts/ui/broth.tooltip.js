/* BrothJS Ui Tooltip */
var Dom = require('../broth.dom'),

    T = {}, //This Module
    Soup = require('../soup'),
    toolTipId = 'UItoolTip',
    toolTipStyle = 'display:none; background: #333; background:rgba(0,0,0,.8); border-radius: 5px; color: #FFFFFF;position:absolute; padding: 1em; z-index: 99;',
    tooltipDiv;

exports.createTooltipDiv = function (){
    tooltipDiv = Dom.create('div');
    tooltipDiv.id = toolTipId;
    tooltipDiv.style.cssText = toolTipStyle;
    tooltipDiv = new Soup(tooltipDiv);
    return tooltipDiv;
};

// Dom.appendToBody(tooltipDiv); //TODO Might be better off not to attach it to the BODY and let the user decide.
