module.exports = (api) => {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      }
    ],
    '@babel/typescript'
  ];
  const plugins = [
    [
      '@babel/proposal-class-properties'
    ]
  ];
  return {
    presets,
    plugins,
  };
};