const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish work',
            courseGoalB: 'Master Vue',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        //outputGoal()
        outputGoal: function() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');