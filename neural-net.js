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
            // Force Vue to notice change in weights
            const weights = this.weights[i].slice(0);
            weights[j] = value;
            this.$set(this.weights, i, weights);
        },
        setInput: function(name, value) {
            this['input' + name] = value;
        }
    },
});
