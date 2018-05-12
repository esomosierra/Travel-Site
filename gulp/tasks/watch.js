var gulp          = require('gulp'),
    watch         = require('gulp-watch'),
    browserSync   = require('browser-sync').create();

/* GULP IS WATCHING ANY UPDATES IN INDEX.HTML AND CSS */
gulp.task('watch', function() {

    // INITIALIZE BROWSER SYNC TO POINT THE LOCATION OF THE BASE FOLDER.
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app",
        }
    });
    
    // AUTO REFRESH/RELOAD INDEX.HTML AFTER ANY SAVE CHANGES. 
    watch('./app/index.html', function() {
        browserSync.reload();
    });

    // GULP IS WATCHING CHANGES FROM "./APP/ASSETS/CSS" MAIN STYLES.CSS AND TRANSPILED IT TO THE STYLES.CSS LOCATED IN "./APP/TEMP/STYLES/"
    watch('./app/assets/css/**/*.css', function() {
        gulp.start('cssInject'); // TASK THAT NEWLY CREATED BELOW AS ARGUMENT HERE
    });

    // GULP IS WATCHING ANY JAVASCRIPTS CHANGES FROM "./APP/ASSETS/SCRIPTS"
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });

});

// LIVE INJECT OF ANY SAVE CHANGES OF THE MAIN STYLES.CSS LOCATED IN "./APP/ASSETS/CSS" WITHOUT EVEN AUTO REFRESH/RELOAD
// MAIN STYLES.CSS WILL THEN TRANSPILED TO STYLES.CSS LOCATED IN "./APP/TEMP/STYLES/"

gulp.task('cssInject', ['styles'], function() { // "['STYLES']" SERVES AS A DEPENDECIES OF 'CSSINJECT'. LOCATED IN: "GULP/TASKS/STYLES.JS"
                                                // BEFORE 'CSSINJECT' RUN, GULP WILL FIRST EXECUTE ['STYLES'] DEPENDENCY.
    return gulp.src('./app/temp/styles/styles.css') // Compiled CSS
        .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() { // "scripts" is a dependency from "GULP/TASKS/SCRIPTS.JS"
    browserSync.reload();
});