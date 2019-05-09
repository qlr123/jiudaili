const gulp=require("gulp");
const sass=require("gulp-sass");
const sourcemaps=require("gulp-sourcemaps");

gulp.task("sass",function(){
	gulp.src("../css/ency.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("../css/"))
});  

gulp.task("watch",function(){
	gulp.watch("../css/ency.scss",["sass"]);
})




