const path = require(`path`);
const ForkTsCheckerWebpackPlugin = require(`fork-ts-checker-webpack-plugin`);

const MODE = `development`;
const enabledSourceMap = MODE === `development`;

module.exports = {
  mode: MODE,
  entry: {
    'apps/sample-app/desktop': `./apps/sample-app/desktop.ts`,
    'global/portal/desktop': `./global/portal/desktop.ts`
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, `dist`),
    filename: `[name].js`
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `.jsx`, `.json`]
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
        test: /\.(ts|js)x?$/,
        loader: `babel-loader`,
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ]
};
