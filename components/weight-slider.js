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
            minWeight: -5,
            maxWeight: 5,
        };
    },
    methods: {
        round: round
    },
});
