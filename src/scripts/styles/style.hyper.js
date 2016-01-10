// TODO: Decorate Hypertext.
// Process All the text from all the children node element.
// This method extract the text from HTML and wraps it with
// css classes or inle styles

var DH = {},
    styledTxt,
    regTags = /<("[^"]*?"|'[^']*?'|[^'">])*>/g, //Matches HTML tags
    text,
    m,
    i = 0;

// Plan the use of this method as it
// starts adding multiple <em>s  tag around the if the reges is the same
//
// styleHyperTxt(/Broth/,'Myclass1 Myclass2') adds css classes
// or styleHyperTxt(/Broth/,'color:red; font-size:1em') adds inline styles
exports.styleHyperTxt = function(regex,style){
    text = this.element.innerHTML;
    styledTxt = [];

    while ((m = regTags.exec(text)) !== null) {
        if (m.index === regTags.lastIndex) {
            regTags.lastIndex++;
        };
        styledTxt.push(DH.enrichText(regex,
                                     text.slice(i,m.index),
                                     style));//Actual text to decorate
        styledTxt.push(m[0]);//Matched HTML tag string being ignored
        i = regTags.lastIndex;
    };

    if(i !== text.lenght){
      styledTxt.push(DH.enrichText(regex,
                                   text.slice(i,text.lenght),
                                   style))// Case where there is text after the last Match
    };

  this.element.innerHTML = styledTxt.join('');
};

DH.enrichText = function(re,txt,st){
  if (txt){
      //TODO Check whether st is a class or inline style
      return txt.replace(re,'<em class="'+st+'">$&</em>');
  }else return
}
