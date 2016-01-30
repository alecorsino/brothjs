//browserSync
module.exports = {
  dev:{
        bsFiles: {
            src : ['<%= site.dist %>/scripts/**/*',
                    '<%= site.dist %>/*.html',
                    '<%= site.dist %>/*.js',
                    '<%= site.dist %>/*.css',
                  ]
        },
        options: {
            server: {
                baseDir: '<%= site.dist %>/'
            },
             watchTask: true
        }
    }
}
