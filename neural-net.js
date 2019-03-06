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
    methods: {
        round: round,
        setWeight: function(weight, value) {
            this['weight' + weight] = value;
        },
        setInput: function(name, value) {
            this['input' + name] = value;
        }
    },
});
