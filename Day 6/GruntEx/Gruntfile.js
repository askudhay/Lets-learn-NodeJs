module.exports = function (grunt) {
    grunt.initConfig({ 
        copy: {
            main: {
              src: 'app.js',
              dest: 'bkup/app.bak', 
            },
          },
          uglify: {
            build: {
              files: {
                'app.js': ['app.js']
              }
            }
          }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('copy', ['copy']);
    grunt.registerTask('uglify', ['uglify']);
    grunt.registerTask('all', ['copy', 'uglify']);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

};