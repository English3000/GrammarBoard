var path = require("path");
var webpack = require("webpack");

var plugins = [];
var devPlugins = [];

var prodPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: ["babel-polyfill", "./frontend/render.jsx"],
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      },
      {
        test: /\.(woff2?|jpe?g|png|gif|svg|ico)$/,
        loader: 'url-loader',
        options: {
            name: '[name]-[hash].[ext]',
            limit: 10000,
        }
      },
      {
        test: /\.(m4a)$/,
        use: {

          loader: 'file-loader',
          options: {
            name: '[name][md5:hash].[ext]',
            outputPath: 'audio/',
            publicPath: '/assets/audio/'
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
