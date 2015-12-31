var doc;

  function init(document){
    doc = document || window.document;
  };

  function findElement(selector){
      return doc.querySelector(selector);
  }
module.exports = {
  init:init,
  findElement:findElement
};
