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
      }
    },

    copy: {
      dist: {
        files: [
          {
            src: ['./src/styles/less/tricons.less'],
            dest: './dist/tricons.less'
          },
          {
            src: ['./src/scripts/js/tricons.js'],
            dest: './dist/tricons.js'
          }
        ]
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
        tasks: ['dist']
      }
    }

  });

  grunt.registerTask('dist', ['less', 'postcss', 'copy']);
  grunt.registerTask('default', ['dist', 'watch']);

};
