<<<<<<< HEAD
import webpack from "webpack-stream";
import webPackConfig from '../webpack.prod.js';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			config: webPackConfig
		}))
		.pipe(app.gulp.dest(app.path.build.js));
=======
import webpack from "webpack-stream";
import webPackConfig from '../webpack.prod.js';

export const js = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			config: webPackConfig
		}))
		.pipe(app.gulp.dest(app.path.build.js));
>>>>>>> 23f5077db344d033c4b5c6bfc5bfd099b304678e
}