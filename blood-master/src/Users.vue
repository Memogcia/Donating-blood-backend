<template>
  <div>
   <h1> Users </h1>
   <p> Team ID is {{ $route.params.teamId }} </p>
  <button @click="goHome">Home</button>

  </div>
</template>
<script>
  export default {
    watch: {
      '$route' (to, from) {
        //alert(to.params.teamId);
      }
    },
    created() {
      //alert(this.$route.params.teamId);
    },
    methods: {
      goHome(){
        this.$router.push('/');
      }
    }
  }
</script>