module.exports = {
    entry:'./src/main.js',
    output:{
        path: __dirname,
        filename: './build/main.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
