const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = { // evitem mexer nisso, mas aqui é o mapeamento das paginas
  pages: {
    home: {
      entry: 'src/home/main.js'
    },
    pagina2: {
      entry: 'src/pagina2/main.js'
    },
    pagina3: {
      entry: 'src/pagina3/main.js'
    },
    pagina4: {
      entry: 'src/pagina4/main.js'
    },
  }
}
