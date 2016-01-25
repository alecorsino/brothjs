var V = {}, //This module
    Skim = require('./skim.js'),
    Dom = require('../dom/broth.dom'),
    viewStyle = ['.broth-view {'
                  'position: relative;',
                  'width: 100%;',
                  'max-width: 960px;',
                  'margin: 0 auto;',
                  'padding: 0 20px;',
                  'box-sizing: border-box; }'
                ].join(),

    exports.View = function(){
      var _view = V.createView();
    };

    View.protoype = {
      setParent: Skim.setParent
    };

/* ******** */

    V.createView = function(style){
        var view = Dom.createDocFragment(),
            div = Dom.getClone('div');
        div.style.cssText = viewStyle;
        div.id = ['view-',V.newId()].join();
        view.appendChild(div);
        return view;
    };

    // exports.createList = function(orientation){
    //
    // };
