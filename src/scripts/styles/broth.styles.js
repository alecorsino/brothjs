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

// TODO: Decorate text. Pass a txt and return a styled text
// wrapped with new phrases tags i.e <em>
exports.decorate = function(decoFn){
    var decorated =[],
      content = this.element.innerHTML,
      m,
      i=0,
      re = /<("[^"]*?"|'[^']*?'|[^'">])*>/g; //Matches HTML tags

  // ['one','more text here'].join('');
console.log('String:',content);
    while ((m = re.exec(content)) !== null) {
      if (m.index === re.lastIndex) {
          re.lastIndex++;
      };
      decorated.push(content.slice(i,m.index));//Before index string
      decorated.push(content.slice(m.index,re.lastIndex));//After index string regex matched
      console.log('Mathed slice:',content.slice(m.index,re.lastIndex));
      i = re.lastIndex;
    };
  console.log(decorated);
};
