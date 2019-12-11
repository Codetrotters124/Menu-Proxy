module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
        ],
        '@babel/preset-react'
      ]
    },
    production: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-react'
      ],
    },
    development: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-flow',
        '@babel/preset-react'
      ],
    }
  }
};
