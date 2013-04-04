module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      target: {
        src: ['js/src/test.js','js/src/ajax.js'],
        dest: 'js/build/test.js'        
      }
    },
    uglify: {
      // 形式一
      // 'js/build/ajax.min.js': ['js/src/ajax.js', 'js/src/callbacks.js']

      // 形式二
      // build: {
      //   src: 'js/src/ajax.js',
      //   dest: 'js/build/ajax.min.js'
      // }

      // 形式四
      // minify: {
      //   files: [
      //     {src: ['js/src/ajax.js'], dest: 'js/build/ajax.min.js'}
      //   ]         
      // }

      // 形式五
      // minify: {
      //   files: [
      //     {
      //       expand: true,     // Enable dynamic expansion.
      //       src: ['js/src/*.js'], // Actual pattern(s) to match.
      //       dest: 'js/build/',   // Destination path prefix.
      //       ext: '.min.js'   // Dest filepaths will have this extension.
      //     }
      //   ]        
      // }

      // 可能不同的文件需要不同的压缩选项
      // minify: {

      // }

      // minify_advanced: {

      // }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};