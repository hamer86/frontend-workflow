var gulp = require('gulp');
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');


gulp.task('watch',['browserSync','sass'], function(){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Other watchers
  })

gulp.task('sass',function(){
    return gulp.src('app/scss/styles.scss')
        .pipe(plumber({
            errorHandler: function (err) {
            console.log(err);
            this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('browserSync',function(){
    browserSync.init({
        server:{
            baseDir:'app'
        }
    })
})