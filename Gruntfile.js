/**
 * NodeFlow
 * https://github.com/alecorsino/workflow/
 * Copyright (c) 2015 Alejandro Corsino
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), 'grunt'),
      jitGrunt: {
        // customTasksDir: './grunt',
        staticMappings: {
                  useminPrepare: 'grunt-usemin'
        }
      },
      data: {
        site: grunt.file.readYAML('_config.yml').site
      }

  }); //Load-grunt
  // ****************************************

  grunt.registerTask('test', ['nodeunit']);
  grunt.registerTask('a', ['assemble']);
  grunt.registerTask('bcompile', ['babel']);
  grunt.registerTask('bsync', ['browserSync']);
  grunt.registerTask('cl', ['clean']);
  grunt.registerTask('cp', ['copy']);
  grunt.registerTask('wp', ['webpack']);
  grunt.registerTask('w', ['watch']);

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('dev', ['clean','copy','webpack','browserSync','watch']);

  grunt.registerTask('build', ['lint', 'babel']);

};
