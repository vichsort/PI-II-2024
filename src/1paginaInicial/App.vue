<template>
  <div>
    <header>
      <nav>
        <a href="../assets/nave-logo.png" class="logo">
          <img src="" alt="Ícone de um foguete" />
        </a>
        <ul>
          <li><a href="home" class="active">Página Principal</a></li>
          <li><a href="pagina2">Linha do Tempo</a></li>
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
      <h3>BEM-VINDO AO <span><br> NOSSO SITE</span></h3>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      <img src="../assets/Voyager1.jpg">
    </section>

    <section class="topics">
      <div>VOYAGERS: MISSÃO AO DESCONHECIDO</div>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui
      lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci
      elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur
      lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut
      nec tortor. Curabitur vel erat quis diam semper.</p>
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
  background: url("../assets/fundo-header.png");
  background-size: cover;
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

.hero h1 {
  color: #F0F0FA;
  font-size: 47px;
  margin-top: 110px;
  margin-left: 130px;
  overflow: hidden;
  font-family: "Onest", sans-serif;
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
  border-radius: 20%;
}

.hero p {
  text-align: center;
}

.intro {
  background-color: #080E22;
  width: 100%;
  padding-bottom: 90px;
  display: flex; /* Flexbox para controle mais preciso */
  flex-direction: column; /* Coloca o h1 em uma coluna */
  align-items: flex-start; /* Mantém o alinhamento inicial */
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
  color: #F0F0FA;
  font-size: 47px;
  margin-top: 110px;
  margin-left: 130px;
  overflow: hidden;
  font-family: "Onest", sans-serif;
}

.intro span {
  color: #2552EA;
}

.intro img {
  width: 480px; 
  height: auto;
  margin-left: 830px;
  margin-top: -360px;
  overflow: hidden;
  border-radius: 15px;
}
</style>