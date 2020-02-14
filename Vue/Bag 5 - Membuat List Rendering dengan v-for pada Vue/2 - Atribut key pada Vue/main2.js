new Vue({
    el: '#aplikasi',
    data: {
        angka1: [
            { id: 1, nilai: 1 },
            { id: 2, nilai: 10 },
            { id: 3, nilai: 100 },
            { id: 4, nilai: 1000 },
            { id: 5, nilai: 10000 }
        ],
    },
    methods: {
        acak() {
            this.angka1 = _.shuffle(this.angka1)
        }
    }
});
