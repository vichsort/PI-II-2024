<template> 
    <header>
      <nav>
        <a href="../assets/nave-logo.png" class="logo">
          <img src="../assets/nave-logo.png" alt="Ícone de um foguete" />
        </a>
        <ul>
          <li><a href="home" >Página Principal</a></li>
          <li><a href="pagina2" class="active">Linha do Tempo</a></li>
          <li><a href="pagina3">História</a></li>
          <li><a href="pagina4">Fórum</a></li>
          <li><a href="pagina5">Artigo</a></li>
          <li><a href="pagina6">Jogo</a></li>
        </ul>
        <a href="#" class="profile">
          <img src="" alt="Ícone de um perfil" />
        </a>
      </nav>
      <section class="hero">
        <h1>Beyond<span>Galaxy</span></h1>
        <p>Descubra um dos maiores projetos humanos para a exploração espacial</p>
        <button>Saiba Mais</button>
      </section>
      <div class="linha" ></div>
    </header>
</template>

<script>

export default {
  name: 'linhaTempo',
  components: {
    
  }
}
</script>

<style scoped>
header {
  height: 100vh;
  background: url("../assets/fundo-header.png");
  background-size: cover;
}

.logo img,
.profile img {
  height: 40px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}


 ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

ul li {
  margin: 0 15px;
}

ul li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: "Onest", sans-serif;
}

ul li a.active {
  border-bottom: 3px solid #C898EC;
  color: white;
}

nav ul li a:hover {
  color: #C898EC;
}

.hero {
  color: white;
  text-align: center;
  bottom: 10vh;
}

.hero h1 {
  color: #F0F0FA;
  font-size: 80px;
  margin-top: 130px;
  margin-right: 450px;
  font-family: "Onest", sans-serif;
}

.hero button{
  border-radius: 40px;
  padding: 20px 40px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.hero span {
  text-decoration: solid underline #C898EC 5px;
  border-radius: 10px; 
}

.hero p {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  font-family: "Onest", sans-serif;
  
}

.linha {
    position: absolute;
    width: 2px; /* Espessura da linha */
    height: 100vh; /* Altura total da tela */
    background-color: black;
    top: 0;
    left: 50%; /* Centraliza horizontalmente */
    transform-origin: top; /* Define o ponto de origem da transformação */
}
</style>
