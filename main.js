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
        axio.get('https://flynn.boolean.careers/exercises/api/random/mail')
    }
})