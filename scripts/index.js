var debug    = require('debug')('scripts')
var program  = require('commander')
var notifier = require('node-notifier')

var build    = require('./build')
var pkg      = require('../package.json')



program
  .version(pkg.version)
  .option('-w, --watch', 'watch the source files to be rebuilt (true by default)')
  .option('-b, --build', 'build the source files into the output directory')
  .option('-c, --clean', 'clean the output directory')
  .option('-d, --deploy', 'deploy the code to a remote server')
  .parse(process.argv)



if (program.watch || program.build) {
  build.start(program.watch, function(err, stats) {

    if (err) {
      debug('unable to build: %o', err.message)
      notifier.notify({
        title   : 'Build failed',
        message : err.message
      })
      return
    }

    notifier.notify({
      title   : 'Build succeeded',
      message : '🙌'
    })

  })
}


else if (program.clean) {
  build.clean()
}


else if (program.deploy) {
  build.deploy()
}