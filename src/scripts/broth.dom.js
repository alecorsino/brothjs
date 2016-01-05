var Dom = {};//This module.
var doc = document || window.document;
var domReadyCallBackList = [];

// Register a listener for DOM Ready without waiting for stylesheets, images
// and subframes to finish loading.
// Register a 'load' event instead.
Dom.readyEventHandler = function(){
      if (document.readyState == "complete") {
        Dom.domReady();
      }else{
        console.log('...Registering DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', Dom.DOMContentLoaded);
      };
  Dom.readyEventHandler = function(){}; // We need to execute the logic only once
};

Dom.addDomReadyCallback = function (fn){
    domReadyCallBackList.push(fn);
};

Dom.DOMContentLoaded =  function (event){
      console.log('DOM fully loaded');
      domReadyCallBackList.forEach(function(fn){
        fn();//User callback on doc ready
      });
      Dom.cleanUpDomReady();
};

//TODO Cleanup callback arrays
Dom.cleanUpDomReady = function (){
  // console.log('...Cleaning up dom ready');
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
//Should Return Soup ? to leverage all BothJS goodies!
exports.create = function(elem){
  return doc.createElement(elem);
};

exports.appendToBody = function(elem){
  doc.body.appendChild(elem);
};
