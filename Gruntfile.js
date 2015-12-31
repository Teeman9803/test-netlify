module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jekyll : {
			build : {
				dest : '_site'
			}	
		},
		watch : {
			jekyll : {
				files : ['_includes/*.html', '_sass/*.scss'],
				tasks : ['jekyll']
			}
		},
		browserSync : {
			bsFiles : {
				src : ['_site/css/*.css', '_includes/*.html'],
			},
			options : {
				watchTask : true,
				ghostMode : {
					clicks : true,
					scroll : true,
					links : true,
					forms : true
				},
				server : {
					baseDir : '_site'
				}				
			}
		}
	});
	grunt.registerTask('build', ['jekyll']);	
	grunt.registerTask('default', ['build', 'browserSync','watch']);		
}