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
			sass : {
				files : '../css/*.scss',
				tasks : ['sass']
			},
			jekyll : {
				files : ['../**/*.html', '../css/*.scss'],
				tasks : ['jekyll']
			}
		},
		sass : {
			dist : {
				files : {
					'css/test.css' : 'css/test.scss'
				}
			}
		},
		browserSync : {
			bsFiles : {
				src : ['_site/css/*.css'],
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
	grunt.registerTask('build', ['sass', 'jekyll']);	
	grunt.registerTask('default', ['build', 'browserSync','watch']);		
}