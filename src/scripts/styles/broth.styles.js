var S = {}, //This module
    tools = require('../tools/broth.tools'),
    Dom = require('../dom/broth.dom'),
    DH = require('./style.hyper'),
    ET = require('./enrich.text');



exports.styleHyperTxt = DH.styleHyperTxt;
exports.styleTxt = ET.enrichText;


// TODO: pseudo elem tools.isPseudoElem(pseudo)
// .getComputedStyle(this.element,pseudo); i.e :after
exports.getStyle = function (e,value){
  if (value && e.style[value]){
    return e.style.value
  }else{
    var cs = window.getComputedStyle(e);
    return value?cs[value]:cs
  }
};

// Pass element, style property string and value string.
// .setStyle(element,'background', '#BADA55'). Use camel case for properties
// i.e backgroundColor instead of background-color
//
// Or a String with multiple properties and values without passing a third param.
// .setTyle(element,'background-color:#C0FFEE; display:block')
//
//TODO: pseudo elem
exports.setStyle =  function(e,style,value){
    if (value){
      e.style[style] = value;
    }
    else {
			    e.style.cssText = style;
		  }
};

exports.hide = function(e){
    e.style.display = 'none';
};

  //TODO Should remember and restore previous display value instead!
exports.show = function(e){
    e.style.display = '';
};
