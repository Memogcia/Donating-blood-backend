<template>
  <div id="app">
    <section class="hero is-dark is-medium is-bold">
                <div class="hero-head">
                        <nav class="navbar">
                            <div class="container">
                                <div class="navbar-brand">
                                    <a class="navbar-item">
                                        Blooders
                                    </a>
                                </div>
                                <div id="navbarMenu" class="navbar-menu">
                                    <div class="navbar-end">
                                        <div class="tabs is-right">
                                            <ul>
                                              <router-link to="/"> Home </router-link>
                                              <router-link to="/mapa"> Mapa</router-link>
                                              <router-link to="/" v-if="this.$session.exists()"> {{ this.$session.get("user").first_name }}</router-link>
                                              <router-link to="/login" v-else>login</router-link>
                                              <router-link to="/" v-if="this.$session.exists()" v-on:click="logout">Logout</router-link>
                                              <router-link to="/registro" v-else>Registro</router-link>
                                              <router-link to="/requisitos"> Requisitos</router-link>
                                              <router-link to="/porque"> ¿Por qué?</router-link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                    Blooders
                    </h1>
                    <h2 class="subtitle">
                    Encontrar ayuda nunca fue mas facil
                    </h2>
                </div>
            </div>
                <center> <google-map></google-map> </center>

                 <center> <router-view> </router-view> </center>
               
        </section>

          <div class="box cta">
            <p class="has-text-centered">
                
            </p>
          </div>

                <section class="container">
            <div class="columns features">
                <div class="column is-4">
                    <div class="card is-shady">
                        <figure class="image is-square">
                            <img src="./assets/6y1zGZnqNi.jpg">
                        </figure>
                        <div class="card-content">
                            <div class="content">
                                <h4>Busca cerca de tí</h4>
                                <p>Las busquedas para transfunciones siempre se haran lo más cercano posible a tu ubicación actual</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card is-shady">
                            <figure class="image is-square">
                                <img src="./assets/615259652-612x612.jpg">
                            </figure>
                        <div class="card-content">
                            <div class="content">
                                <h4>¿Donante o Solicitante?</h4>
                                <p>Blooders te da la opción de apoyar personas por medio de donaciones o pedir ayuda para ti o un conocido como solicitante</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-4">
                    <div class="card is-shady">
                            <figure class="image is-square">
                                <img src="./assets/ayuno-intermitente.jpg">
                            </figure>
                        <div class="card-content">
                            <div class="content">
                                <h4>Requisitos para donar</h4>
                                <p>Mantente al tanto de lo que necesitas para poder donar sangre, incluyendo un reloj para el ayuno</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
          
      }
   },
    beforeCreate: function () {
    },
    methods: {
        logout: function () {
            console.log("click logout")
            this.$session.destroy()
            this.$router.push('/')
        }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
