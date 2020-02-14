new Vue({
    el: '#aplikasi',
    data: {
        angka1: [1, 10, 100, 1000, 10000],
    },
    methods: {
        acak() {
            this.angka1 = _.shuffle(this.angka1)
        }
    }
});
