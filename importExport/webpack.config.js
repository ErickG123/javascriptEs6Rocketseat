module.exports = {
    entry: './main.js', // Arquivo principal
    output: { // Para qual lugar e arquivo eu devo enviar o código convertido
        path: __dirname, // Diretório do arquivo
        filename: 'bundle.js'
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