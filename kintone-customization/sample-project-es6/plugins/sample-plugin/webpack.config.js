const path = require(`path`);
const KintonePlugin = require(`@kintone/webpack-plugin-kintone-plugin`);

const MODE = `development`;
const enabledSourceMap = MODE === `development`;

module.exports = {
  mode: MODE,
  devtool: `eval-cheap-module-source-map`,
  entry: {
    desktop: `./src/js/desktop.js`,
    mobile: `./src/js/mobile.js`,
    config: `./src/js/config.js`
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, `plugin`, `js`),
    filename: `[name].js`
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          `style-loader`,
          {
            loader: `css-loader`,
            options: {
              url: false,
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      {
        test: /.(gif|png|jpg|jpeg|svg|wof|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          `url-loader`
        ]
      },
      {
        test: /\.(js)x?$/,
        use: [
          {
            loader: `babel-loader`,
            options: {
              presets: [
                `@babel/preset-env`,
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new KintonePlugin({
      manifestJSONPath: './plugin/manifest.json',
      privateKeyPath: './private.ppk',
      pluginZipPath: './dist/plugin.zip'
    })
  ]
};