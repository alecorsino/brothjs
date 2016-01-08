var Dom = {},//This module.
    doc = document || window.document,
    domReadyCallBackList = [],
    tools = require('./tools/broth.tools');

// Register a listener for DOM Ready without waiting for stylesheets, images
// and subframes to finish loading.
// Register a 'load' event instead.
Dom.readyEventHandler = function(){
      if (document.readyState == "complete") {
        Dom.domReady();
      }else{
        document.addEventListener('DOMContentLoaded', Dom.DOMContentLoaded);
      };
  Dom.readyEventHandler = function(){}; // We need to execute the logic only once
};

Dom.addDomReadyCallback = function (fn){
    domReadyCallBackList.push(fn);
};

Dom.DOMContentLoaded =  function (event){
      tools.forEach(domReadyCallBackList,function(i,fn,array){
          fn();
      });
      Dom.cleanUpDomReady();
};

Dom.cleanUpDomReady = function (){
  domReadyCallBackList.length = 0;
  document.removeEventListener('DOMContentLoaded', Dom.domReady);
};

/* **** Public methods EXPORTS***** */
/* ******************************** */

exports.ready = function(fn){
  Dom.readyEventHandler();
  Dom.addDomReadyCallback(fn);
};

exports.findElement = function (selector){
  return doc.querySelector(selector);
};

//TODO Parse elem string.
//TODO Might change to DocumentFragment implementation.
//Should Return Soup ? to leverage all BothJS goodies!
exports.create = function(elem){
  return doc.createElement(elem);
};

exports.appendToBody = function(elem){
  doc.body.appendChild(elem);
};
