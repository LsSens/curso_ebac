// Gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Caminhos
const paths = {
    sass: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css'
    },
    images: {
        src: 'src/images/*',
        dest: 'dist/images'
    },
    scripts: {
        src: 'src/js/*.js',
        dest: 'dist/js'
    }
};

// Tarefa de SASS
function compileSass() {
    return gulp.src(paths.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dest));
}

// Tarefa de compressão de imagens
function compressImages() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Tarefa de compressão de JavaScript
function minifyScripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa padrão
const build = gulp.series(gulp.parallel(compileSass, compressImages, minifyScripts));

gulp.task('default', build);
