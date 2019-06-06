const path = require('path')
module.exports = {
    mode: 'development',
    // 从哪一个文件开始打包
    entry: './index.js',
    // 放到哪里
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        // 规则
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image/',
                    limit: 2048
                }
            }
        },{
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        }]
    }
}