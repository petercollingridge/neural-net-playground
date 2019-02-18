Vue.component('neuron-graph', {
    template: '#neuron-graph-el',
    props: [
        'function',
        'input',
        'weight',
        'bias',
        'label'
    ],
    data: function() {
        return {
            width: 200,
            height: 100,
            minBias: -5,
            maxBias: 5,
            biasModel: this.bias || 0
        };
    },
    computed: {
        path: function() {
            if (this.function === 'step') {
                return "M0 100H" + this.scaleX(this.biasModel) + "V0 H" + this.width;
            } else {
                var path = "M";
                var bias = +this.biasModel;
    
                for (var x = -10; x <= 10; x += 0.25) {
                    path += this.scaleX(x) + " " + this.scaleY(this.sigmoid(x - bias)) + " ";
                }
                return path;
            }
        },
        inputX: function() {
            return this.scaleX(this.input * this.weight);
        },
        domainWidth: function() {
            return Math.abs(this.weight) * this.width * 0.1;
        },
        domainX: function() {
            return (this.width - this.domainWidth) * 0.5;
        },
        output: function() {
            if (this.function === 'step') {
                return this.input * this.weight > this.biasModel ? 1 : 0;
            } else {
                return this.sigmoid(this.input * this.weight - this.biasModel);
            }
        }
    },
    methods: {
        scaleX: function(x) {
            return this.width * 0.5 + (x * this.width * 0.05);
        },
        scaleY: function(y) {
            return this.height * (1 - y);
        },
        sigmoid: function(x) {
            return 1 / (1 + Math.exp(-x));
        },
        round: function(x) {
            return Math.round(x * 1000) / 1000;
        }
    },
});
