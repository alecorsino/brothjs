module.exports = {

    bundle: {
      // webpack options
      entry: '<%= site.src %>/scripts/broth.js',
      output: {
          path: '<%= site.dist %>/scripts',
          filename: "broth-bundle.js",
          library: 'Broth'
      },
      stats: {
          // Configure the console output
          colors: true,
          modules: true,
          reasons: true
      },

    }
};
