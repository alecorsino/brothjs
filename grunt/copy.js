// Copy
module.exports = {
    www: {
      files: [
        {expand: true, cwd: '<%= site.src %>', src: ['*'], dest: '<%= site.dist %>/'},

        // includes files within path
        // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
        //
        // // makes all src relative to cwd
        // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},
        //
        // // flattens results to a single level
        // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
      ],
    },
};
