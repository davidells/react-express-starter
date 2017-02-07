 var webpack = require('webpack');

 var env = process.env.NODE_ENV;
 var prod = env === 'production';

 var config = {
   entry: {
     'vendor': ['react', 'react-dom', 'react-redux', 'redux', 'redux-thunk', 'backbone', 'underscore', 'jquery'],
     'index': './client/index.js'
   },
   devtool: prod ? 'source-map' : null,
   output: {
     path: './public/js/',
     filename: '[name].bundle.js',
     sourceMap: prod ? '[file].map' : null
   },
   plugins: [
     new webpack.DefinePlugin({
       'process.env': {
         'NODE_ENV': JSON.stringify(env)
       }
     }),
     // See https://github.com/webpack/webpack/tree/master/examples/common-chunk-and-vendor-chunk
     new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
     new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
   ],
   module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['es2015', 'react', 'stage-2']
         }
       },
       {
         test: /\.json$/,
         loader: 'json-loader'
       }
     ]
   }
 };

 if (prod) {
   config.plugins.push(new webpack.optimize.UglifyJsPlugin({
     compress: {
       warnings: true
     }
   }));
 }

 module.exports = config;
