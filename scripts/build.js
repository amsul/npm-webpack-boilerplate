var debug            = require('debug')('scripts:build')
var browserSync      = require('browser-sync')
var del              = require('del')
var NodeSSH          = require('node-ssh')
var webpack          = require('webpack')
var WebpackDevServer = require('webpack-dev-server')

var config           = require('../webpack.config')



function start(isWatching, callback) {
  var compiler = webpack(config)
  if (isWatching) {
    var server = new WebpackDevServer(compiler, {})
    server.listen(8080, 'localhost')
  }
  else {
    compiler.run(callback)
  }
}



function clean() {
  // Use del (https://github.com/sindresorhus/del), the package Gulp
  // officially recommends to use for deleting files
  del.sync('_build/**', { force: true })
}



function deploy() {
  var ssh = new NodeSSH()
  ssh
    .connect({
      host: 'bostype.com',
      user: 'bostypec',
    })
    .then(function() {
      ssh.push('_build', '/home3/bostypec/www/commandlinepoweruser')
    })
}



module.exports = {
  start,
  clean,
  deploy,
}