var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
        input1: 0.2,
        minWeight: -5,
        maxWeight: 5,
        weights: [[2, -1]],
        bias1a: 1,
        bias1b: 0,
    },
    methods: {
        round: round,
        setWeight: function(i, j, value) {
            this.weights[i][j] = value;
        },
        setInput: function(name, value) {
            this['input' + name] = value;
        }
    },
});
