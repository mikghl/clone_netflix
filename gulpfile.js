const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}
/////////////////////////////////////////////////////////
const imagemin = require('gulp-imagemin');

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}
////////////////////////////////////////////////////////
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/script/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}



exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}