var gulp = require('gulp');
var liveServer = require('live-server');

gulp.task('serve', [], function () {
    var params = {
        port: 8080,
        host: "localhost",
        root: "./",
        open: false,
        file: "index.html",
        wait: 500
    };

    liveServer.start(params);
})