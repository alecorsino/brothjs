//browserSync
module.exports = {
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
