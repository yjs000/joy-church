const path = require('path')

module.exports = (env) => {
    let clientPath = path.resolve(__dirname, 'src/main/client');
    let outputPath = path.resolve(__dirname, 'out');

    return {
        mode: "development",
        entry: {
            index: clientPath + '/index.js'
        },
        output: {
            path: outputPath,
            filename: '[name].js'
        },
        devServer: {
            host: '0.0.0.0',
            port: 8081,
            proxy: {
                '**': 'http://127.0.0.1:8080'
            },
            hot: false
        }
    }
}