const webpackPreprocessor = require('./webpack_preprocessor');

module.exports = on => {
  on('file:preprocessor', webpackPreprocessor);
};
