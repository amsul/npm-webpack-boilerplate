var BrowserSyncPlugin = require('browser-sync-webpack-plugin')



module.exports = {

  entry: './index',

  output: {
    path     : __dirname + '/_build',
    filename : 'index.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },

  module: {
    loaders: [
      {
        test   : /\.json$/,
        loader : 'json',
      },
      {
        test    : /\.jsx?$/,
        exclude : /^\.\/(scripts|node_modules)/,
        loader  : 'babel',
        query   : {
          cacheDirectory: '.babel',
        }
      },
      {
        test   : /\.(css|scss)$/,
        loader : 'style!css!autoprefixer?{browsers:["iOS >= 6", "last 2 Chrome versions"]}!sass',
      },
      {
        test    : /\.html$/,
        loader  : 'raw',
      },
      {
        test   : /\.(jpg|png|woff|eot|ttf|svg)$/,
        loader : 'url-loader',
        query  : {
          limit: 100000,
        },
      },
    ],
  },

  plugins: [

    // We can simply use webpack dev server's hot module replacement, which is more
    // advanced than browsersync: https://webpack.github.io/docs/webpack-dev-server.html
    // However it's early stage, so you can still use browsersync

    // FYI, if you've been using Gulp, Browsersync's official docs state:
    // > There's no official Browsersync plugin for Gulp, because it's not needed!
    // > You simply require the module, utilise the API and configure it with options.

    // new BrowserSyncPlugin(
    //   // BrowserSync options
    //   {
    //     // browse to http://localhost:3000/ during development
    //     host: 'localhost',
    //     port: 3000,
    //     // proxy the Webpack Dev Server endpoint
    //     // (which should be serving on http://localhost:8080/)
    //     // through BrowserSync
    //     proxy: 'http://localhost:8080/'
    //   },
    //   // plugin options
    //   {
    //     // prevent BrowserSync from reloading the page
    //     // and let Webpack Dev Server take care of this
    //     reload: false
    //   }
    // )

  ],

}