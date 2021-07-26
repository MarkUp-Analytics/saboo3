const path = require('path');

module.exports = {
    devServer: {
        port: 8080,
        proxy: {
          "/api/*": {
            target: "http://localhost:3000/",
            secure: false
          }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? "/static/" : '/', 
    outputDir: path.resolve(__dirname, "dist"),
}