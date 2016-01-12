exports.isString = function (s){
    return (typeof s === 'string')
};

//Matches ':Whatever' for now.
//TODO support only pseudo elements i.e. :after :hover: before, etc.
exports.isPseudoElem = function (e){
    if (this.isString(e)){
        if (e.match('/(^:[a-z]+)/i')){ return true}
    }
    else return false
};

exports.forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i],array);
  }
};

//TODO If a method is called multiple in short periods,
// like an window resize event handler, defers calling the function
// until a certain perdiod of time after iddle.
exports.debounce = function(){};

// TODO Similar to debounce but shoud fire once
// and then after an interval
exports.throttle = function(){};
