const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;

const sourceDir = 'public'; // Diretório de origem e destino
const files = fs.readdirSync(sourceDir);

files.forEach((file) => {
  const filePath = path.join(sourceDir, file);

  if (fs.statSync(filePath).isDirectory()) {
    // Se for um diretório, ignore
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Configuração para o html-minifier
  const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyCSS: true,
  };

  // Minificar o conteúdo HTML
  const minifiedContent = minify(content, minifyOptions);

  // Escrever o conteúdo minificado no arquivo original
  fs.writeFileSync(filePath, minifiedContent);
});
