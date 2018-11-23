<template>
    <div id="hero-foot" class="hero-foot column is-4">
        <form id="app" @submit="sendData" >
                <div class="box">
                        <h3 class="subtitle has-text-grey has-text-centered is-large">Registro</h3>
                        <div class="field">
                            <div class="control">
                                <input v-model="user.first_name" name="first_name" id="first_name" class="input is-medium is-success" type="text" placeholder="Nombre" autofocus="" required="">
                            </div>
                        </div>
						<div class="field">
                            <div class="control">
                                <input v-model="user.last_name" name="last_name" id="last_name" class="input is-medium is-success" type="text" placeholder="Apellido" autofocus="" required="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input v-model="user.email" name="email" id="email" class="input is-medium is-success" type="email" placeholder="Correo" autofocus="" required="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input v-model="user.password" name="password" id="password" class="input is-medium is-warning" type="password" placeholder="Contraseña" required="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input is-medium is-danger" type="password" placeholder="Verificar contraseña">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="address">Direccion</label>
                                <input v-model="user.address" name="address" id="address" class="input is-medium is-primary" type="text" placeholder="Direccion" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="city">Ciudad</label>
                                <input v-model="user.city" name="city" id="city" class="input is-medium is-primary" type="text" placeholder="Ciudad" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="country">Pais</label>
                                <input v-model="user.country" name="country" id="country" class="input is-medium is-primary" type="text" placeholder="Pais" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="telephone">Telefono</label>
                                <input v-model="user.telephone" name="telephone" id="telephone" class="input is-medium is-primary" type="number" placeholder="000-000-000" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="cellphone">Celular</label>
                                <input v-model="user.cellphone" name="cellphone" id="cellphone" class="input is-medium is-primary" type="number" placeholder="000-000-000" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="avatar">Avatar</label>
                                <input v-model="user.avatar" name="avatar" id="avatar" class="input is-medium is-primary" type="text" placeholder="Avatar" autofocus="" required="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="birthdate">Cumpleaños</label>
								<input type="date" class="input is-medium is-primary" v-model="user.birthdate" name="birthdate" id="birthdate" required="">
                            </div>
                        </div>


                        <div class="field is-grouped is-grouped-centered" >
						  <div class="control is-centered is-offset-4">
						    <div class="select is-medium is-primary is-expanded">
						      <select v-model="user.gender" name="gender" id="gender">
						        <option>Género</option>
						        <option value="true">Masculino</option>
						        <option value="false">Femenino</option>
						      </select>
						    </div>
						</div>

						  
						 <div class="control">
						    <div class="select is-medium is-danger">
						      <select v-model="user.bloodType" name="bloodType" id="bloodType">
						        <option>Tipo de sangre</option>
						        <option value="0">A+</option>
						        <option value="1">A-</option>
						        <option value="2">O+</option>
						        <option value="3">O-</option>
						        <option value="4">B+</option>
						        <option value="5">B-</option>
						        <option value="6">AB+</option>
						        <option value="7">AB-</option>
						      </select>
						    </div>
			
						  </div>
						</div>
                        <button class="button is-block is-info is-large is-fullwidth" type="submit">Registrarse</button>
                         <p class="help"><a href="/login">¿Ya tienes una cuenta? Inicia sesion </a></p>
                </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'hero-foot',
  data () {
    return {
      user: {
            first_name: '',
            last_name: '',
            password: '',
            birthdate: '',
            address: '',
            gender: '',
            bloodType: '',
            city: '',
            country: '',
            telephone: '',
            cellphone: '',
            avatar: '',
            email: ''
      }
    }
  },
    mounted() {
    },
    methods: {
        sendData(e) {
            axios({ method: "POST", "url": "http://localhost:3000/register", "data": this.user, "headers": { "content-type": "application/json" } }).then(result => {
                this.$router.push('/');
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>