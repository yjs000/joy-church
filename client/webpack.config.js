const path = require('path')

module.exports = () => {
    let outputPath = path.resolve(__dirname, 'dist');

    return {
        mode: "development",
        entry: {
            index: path.resolve(__dirname, 'index.js')
        },
        output: {
            path: outputPath,
            filename: 'index.js'
        },
        devServer: {
            static : {
                directory: outputPath
            },
            port: 8081,
            proxy: {
                '**': 'http://127.0.0.1:8080'
            },
        }
    }
}