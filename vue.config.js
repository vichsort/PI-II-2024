const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = { // evitem mexer nisso, mas aqui é o mapeamento das paginas
  pages: {
    home: {
      entry: 'src/1paginaInicial/main.js'
    },
    pagina2: {
      entry: 'src/2linhaTempo/main.js'
    },
    pagina3: {
      entry: 'src/3historiaSondas/main.js'
    },
    pagina4: {
      entry: 'src/4forumSondas/main.js'
    },
    pagina5: {
      entry: 'src/5artigoSondas/main.js'
    },
    pagina6: {
      entry: 'src/6jogoSondas/main.js'
    },
  }
}
