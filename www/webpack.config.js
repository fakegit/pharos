var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require('webpack');
var path = require('path');

var basePath = __dirname;

function cssLoaders(loader) {
  var use;
  var isNode = false;

  use = isNode ? [
    'css-loader/locals'
  ] : [
      'style-loader',
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1
        }
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          // parser: 'sugarss',
          plugins: () => [
            require('autoprefixer')({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9' // React doesn't support IE8 anyway
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ];
  if (loader) {
    use.push(...loader);
  }
  return use;
}

module.exports = {
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    path: path.join(basePath, 'static'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './static', // Content base
    inline: true, // Enable watch and live reload
    host: '127.0.0.1',
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        loader: cssLoaders([{
          loader: 'less-loader'
        }])
      },
      {
        test: /\.(png|jpg|gif|ttf|eot|svg|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]&limit=200000'
        }
      }
    ]
  },
  plugins: [
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new webpack.ProvidePlugin({
        React: 'react'
      }),
      new webpack.DefinePlugin({
        'process.env.APP_ENV': JSON.stringify('development'),
        // 'process.env.NODE_ENV': JSON.stringify('development'),
        'CLIENT_RENDER': JSON.stringify('client_render')
      }),
  ],
};
