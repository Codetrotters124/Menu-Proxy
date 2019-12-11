module.exports = {
  verbose: true,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transformIgnorePatterns: ['node_modules/(?!lodash-es/*|@angular/common/locales/*)'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['json', 'html', 'cobertura', 'text-summary'],
  setupFiles: [
    './Tests/setupTest.js',
  ]
};