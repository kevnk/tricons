module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          'sourceMapFileInline': true,
          'sourceMap': true,
        },
        files: {
          './src/styles/css/styles.css': './src/styles/less/styles.less'
        },
      },
      dist: {
        options: {
          'compressed': true,
        },
        files: {
          './dist/tricons.css': './src/styles/less/tricons.less'
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dev: {
        options: {
          map: true,
        },
        src: './src/styles/css/styles.css'
      },
      dist: {
        src: './dist/tricons.css'
      }
    },

    watch: {
      options: {
        livereload: 33333
      },

       grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      views: {
        files: ['./src/index.html']
      },

      less: {
        options: {
          reload: false,
          spawn: false
        },
        files: './src/styles/less/**/*.less',
        tasks: ['less', 'postcss']
      }
    }

  });

  grunt.registerTask('dist', ['less', 'postcss']);
  grunt.registerTask('default', ['dist', 'watch']);

};
