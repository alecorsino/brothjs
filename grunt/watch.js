//Watch for changes
module.exports = function (grunt, options) {
  return  {
    // jshint: {
    //   files: ['<%= jshint.all %>'],
    //   tasks: ['jshint:lint']
    // },
    webpack:{
      files:['<%= site.src %>/scripts/**/*'],
      tasks:['webpack']
    },
    www:{
      files:['<%= site.src %>/*.js',
            '<%= site.src %>/*.css',
            '<%= site.src %>/*.html'
            ],
      tasks:['copy:www']
    }
  }
};
