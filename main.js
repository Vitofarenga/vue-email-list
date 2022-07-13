const app = new Vue({
    el: '#root',

    data: {
        wordInfo: '',
    },

    methods: {
        log: function( ...args) {
            console.log(args);
        },
    },

    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            onsole.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (response){
            console.log(response.data.response);
            this.wordInfo = response.data.response;
            console.log(this);
        });
    },
})