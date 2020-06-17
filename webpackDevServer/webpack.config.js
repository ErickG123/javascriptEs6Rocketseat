module.exports = {
    entry: './src/main.js', // Arquivo principal
    output: { // Para qual lugar e arquivo eu devo enviar o código convertido
        path: __dirname + '/public', // Diretório do arquivo
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public' // Caminho onde ele vai abrir o servidor da aplicação
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};