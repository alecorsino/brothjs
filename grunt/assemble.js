//Assemble task
module.exports = function (grunt, options) {
  return  {
    options: {flatten: true},
    docs: {
      src: ['docs/index.hbs'],
      dest: '<%= site.dist %>/',
    }
  }
};
