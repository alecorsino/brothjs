var B = Broth,
    h,
    t;

Broth.ready(function(){
  Broth('#hoverme').addTooltip('Brothed!!');

  t = B('#UItoolTip'); //Our tooltip DIV

  h = B('#hoverme'); //Our #hoverme SPAN
  h.setStyle('border-color:green; border-style:solid');

});

//We can register multiple callback functions when the DOM is ready
B.ready(function(){
  console.log('Second function ready!!!');
  h.setStyle('color','#BADA55');
});
