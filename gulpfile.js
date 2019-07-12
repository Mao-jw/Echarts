var gulp = require("gulp"),
  inlinesource = require("gulp-inline-source"),
  browserSync = require("browser-sync").create(),
  proxy = require("http-proxy-middleware");

gulp.task("default", function() {
  browserSync.init({
    ghostMode: false,
    server: {
      baseDir: "./"
    },
    port: 3003,
    middleware: [
      proxy("/api", {
        target: "http://192.168.100.150:8080",
        changeOrigin: true,
        protocolRewrite: "http",
        autoRewrite: true,
      })
    ]
  });
});
