var webpack = require('webpack');

var config = {
  entry: __dirname + "/dev/js/index-build.js",

  output: {
    path: __dirname + "/build",
    filename: "bundle.min.js",
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|src)/,
        use: {
            loader: 'babel-loader'
            // options: {
            //     presets: ["env"]
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

  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }

};

module.exports = config;
