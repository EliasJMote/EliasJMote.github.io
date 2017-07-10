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
	                'dist/about.html': 'src/about.html',     // 'destination': 'source'
	                'dist/footer.html': 'src/footer.html',
	                'dist/games.html': 'src/games.html',
	                'dist/index.html': 'src/index.html',
	                'dist/software.html': 'src/software.html',
	                'dist/websites.html': 'src/websites.html',
              	}
            },
            dev: {                                       // Another target 
              	files: {
	                'dist/about.html': 'src/about.html',
	                'dist/footer.html': 'src/footer.html',
	                'dist/games.html': 'src/games.html',
	                'dist/index.html': 'src/index.html',
	                'dist/software.html': 'src/software.html',
	                'dist/websites.html': 'src/websites.html',
              	}
            }
        },

        imagemin: {
        	dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'src/',
	                src: ['**/*.{png,jpg,gif}'],
	                dest: 'dist/'
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