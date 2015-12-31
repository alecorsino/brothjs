module.exports =  function (grunt, options) {
   return {
      dist: {
        files: [{
          dot: true,
          src: [
            // '.tmp',
            '<%= site.dist %>/**/*'
          ]
        }]
      },
      // temp: '.tmp'
  }
};
