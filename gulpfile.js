const gulp = require('gulp')
const sass = require('gulp-sass')

const browserSync = require('browser-sync').create()


/* ################# */
/* ##### Paths ##### */
/* ################# */

const PATHS = {
  scss: {
    compile: './src/scss/*.scss',
    watch: './src/scss/**/*',
    output: './dist/css'
  },
  html: './dist/**/*.html',
  dist: './dist'
}


/* ################ */
/* ##### SCSS ##### */
/* ################ */

gulp.task('sass', () => {
  return gulp.src(PATHS.scss.compile)
    .pipe(sass())
    .pipe(gulp.dest(PATHS.scss.output))
    .pipe(browserSync.stream())
})


/* ######################## */
/* ##### Browser-Sync ##### */
/* ######################## */

gulp.task('serve', ['sass'], () => {

  browserSync.init({
    server: PATHS.dist
  })

  gulp.watch(PATHS.scss.watch, ['sass'])
  gulp.watch(PATHS.html).on('change', browserSync.reload)
})

gulp.task('default', ['serve'])