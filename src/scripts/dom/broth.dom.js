var Dom = {},//This module.
    doc = document || window.document,
    domReadyCallBackList = [],
    tools = require('../tools/broth.tools'),
    cons = require('../broth.const');

Dom.elementCache = {};

// Initialise Broth engine stuff whne DOM ready.
// TODO: This needs performncae test to see the real improvemnt
// of Cloning vs Creating
Dom.init = function(){
  Dom.elementCache.div = doc.createElement('div');
  Dom.elementCache.em = doc.createElement('em');
  Dom.elementCache.span = doc.createElement('span');
};
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

//TODO check readystate
Dom.pageLoadedEventHandler = function(){
    document.addEventListener("load", function(event) {
        console.log("All resources finished loading!");
    });
};

Dom.addDomReadyCallback = function (fn){
    domReadyCallBackList.push(fn);
};

Dom.DOMContentLoaded =  function (event){
      Dom.init();// Initialise Broth stuff if needed
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

// exports.elementCache = Dom.elementCache;
exports.getClone = function(e){
  return Dom.elementCache[e].cloneNode(false);
}
// Appends passed element node to the body element
exports.appendToBody = function(elem){
  doc.body.appendChild(elem);
};

// Appends passed element node to the body element
exports.appendTo = function(parent,elem){
  parent.appendChild(elem);
};

//TODO Parse elem string.
//TODO Might change to DocumentFragment implementation.
//Should Return Soup ? to leverage all BothJS goodies!
exports.create = function(elem){
  return doc.createElement(elem);
};

exports.createDocFragment = function(){
  return doc.createDocumentFragment();
}

// Detach the actual element node from its parent node
// and returns it.
exports.detach = function(){
  this.element.parentNode.removeChild(this.element);
  return this;
};

exports.findElement = function (selector){
  return doc.querySelector(selector);
};

exports.ready = function(fn){
  Dom.readyEventHandler();
  Dom.addDomReadyCallback(fn);
};
