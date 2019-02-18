var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
        input1: 0.2,
        minWeight: -5,
        maxWeight: 5,
        weight1a: 2,
        weight1b: -1,
        bias1a: 1,
        bias1b: 0,
    },
    computed: {
    },
    methods: {
        round: function(x) {
            return Math.round(x * 1000) / 1000;
        }
    },
});
