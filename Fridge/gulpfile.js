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
import clean from "gulp-clean";
import server from "gulp-server-livereload";
import avif from "gulp-avif";
import webp from "gulp-webp";
import include from "gulp-include";

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
    js: "./src/js/*.js",
    css: "./src/scss/**/*.scss",
    html: "./src/html/pages/*.html",
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
  return (
    gulp
      .src(path.src.js)
      .pipe(concat("main.min.js"))
      // .pipe(uglify())
      .pipe(dest(path.bild.js))
  );
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
  return gulp
    .src(path.src.html)
    .pipe(
      include({
        includePaths: "./src/html/components",
      }),
    )
    .pipe(dest(path.bild.html));
}

async function img() {
  return gulp
    .src(path.src.img, { encoding: false })
    .pipe(newer(path.bild.img))
    .pipe(avif({ quality: 50 }))
    .pipe(dest(path.bild.img))

    .pipe(src(path.src.img, { encoding: false }))
    .pipe(newer(path.bild.img)) //Необходимо для того чтобы картинки минифицированные не повторялись
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
    }),
  );
}

// Только для этого проекта шрифты просто перекидываются
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
  parallel(img, styles, html, script, fonts),
  parallel(startServer, watching),
);

gulp.task("default", mainTasks);
