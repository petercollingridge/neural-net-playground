var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
        minWeight: -5,
        maxWeight: 5,
        minBias: -5,
        maxBias: 5,
        'input1': 0.2,
        'weight1a': 1,
        'weight1b': 0,
        bias1: 0,
        bias2: 0,
    },
    computed: {
        'result1a': function() {
            return Math.round(this.input1 * this.weight1a * 1000) / 1000;
        },
        'result1b': function() {
            return Math.round(this.input1 * this.weight1b * 1000) / 1000;
        },
        min1: function() {
            return -this.weight1a - this.bias1;
        },
        max1: function() {
            return this.weight1a - this.bias1;
        },
        bias1width: function() {
            return Math.abs(this.weight1a) * this.width / 10;
        },
        bias1x: function() {
            var x = this.min1 < this.max1 ? this.min1 : this.max1;
            return this.scaleX(x);
        },
        point1x: function() {
            return this.scaleX(this.input1 * this.weight1a - this.bias1);
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
