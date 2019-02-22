var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
        input1: 0.2,
        minWeight: -5,
        maxWeight: 5,
        weights: [
            [2, -1]
        ],
        biases: [1, 0],
    },
    methods: {
        round: round
    },
});
