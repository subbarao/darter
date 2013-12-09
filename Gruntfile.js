module.exports = function(grunt) {
  grunt.initConfig({
    dart2js: {
      build: {
        src: 'dart/*.dart', dest: 'dist/out.js'
      }
    },
    watch: {
      scripts: {
        files: ['dart/*.dart'],
        tasks: ['darter'],
        options: {
          spawn: false
        }
      }
    },
  })

  var homeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
  var dart = homeDir + "/dart/dart-sdk/bin/dart";

  grunt.registerTask('darter', function(){
      var process = grunt.util.spawn(
        {
          cmd: dart,
          args: ['dart/test.dart'],
          opts: {
            stdio: 'inherit'
          }
        },
        function (error, result, code) {
          grunt.log.writeln("Error code:" + error);
        }
      );

  })

  grunt.loadNpmTasks('grunt-dart2js')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['watch'])
};
