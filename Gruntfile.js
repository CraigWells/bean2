var config = {
  src:  'src/public',
  dist: 'dist/public',
  node: 'node_modules'
}

module.exports = function (grunt) {

  // Configuration
  grunt.initConfig({
    config: config,
    copy: {
      dist: {
       files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['js/**', 'css/**', 'img/**', 'libs/**', 'views/**'],
          dest: '<%= config.dist %>'
       }]
      },
      init: {
      files: [{
            expand: true,
            cwd: '<%= config.node %>/angular',
            src: ['angular.min.js', 'angular.min.js.map'],
            dest: '<%= config.src %>/libs'
        },{
            expand: true,
            cwd: '<%= config.node %>/angular-route',
            src: ['angular-route.min.js', 'angular-route.min.js.map'],
            dest: '<%= config.src %>/libs'
        },
        {
            expand: true,
            cwd: '<%= config.node %>/angular-animate',
            src: ['angular-animate.min.js', 'angular-animate.min.js.map'],
            dest: '<%= config.src %>/libs'
         },
         {
            expand: true,
            cwd: '<%= config.node %>/jquery/dist',
            src: ['jquery.min.js'],
            dest: '<%= config.src %>/libs'
         },
         {
            expand: true,
            cwd: '<%= config.node %>/bootstrap/dist',
            src: ['css', 'fonts', 'js'],
            dest: '<%= config.src %>/libs/bootstrap'
         }
       ]        
      } 
    }, 
    uglify: {
    	js_files : {
	    	files: {
	        	'<%= config.dist %>/js/script.min.js' : ['<%= config.dist %>/js/script.js']
	      	}    		
	    }
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dist', ['copy:dist', 'uglify']);
  grunt.registerTask('init', ['copy:init']);

  grunt.registerTask('default', ['init', 'dist']);
};