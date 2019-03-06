Vue.component('weight-slider', {
    template: '#weight-slider-el',
    props: [
        'startWeight',
        'input',
        'label'
    ],
    data: function() {
        return {
            weight: this.startWeight || 0,
            indices: this.label.split(',').map(parseInt),
            minWeight: -5,
            maxWeight: 5,
        };
    },
    methods: {
        round: round
    },
    watch: {
        weight: function() {
            this.$emit('update-weight', this.indices[0], this.indices[1], this.weight);
        }
    }
});

Vue.component('input-slider', {
    template: '#input-slider-el',
    props: [
        'startValue',
        'label'
    ],
    data: function() {
        return {
            value: this.startValue || 0,
            minValue: -1,
            maxValue: 1,
        };
    },
    methods: {
        round: round
    },
    watch: {
        value: function() {
            this.$emit('update-input', this.label, this.value);
        }
    }
});