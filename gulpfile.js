const gulp = require("gulp");
const spawn = require("child_process").spawn;
const { connectionString, dest, orig } = require("../credentials");

// Builds angular app
function build(cb) {
  const building = spawn("ng", ["build", "--prod", "--verbose"]);
  building.stdout.on("data", function (data) {
    console.log(data.toString());
  });

  building.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  building.on("exit", function (code) {
    return cb();
  });
}

// Deploy angular app
function sync(cb) {
  const syncing = spawn("rsync", [
    "-avz",
    "--delete",
    "--progress",
    "-e",
    connectionString,
    orig,
    dest,
  ]);
  syncing.stdout.on("data", function (data) {
    console.log(data.toString());
  });

  syncing.stderr.on("data", function (data) {
    console.log(data.toString());
  });

  syncing.on("exit", function (code) {
    return cb();
  });
}

exports.deploy = gulp.series(build, sync);
