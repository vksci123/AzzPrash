module.exports  =   {
    entry: {
      "main": [
        './index.js'
      ]
    }
    , output: {
        path: './dist'
        , filename: 'bundle.js' 
    }
    ,devServer: {
        inline: true
        , port: 9999
    }
    ,module: {
        loaders : [
            {
                test: /\.js/
                , exclude: /(node_modules)/
                , loader: 'babel-loader'
            },
            { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },

            { test: /\.less$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
        ]
    }
}
