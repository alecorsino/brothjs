var S = {}, //This module
    tools = require('../tools/broth.tools'),
    Dom = require('../dom/broth.dom'),
    DH = require('./style.hyper');



exports.styleHyperTxt = DH.styleHyperTxt;

// TODO: pseudo elem tools.isPseudoElem(pseudo)
// .getComputedStyle(this.element,pseudo); i.e :after
exports.getStyle = function (value){
            cs = window.getComputedStyle(this.element);
            return value ? cs[value]:cs;
};

// Pass style property string and value string.
// .setStyle('background', '#BADA55'). Use camel case for properties
// i.e backgroundColor instead of background-color
//
// Or a String with multiple properties and values without passing a second param.
// .setTyle('background-color:#C0FFEE; display:block')
//
//TODO: pseudo elem
exports.setStyle =  function(style,value){
              if (value){
                this.element.style[style] = value;
              }
              else {
          			    this.element.style.cssText = style;
          		  }
};

exports.hide = function(){
              this.element.style.display = 'none';
};

  //TODO Should remember and restore previous display value instead!
exports.show = function(){
              this.element.style.display = '';
};
