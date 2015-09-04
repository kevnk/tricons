module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true
      },
      dev: {
        files: {
          './src/styles/css/styles.css': './src/styles/scss/styles.scss'
        }
      }
    },

    postcss: {
      options: {
        processors: require('autoprefixer-core')({browsers: 'last 2 versions'}),
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
            expand: true,
            cwd: './src/styles/scss',
            src: ['tricons/**', 'tricons.scss'],
            dest: './dist/',
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

      sass: {
        options: {
          reload: false,
          spawn: false
        },
        files: ['./src/styles/scss/*.scss', './src/styles/scss/tricons/*.scss'],
        tasks: ['dist']
      }
    }

  });

  grunt.registerTask('dist', ['sass', 'postcss', 'copy']);
  grunt.registerTask('default', ['dist', 'watch']);

};
