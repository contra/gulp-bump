var gulp = require('gulp');
var bump = require('../');

gulp.task('bump', function(){
  var options = {
    bump: 'minor'
  };
  gulp.src('./package.json')
  .pipe(bump(options))
  .pipe(gulp.dest('./'));
});


gulp.task('default', function(){
  gulp.run('bump');
});
