const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const clean = require("gulp-clean");
const server = require("gulp-server-livereload");

// styles {scss, sourcemap, autoprefix, minification}
// images-raster {webp, avif, jpg/jpeg}
// images-vector {sprite}
// fonts {woff, woff2}

// templates (markup)
// scripts

// optimisation (cache, args plugins)

function styles() {
  return src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./dist/css"));
}

function script() {
  return src("src/js/main.js")
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("./dist/js"));
}

function markup() {
  return src("src/index.html").pipe(dest("./dist"));
}

// function building() {
//   return src(
//     [
//       "src/dist/style.min.css",
//       "src/dist/main.min.js",
//       "src/dist/*.html",
//       "src / images/**/ *",
//     ],
//     { base: "src" }
//   ).pipe(dest("bild"));
// }

function copyImages() {
  return src("src/images/**/*", { encoding: false }).pipe(
    dest("./dist/images")
  );
}

function copyFonts() {
  return src("src/fonts/**/*", { encoding: false }).pipe(dest("./dist/fonts"));
}

function cleanDist() {
  return src("dist", { allowEmpty: true }).pipe(clean());
}

/// Наблюдатель, смотрит за исходными файлами и запускает целевые задачи
function watching() {
  watch(["src/scss/**/*.scss"], styles);
  watch(["src/js/main.js"], script);
  watch(["src/**/*.html"], markup);
  watch(["src/images/**/*"], copyImages);
}

function startServer() {
  return src("./dist/").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
}

exports.markup = markup;
exports.script = script;
exports.styles = styles;
exports.copyImages = copyImages;
exports.copyFonts = copyFonts;

exports.watching = watching;
exports.startServer = startServer;

exports.cleanDist = cleanDist;

exports.default = series(
  cleanDist,
  parallel(styles, markup, script, copyImages, copyFonts),

  parallel(startServer, watching)
);
