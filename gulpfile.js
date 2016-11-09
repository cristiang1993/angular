/*
* Dependencias
*/
var gulp = require('gulp');
 var  concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
 var minify = require('gulp-minify');
  var sourcemaps=require('gulp-sourcemaps');
   var cleanCSS=require('gulp-clean-css');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('juntar', function () { 
  gulp.src(['bower_components/angular/angular.min.js','bower_components/jquery/dist/jquery.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js'])
  .pipe(concat('vendor.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('public/javascripts/'));
});

// 'bower_components/bootstrap/dist/css/bootstrap.css

gulp.task('juntar2', function () {
    gulp.src(['bower_components/bootstrap/dist/css/bootstrap.css','bower_components/bootstrap/dist/css/bootstrap.css'])
        .pipe(minify({keepBreaks: true}))
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('public/stylesheets/'));
});