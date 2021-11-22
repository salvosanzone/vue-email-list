const app = new Vue({

  el: '#app',

  data: {

    //di defaul non vedo l'email
    isLoading: true,
    //in caso di errore
    httpError: false,
    //creo un array vuoto dove poi verranno pushate le email
    emails: [],


  },


  
  
  methods: {
    
    
    
    
  },
  
  
  mounted(){

    //faccio con un ciclo la chiamata axios 10 volte
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

      .then((response) => {


        //tutta la risposta
        console.log('response',response);

        // il JSON -> quello che a noi interessa
        console.log('response.data',response.data);

        //salvo,per comodità, in una variabile l'oggetto che a noi interessa
        const data = response.data;

        //in base a come è fatto ogni response.data prendiamo quello che ci serve
        console.log('email:',data.response);


        //pusho all'intero dell'array vuoto l'email
        this.emails.push(data.response);

        
      })

    
      //se sbaglio indirizzo mi indica l'errore
      .catch((error) =>{
        console.log(error);
        this.httpError = true;
      })
    }

    
  }



})