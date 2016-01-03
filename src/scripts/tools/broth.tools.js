exports.isString = function (s){
    return (typeof s === 'string')
};

//Mathes ':Whatever' for now.
//Todo: support only pseudo elements i.e. :after :hover: before, etc.
exports.isPseudoElem = function (e){
    if (this.isString(e)){
        if (e.match('/(^:[a-z]+)/i')){ return true}
    }
    else return false
};
