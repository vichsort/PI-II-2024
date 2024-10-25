<template>
  <section class="section1">
    <h1 class="titulo1">BEM-VINDO AO</h1>
    <h1 class="titulo2">NOSSO SITE</h1>
    <p class="texto1">ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium
      lacinia, dolor dui lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst.
      Suspendisse eget orci elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat
      dictum. Cras ac efficitur lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem
      bibendum dui ornare cursus ut nec tortor. Curabitur vel erat quis diam semper</p>
    <img src="Voyager1.jpg" class="imagem1">
  </section>
  <section class="section2">
    <h1 class="titulo3">VOYAGERS: MISSÃO AO</h1>
    <h1 class="titulo4">DESCONHECIDO</h1>
    <img src="../assets/linha.jpg" class="imagem2">
    <p class="texto2">
      ALorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, arcu nec pretium lacinia, dolor dui
      lobortis nunc, sed condimentum libero orci ut odio. In hac habitasse platea dictumst. Suspendisse eget orci
      elementum, porttitor turpis sed, ultrices dui. Vestibulum consequat augue ac mi feugiat dictum. Cras ac efficitur
      lorem, in ultricies tellus. Duis accumsan nulla eu pretium mattis. Vestibulum ac sem bibendum dui ornare cursus ut
      nec tortor. Curabitur vel erat quis diam semper
    </p>
    <div>
      <img src="../assets/Jupiter.jpg" class="imagem3">
      <img src="../assets/Voyager2.jpg" class="imagem4">
      <img src="../assets/DiscoOuro.jpg" class="imagem5">
    </div>

  </section>
</template>

<script>

export default {
  name: 'paginaInicial',
  components: {

  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Onest", sans-serif;
    font-weight: 100;
}

.section1 {
    background-color: #080E22;
    width: 100%;
    padding-bottom: 90px;
    display: flex; /* Flexbox para controle mais preciso */
    flex-direction: column; /* Coloca o h1 em uma coluna */
    align-items: flex-start; /* Mantém o alinhamento inicial */
}


.titulo1{
    color: #F0F0FA;
    font-size: 47px;
    margin-top: 110px;
    margin-left: 130px;
    overflow: hidden;
    font-family: "Onest", sans-serif;
}

.titulo2{
    color: #2552EA;
    font-size: 47px;
    margin-left: 130px;
    overflow: hidden;
}
.texto1{
    color: #F0F0FA;
    font-size: 21px;
    margin-top: 60px;
    margin-left: 130px;
    max-width: 680px;
    overflow: hidden;
}
.imagem1{
    width: 480px; 
    height: auto;
    margin-left: 830px;
    margin-top: -360px;
    overflow: hidden;
    border-radius: 15px;
}

.section2 {
    background-color: #111C41;
    width: 100%;
    padding-bottom: 90px;
    display: flex; /* Flexbox para controle mais preciso */
    flex-direction: column; /* Coloca o h1 em uma coluna */
    align-items: flex-start; /* Mantém o alinhamento inicial */
}

.titulo3{
    color: #F0F0FA;
    font-size: 47px;
    margin-top: 35px;
    margin-left: 380px;
    overflow: hidden;
    text-align: center;
}
.titulo4{
    color: #C898EC;
    font-size: 47px;
    margin-top: 10px;
    margin-left: 460px;
    overflow: hidden;
    text-align: center;
}
.imagem2{
    border-radius: 5px;
    margin-top: 5px;
    margin-left: 440px;
}
.texto2{
    color: #F0F0FA;
    font-size: 21px;
    margin-top: 60px;
    margin-left: 70px;
    max-width: 1200px;
    overflow: hidden;
}
.imagem3{
    margin-top: 40px;
    margin-left: 70px;
    width: 450px;
}
.imagem4{
    margin-top: 40px;
    margin-left: 100px;
    width: 270px;
}
.imagem5{
    margin-top: 35px;
    margin-left: 100px;
    width: 270px;
}

.div1{
    display: flex;
    flex-direction: row;
}
</style>
