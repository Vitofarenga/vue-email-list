const app = new Vue({
    el: '#root',

    data: {
        wordInfos = [
          wordInfo[i]   
        ],
    },

    methods: {
        log: function( ...args) {
            console.log(args);
        },
    },

    created(){
        for(i = 0; i == 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            onsole.log(response.data.response);
            this.wordInfo[i] = response.data.response;
            console.log(this);
        });
        };
    
    },
})