module.exports = {
    entry:'./src/main.jsx',
    output:{
        path: __dirname,
        filename: './build/main.js'
    },
    module:{
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.scss$/,
                loader:'style!css!autoprefixer!sass'
            }
        ]
    }
};
