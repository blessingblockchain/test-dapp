module.exports = function (config, env) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.[cm]?js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  modules: 'commonjs',
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
      ],
    },
  };
}
