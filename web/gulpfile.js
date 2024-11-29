import gulp, { series, parallel, watch, src, dest } from "gulp";

import * as sass from "sass";
import gulpSass from "gulp-sass";
const scss = gulpSass(sass);
import autoprefixer from "gulp-autoprefixer";
import sourcemaps from "gulp-sourcemaps";
import concat from "gulp-concat";
import uglifyEs from "gulp-uglify-es";
const uglify = uglifyEs.default;
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import ttf2woff2 from "gulp-ttf2woff2";
import fonter from "gulp-fonter";
import clean from "gulp-clean";
import server from "gulp-server-livereload";
import avif from "gulp-avif";
import webp from "gulp-webp";
// import svgSprite from "gulp-svg-sprite";
// import include from "gulp-include";

// // styles {scss, sourcemap, autoprefix, minification}
// // images-raster {webp, avif, jpg/jpeg}
// // images-vector {sprite}
// // fonts {woff, woff2}

// // templates (markup)
// // scripts

// // optimisation (cache, args plugins)

const path = {
  bild: {
    js: "./dist/js/",
    css: "./dist/css/",
    html: "./dist/",
    img: "./dist/img/",
    fonts: "./dist/fonts/",
    // libs: "./dist/libs/",
  },
  src: {
    js: "./src/js/main.min.js",
    css: "./src/scss/*.scss",
    html: "./src/*.html",
    img: "./src/img/*.{jpg,jpeg,png}",
    fonts: "./src/fonts/*.{ttf,otf}",
    // libs: "./libs/**/*.*",
  },
  watch: {
    js: "./src/js/**/*.js",
    css: "./src/scss/**/*.scss",
    html: "./src/**/*.html",
    img: "./src/img/*.*",
    fonts: "./src/fonts/*.*",
    // libs: "./libs/**/*.*",
  },
};

function script() {
  return gulp
    .src(path.src.js)
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest(path.bild.js));
}

function styles() {
  return gulp
    .src(path.src.css)
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest(path.bild.css));
}

// function libs() {
//   return gulp.src(path.src.libs).pipe(dest(path.bild.libs));
// }

function html() {
  return gulp.src(path.src.html).pipe(dest(path.bild.html));
}

function img() {
  return gulp
    .src(path.src.img, { encoding: false })
    .pipe(newer(path.bild.img))
    .pipe(avif({ quality: 50 }))
    .pipe(dest(path.bild.img))

    .pipe(src(path.src.img), { encoding: false })
    .pipe(newer(path.bild.img))
    .pipe(imagemin())
    .pipe(dest(path.bild.img))

    .pipe(src(path.src.img, { encoding: false }))
    .pipe(newer(path.bild.img))
    .pipe(webp())
    .pipe(dest(path.bild.img))

    .pipe(src("./src/img/*.svg", { encoding: false }))
    .pipe(dest(path.bild.img));
}

function cleanDist() {
  return src("./dist", { allowEmpty: true }).pipe(clean());
}

function startServer() {
  return gulp.src("./dist/").pipe(
    server({
      livereload: true,
      open: true,
    })
  );
}

// async function fonts() {
//   return gulp
//     .src(path.src.fonts, { encoding: false })
//     .pipe(
//       fonter({
//         formats: ["woff", "ttf"],
//       })
//     )
//     .pipe(src("./src/fonts/*.ttf"))
//     .pipe(ttf2woff2())
//     .pipe(dest(path.bild.fonts))
//     .pipe(src("./src/fonts/*.woff2"))
//     .pipe(dest(path.bild.fonts));
// }

// Только для этого проекта
function fonts() {
  return gulp
    .src("./src/fonts/*.*", { encoding: false })
    .pipe(dest(path.bild.fonts));
}

function watching() {
  // watch(path.watch.libs, libs);
  watch(path.watch.html, html);
  watch(path.watch.css, styles);
  watch(path.watch.fonts, fonts);
  watch(path.watch.js, script);
  watch(path.watch.img, img);
}

const mainTasks = series(
  cleanDist,
  parallel(styles, html, script, img, fonts),
  parallel(startServer, watching)
);

gulp.task("default", mainTasks);
