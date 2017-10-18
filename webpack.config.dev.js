var webpack = require('webpack');

var config = {
  devServer: {
    inline: true,
    hot: true,
    contentBase: __dirname + "/src",
    port: 3000,
    historyApiFallback: true
  },

  devtool: 'cheap-module-eval-source-map',

  entry: __dirname + "/dev/js/index.js",

  output: {
    path: __dirname + "/src/js",
    filename: "bundle.min.js",
    publicPath: 'js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|src)/,
        use: {
            loader: 'babel-loader'
            // options: {
            //     presets: ["es2015", "react", "stage-0"]
            // }
        }
      },
      {
        test: /\.scss/,
        use: {
            loader: "style-loader!css-loader!sass-loader"
        }
      },
      // for flexboxgrid
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};

module.exports = config;
