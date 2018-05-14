var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        App: './app/assets/scripts/App.js',
        Vendor: './app/assets/scripts/Vendor.js'
    },
    output: {
        path: path.resolve(__dirname, './app/temp/scripts'),
        filename: '[name].js' // Dynamic name for App and Vendor js
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}

/** 
 *  NOTE:
 *  
 *  TO TRIGGER WEBPACK BUNDLE REBUILD, JUST OPEN UP JS FILE INDICATED IN "ENTRY: { APP, VENDOR }" JS.
 */