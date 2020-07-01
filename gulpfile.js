const gulp = require('gulp');
const exec = require('child_process').exec;
const { connectionString, dest, orig } = require('../credentials');

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
  exec(`rsync -avz --delete --progress -e "${connectionString}" ${orig} ${dest}`, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    return cb();
  });
}

exports.deploy = gulp.series(build, sync);