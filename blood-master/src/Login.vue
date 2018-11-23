<template>
    <div class="hero-foot column is-4">
        <div id="app" class="box"><h3 class="subtitle has-text-grey has-text-centered">
            Inicio de Sesión</h3>
            <form id="app" @submit="sendData" >
                    <div class="field">
                        <div class="control">
                            <input v-model="user.email" type="email" placeholder="Correo" autofocus="autofocus" class="input is-medium" required="">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input v-model="user.password" type="password" placeholder="Contraseña" class="input is-medium" required="">
                        </div>
                    </div> 
                    <p class="help is-danger"></p> 
                    <div class="field"><label class="checkbox"><input type="checkbox">
                        Recuerdame
                        </label>
                    </div> 
                <button class="button is-block is-info is-large is-fullwidth">
                    Iniciar Sesión
                </button>
            </form>
        <p class="help">
            <a href="/registro">¿Aun no tienes una cuenta? Registrate</a>
        </p>
    </div>
        </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'hero-foot',
  data () {
    return {
      user: {
            password: '',
            email: ''
      }
    }
  },
    mounted() {
    },
    methods: {
        sendData(e) {
            axios({ method: "POST", "url": "http://localhost:3000/login", "data": this.user, "headers": { "content-type": "application/json" } }).then(result => {
                this.$session.start()
                this.$session.set('user', result.data.user)
                this.$router.push('/');
            }, error => {
                console.error(error);
            });
            e.preventDefault();
        }
    }
}
</script>
