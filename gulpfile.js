var gulp = require('gulp');

var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function () {
    browserSync.init(['*'], {
        proxy: "csstricksreact.dev",
        root: [__dirname],
        open: {
            file: 'index.php'
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    //gulp.watch('./sass/**/*.scss', ['sass']);
    //gulp.watch('jsgulp/*', ['js']);
    gulp.watch('*', browserSync.reload);
});

gulp.task('default', ['sass', 'js']);