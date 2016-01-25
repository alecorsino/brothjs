var R = {}, //This module
    Skim = require('./skim.js'),
    Dom = require('../dom/broth.dom'),
    tools = require('../tools/broth.tools'),
    doc = document || window.document,
    rowStyle = ['.broth-row:after {',
                'content: "";',
                'display: table;',
                'clear: both; }'
              ].join();

    exports.Row = function(){
        var _row = R.createRow();
    };

    Row.protoype = {
      setParent: Skim.setParent
    };

/* ********** */
    R.createRow = function(){
        var row = Dom.getClone('div');
        row.id = ['row-',tools.newId()].join();
        row.style.cssText = rowStyle;
        return row;
    };
