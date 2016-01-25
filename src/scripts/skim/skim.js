var S = {},
    Dom = require('../dom/broth.dom');


exports.setParent = function(parent){
    dom.appendTo(parent,this._row);
};
