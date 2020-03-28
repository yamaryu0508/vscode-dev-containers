const path = require(`path`);

const MODE = `development`;
const enabledSourceMap = MODE === `development`;

module.exports = {
  mode: MODE,
  entry: {
    'apps/sample-app/desktop': `./apps/sample-app/desktop.js`,
    'global/portal/desktop': `./global/portal/desktop.js`
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, `./dist`),
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
  }
};
