const gulp = require('gulp');
const exec = require('child_process').exec;
const rsync = require('gulp-rsync');
const { connectionString } = require('../credentials');

// Builds angular app
function build (cb) {
  exec('ng build --prod', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    return cb();
  });
}

// Deploy angular app
function sync (cb) {
  const orig = 'dist/';
  const dest = 'lughilsf@162.213.253.52:lugh-website/public_html';
  exec(`rsync -avz --delete --progress -e "${connectionString}" ${orig} ${dest} --stats`, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    return cb();
  });
}

exports.deploy = gulp.series(build, sync);