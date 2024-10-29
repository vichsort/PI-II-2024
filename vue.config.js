const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    index: {
      entry: 'src/1paginaInicial/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    linha: {
      entry: 'src/2linhaTempo/main.js',
      template: 'public/linha.html',
      filename: 'linha.html',
      title: 'linha Page',
      chunks: ['chunk-vendors', 'chunk-common', 'linha']
    },
    historia: {
      entry: 'src/3historiaSondas/main.js',
      template: 'public/historia.html',
      filename: 'historia.html',
      title: 'historia Page',
      chunks: ['chunk-vendors', 'chunk-common', 'historia']
    },
    forum: {
      entry: 'src/4forumSondas/main.js',
      template: 'public/forum.html',
      filename: 'forum.html',
      title: 'forum Page',
      chunks: ['chunk-vendors', 'chunk-common', 'forum']
    },
    artigo: {
      entry: 'src/5artigoSondas/main.js',
      template: 'public/artigo.html',
      filename: 'artigo.html',
      title: 'artigo Page',
      chunks: ['chunk-vendors', 'chunk-common', 'artigo']
    },
    jogo: {
      entry: 'src/6jogoSondas/main.js',
      template: 'public/jogo.html',
      filename: 'jogo.html',
      title: 'jogo Page',
      chunks: ['chunk-vendors', 'chunk-common', 'jogo']
    },

  }
}