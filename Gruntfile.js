module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': false,
                    'style-disabled': false
                },
                src: ['src/*.html']
            }
        },

        htmlmin: {                                     // Task 
            dist: {                                      // Target 
            	options: {                                 // Target options 
	                removeComments: true,
	                collapseWhitespace: true,
	                minifyCSS: true,
	                minifyJS: true,
	                minifyURLs: true
              	},
              	files: {                                   // Dictionary of files 
	                'index.html': 'src/index.html',     // 'destination': 'source'
              	}
            },
            dev: {                                       // Another target 
              	files: {
	                'index.html': 'src/index.html',
              	}
            }
        },

        imagemin: {
        	dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'src/',
	                src: ['**/*.{png,jpg,gif}'],
	                dest: 'images/'
	            }]
        	}
        },

        watch: {
        	html: {
	        	files: ['src//*.html'],
	        	tasks: ['htmlhint', 'htmlmin', 'imagemin']
	        }
        }
    });

    grunt.registerTask('default', ['htmlhint', 'htmlmin', 'imagemin']);

};