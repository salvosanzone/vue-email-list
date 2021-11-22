const app = new Vue({

  el: '#app',

  data: {

    email: '',
    //di defaul non vedo l'email
    isLoading: true,

  },


  
  
  methods: {
    
    
    
    
  },
  
  
  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

    .then((response) =>{
      //tutta la risposta
      console.log('response',response);

      // il JSON -> quello che a noi interessa
      console.log('response.data',response.data);

      //in base a come è fatto ogni response.data prendiamo quello che ci serve
      console.log('email:',response.data.response);


      //al mio dato vuoto attribuisco una email proveniente dall'oggetto
      this.email = response.data.response;

      //ottenuta l'email verrà mostrata se è true,quindi diversa da se stessa
      this.isLoading = false;
    })

    //se sbaglio indirizzo mi indica l'errore
    .catch((error) =>{
      console.log(error);
    })

  }



})