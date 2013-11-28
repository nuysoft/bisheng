'use strict';

var Mock = require('./bower_components/mockjs/dist/mock.js')
console.log(Mock.heredoc(function() {
    /*
 _   _           _      
| | | |         | |     
| |_| |_   _  __| | ___ 
|  _  | | | |/ _` |/ _ \
| | | | |_| | (_| |  __/
\_| |_/\__, |\__,_|\___|
        __/ |           
       |___/            
     */
}))

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'package.json', 'src/*.js', 'test/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        nodeunit: {
            options: {
                verbose: true
            },
            all: ['test/nodeuinit/*.js']
        },
        connect: { // :server:keepalive
            server: {
                options: {
                    port: 5000,
                    base: '.',
                    host: '0.0.0.0',
                    keepalive: true
                }
            }
        },
        watch: {
            dev: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint', 'nodeunit']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-nodeunit')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-connect')

    grunt.registerTask('default', ['jshint', 'nodeunit', 'watch'])
};