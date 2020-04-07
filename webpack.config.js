const path = require('path');

const config = {
    entry: './src/Main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: 'dist/',
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  '@babel/plugin-transform-react-jsx',
                  '@babel/plugin-proposal-class-properties',
                ]
              }
            }
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: "babel-loader"
              },
              {
                loader: "react-svg-loader",
                options: {
                  jsx: true // true outputs JSX tags
                }
              }
            ]
          }
        ]
    }
}

module.exports = config;
