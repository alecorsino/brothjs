var C = {}, //This module
    Skim = require('./skim.js'),
    Dom = require('../dom/broth.dom'),
    columnStyle = ['.broth-column {',
                   'float: left;',
                   'box-sizing: border-box; }'
                  ].join();

    C.createColumn = function(width,margin){
        var column = Dom.getClone('div');
        column.id = ['col-',V.newId()].join();
        column.style.cssText = rowStyle;
        width && (column.style.width = width);
        console.log('Col width:',column.style.width);
        return column;
    };
