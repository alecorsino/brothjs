//Karma test runner
module.exports = {

  unit: {
    options: {
      files: ['<%= site.src %>/scripts/**/*.js',
              'test/**/*.js'
            ],
      frameworks: ['mocha','chai','commonjs'],
      preprocessors: {
        'test/**/*.js': ['commonjs'],
        '<%= site.src %>/scripts/**/*.js':['commonjs']
      },
      browsers: ['Chrome']
    },
    autoWatch: true
  }

};
