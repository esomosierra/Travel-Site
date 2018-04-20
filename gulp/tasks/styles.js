var gulp           = require('gulp'),
    watch          = require('gulp-watch'),
    postcss        = require('gulp-postcss'),
    autoprefixer   = require('autoprefixer'),
    cssvars        = require('postcss-simple-vars'),
    nested         = require('postcss-nested'),
    cssImport      = require('postcss-import'),
    mixins         = require('postcss-mixins'),
    hexrgba        = require('postcss-hexrgba');


/* GENERATES STYLES.CSS MAIN SRC LOCATION TO DESTINATION 'app/temp/styles' using pipe() */
gulp.task('styles', function() {

    // This needs to "return" because this is asynchrounous call.
    return gulp.src('./app/assets/css/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) { // ERROR HANDLING: Trigger readable error but gulp is still running.
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles')); 

});