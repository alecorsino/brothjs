//Babel transpiler
module.exports = {
  options: {
      sourceMap: true,
      presets: ['babel-preset-es2015']
    },
    dist: {
      files: [{
        expand: true,
        cwd: '<%= site.src %>/scripts',
        src: ['{,*/}*.js'],
        dest: '<%= site.dist %>/scripts',
        ext: '.js',
        extDot: 'last' //for *.*.js files
      }]
    }
};
