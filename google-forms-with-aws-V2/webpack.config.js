// webpack.config.js

const path = require('path');

module.exports = {
  // Your existing webpack configuration...
  
  resolve: {
    fallback: {
      "buffer": require.resolve("buffer/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "timers": require.resolve("timers-browserify"),
      "fs": false, // For the 'fs' module
      "net": false, // For the 'net' module
      "tls": false, // For the 'tls' module
    }
  }
};
