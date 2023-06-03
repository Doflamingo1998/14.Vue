const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish work',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Whatever';
            } else {
                return 'VUE is';
            }
        }
    }
});

app.mount('#user-goal');