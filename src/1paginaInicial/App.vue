<template>
  <div>
    <header>
      <nav>
        <a href="#" class="logo">
          <img src="" alt="Ícone de um foguete" />
        </a>
        <ul>
          <li><a href="#" class="active">Página Principal</a></li>
          <li><a href="#">Linha do Tempo</a></li>
          <li><a href="#">História</a></li>
          <li><a href="#">Fórum</a></li>
          <li><a href="#">Artigo</a></li>
          <li><a href="#">Jogo</a></li>
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
    </header>

    <section class="intro">
      <h3>BEM-VINDO AO <span>NOSSO SITE</span></h3>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <img src="" alt="Imagem de uma das Sondas" />
    </section>

    <section class="topics">
      <div>VOYAGERS: MISSÃO AO DESCONHECIDO</div>
      <div>ALorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
      <img src="" alt="Imagem de Júpiter" />
      <img src="" alt="Imagem de uma das sondas" />
      <img src="" alt="Imagem do Disco de Ouro" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
};
</script>

<style scoped>
header {
  height: 100vh;
  background: url();
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo img,
.profile img {
  height: 40px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
}

nav ul li a:hover {
  color: #C898EC;
}

nav a.active {
  border-bottom: 3px solid #C898EC;
  color: white;
}

.hero {
  color: white;
  text-align: center;
  bottom: 10vh;
}

.hero button {
  border-radius: 40px;
  padding: 20px 40px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.hero span {
  text-decoration: solid underline #C898EC 4px;
}

.hero p {
  text-align: center;
}

.intro {
  background-color: #080E22;
}

.intro p {
  color: white;
  font-size: 1.5em;
  padding: 10px;
  width: 70%;
  margin: 20px auto;
  text-align: left;
}

.intro h3 {
  color: white;
  margin-left: 45px;
  font-size: 50px ;
}

.intro span {
  color: #2552EA;
  text-align: end;
}

.intro img {
  padding-right: 10px;
  height: 497px;
  width: 431px;
  border-radius: 15%;
}
</style>