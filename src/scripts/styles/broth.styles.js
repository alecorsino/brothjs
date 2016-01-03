var tools = require('../tools/broth.tools');

// exports.getStyles = function (pseudo){
//               if (tools.isPseudoElem(pseudo)){
//                 return window.getComputedStyle(this.element,pseudo); // A Pseudo elemet i.e :after
//               }
//               else return window.getComputedStyle(this.element);
//         };

  //TODO: pseudo elem
exports.getStyle = function (value){
            cs = window.getComputedStyle(this.element);
            return value ? cs[value]:cs;
        };

  // Pass style property string and value string.
  // Or an object with multiple properties and values
  // Use camel case for properties i.e backgroundColor instead of background-color
  //TODO: pseudo elem
exports.setStyle =  function(style,value){
              if (tools.isString(style)){
                this.element.style[style] = value;
              }
              else {
                for(var prop in style){
          			    this.element.style[prop] = style[prop];
          		  }
              }

        };

exports.hide = function(){
              this.element.style.display = 'none';
        };

  //TODO Should remember and restore previous display value instead!
exports.show = function(){
              this.element.style.display = '';
        };
