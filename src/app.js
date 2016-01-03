var B = Broth,
    h,
    t;
Broth.ready(function(){
  Broth('#hoverme').addTooltip('Brothed!!');
  
  t = B('#UItoolTip'); //Our tooltip DIV

  h = B('#hoverme'); //Our heverme SPAN
  h.setStyle({borderColor:'green', borderStyle:'solid'});
  h.setStyle('color','#BADA55')
});
