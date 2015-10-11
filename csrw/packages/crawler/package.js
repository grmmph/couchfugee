Package.describe({
  name: 'crawler',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('crawler.js');
});

Npm.depends({
  'cheerio': '0.19.0',
  'request': '2.64.0',
  'future': '2.3.1'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('crawler');
  api.addFiles('crawler-tests.js');
});
