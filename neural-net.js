var vm = new Vue({
    el: '#neural-net',
    data: {
        width: 200,
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
        'bias1width': function() {
            return Math.abs(this.weight1a) * this.width / 10;
        },
        'bias1x': function() {
            var x = this.min1 < this.max1 ? this.min1 : this.max1;
            x = Math.max(x, -10);
            return (x * this.width * 0.05) + this.width * 0.5;
        }
    },
    methods: {
    },
    watch: {
    }
});
