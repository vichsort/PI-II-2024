<template>
    <header>
      <nav>
        <a href="../assets/nave-logo.png" class="logo">
          <img src="../assets/nave-logo.png" alt="Ícone de um foguete" />
        </a>
        <ul>
          <li><a href="home" class="active">Página Principal</a></li>
          <li><a href="pagina2">Linha do Tempo</a></li>
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
    </header>

    <section class="intro">
      <h3>BEM-VINDO AO <span><br> NOSSO SITE</span></h3>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui
      lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci
      elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur
      lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut
      nec tortor. Curabitur vel erat quis diam semper</p>
      <img src="../assets/Voyager1.jpg">
    </section>

    <section class="topics">
      <h1>VOYAGERS: MISSÃO AO<span><br> DESCONHECIDO</span></h1>
      <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui
      lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci
      elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur
      lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut
      nec tortor. Curabitur vel erat quis diam semper.</p>
    <div>
      <img class='imagem1' src="../assets/Jupiter.jpg"/>
      <img class="imagem2" src="../assets/voyager2.png"/>
      <img class="imagem3" src="../assets/DiscoOuro.jpg"/>
      <div1> 
        <h3>A Grande Conjunção</h3>
        <p>ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
      </div1>
    </div>

    </section>

</template>

<script>
export default {
  name: 'App',
  components: {}
};

</script>

<style scoped>
* {
  margin: 0;
  text-decoration: none;
}
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

.intro {
  background-color: #080E22;
  width: 100%;
  padding-bottom: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.intro p {
  color: #F0F0FA;
  font-size: 21px;
  margin-top: 2%;
  margin-left: 10%;
  max-width: 600px;
  overflow: hidden;
}

.intro h3 {
  color: #F0F0FA;
  font-size: 47px;
  margin-top: 6%;
  margin-left: 10%;
  overflow: hidden;
  font-family: "Onest", sans-serif;
}

.intro span {
  color: #2552EA;
}

.intro img {
  width: 40%;
  height: auto;
  margin-left: 75%;
  margin-top: -30%;
  border-radius: 15px;
  object-fit: contain;
  transform: translateX(-50%);
}

.topics {
  background-color: #111C41;
  width: 100%;
  padding-bottom: 90px;
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
}

.topics h1 {
  color: #F0F0FA;
  font-size: 2.9375rem;
  margin: 35px auto;
  max-width: 800px;
  line-height: 1.2; 
  text-align: center;
  overflow: hidden; 
}

.topics h3 {
  color:#F0F0FA;
  font-size: 40px;
  font-family: 'Onest', sans-serif;
  margin-left: 10%;
  margin-top: 5%;
}   

.topics p {
  color: #F0F0FA;
  font-family: 'Onest', sans-serif;
  font-size: 1.3125rem;
  line-height: 1.5;
  margin: 0 10%;
  padding: 0;
  max-width: auto;
  overflow: hidden;
  text-align: justify;
}

.topics span {
  text-decoration: underline;
  text-decoration-color: #C898EC;
  text-decoration-thickness: 6px;
  border-radius: 15%;
  text-align: center;
  font-weight: bold;
  color: #C898EC;
}

.div{
    display: flex;
    flex-direction: row;
}

.imagem1{
    margin-top: 40px;
    margin-left: 70px;
    width: 450px;
    height: 600px;
}
.imagem2{
    margin-top: 40px;
    margin-left: 100px;
    width: 270px;
    height: 600px;
}
.imagem3{
    margin-top: 40px;
    margin-left: 100px;
    width: 270px;
    height: 600px
}
</style>