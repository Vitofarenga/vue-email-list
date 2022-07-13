const app = new Vue({
    el: '#root',

    data: {
        
          wordInfo:[],   

    },

    methods: {
    },

    created(){
        for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then( (response) => {
            console.log(response.data.response);
            this.wordInfo.push(response.data.response);
            console.log(this.wordInfo);
        });
        };
    
    },
})