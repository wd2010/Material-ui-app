require('./ignore.js')();
require('babel-polyfill');
require('babel-register')({
  presets: ['env', 'react', 'stage-0'],
  plugins: ["react-loadable/babel",'syntax-dynamic-import',"dynamic-import-node"]
});
require('./app.js');


