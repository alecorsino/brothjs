var ET = {};

exports.enrichText = function(re,txt,st){
  if (txt){
      //TODO Check whether st is a class or inline style
      return txt.replace(re,'<span class="'+st+'">$&</span>');
  }else return
};
