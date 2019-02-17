
Vue.component('neuron-graph', {
    template: '#neuron-graph-el',
    data: function() {
        return {

        };
    },
});

var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
        minWeight: -5,
        maxWeight: 5,
        minBias: -5,
        maxBias: 5,
        'input1': 0.2,
        'weight1a': 2,
        'weight1b': 0,
        bias1: 0,
        bias2: 0,
    },
    computed: {
        result1a: function() {
            return Math.round(this.input1 * this.weight1a * 1000) / 1000;
        },
        result1b: function() {
            return Math.round(this.input1 * this.weight1b * 1000) / 1000;
        },
        min1: function() {
            return -this.weight1a - this.bias1;
        },
        max1: function() {
            return this.weight1a - this.bias1;
        },
        domain1width: function() {
            return Math.abs(this.weight1a) * this.width * 0.1;
        },
        domain1x: function() {
            return (this.width - this.domain1width) * 0.5;
        },
        point1x: function() {
            return this.scaleX(this.input1 * this.weight1a);
        },
        stepFunction1: function() {
            return "M0 100H" + this.scaleX(this.bias1) + "V0 H" + this.width;
        },
        active1: function() {
            return this.input1 * this.weight1a > this.bias1;
        }
    },
    methods: {
        scaleX: function(x) {
            return this.width * 0.5 + (x * this.width * 0.05);
        }
    },
    watch: {
    }
});


function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
