var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
              test: /\.css$/,
              use: [
                'style-loader',
                'css-loader'
              ]
          },
          {
              test: /\.less$/,
              use: [{
                  loader: "style-loader"
              }, {
                  loader: "css-loader", options: {
                      sourceMap: false
                  }
              }, {
                  loader: "less-loader", options: {
                      sourceMap: false
                  }
              }]
          },
          {
              "exclude": "/node_modules/",
              "include": path.join(__dirname, 'src'),
              "use": [
                {
                    "loader": "babel-loader", "options": {
                        sourceMap: false,
                        "presets": ["react", "es2015", "stage-2"],
                        "plugins": [
                          "transform-object-rest-spread",
                          "transform-decorators-legacy",
                          "transform-class-properties"
                        ]
                    },
                }
              ],

              "test": /\.js?$/
          }
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: __dirname + '/src/index.html', to: __dirname + '/./public/index.html' },
      ]),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin()
    ]
};
