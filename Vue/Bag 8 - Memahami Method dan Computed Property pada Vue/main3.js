new Vue({
	el: '#aplikasi',
	data: {
		pesan: 'Salam!',
	},
	computed: {
		pesanTerbalik() {
			return this.pesan.split('').reverse().join('');
		},
	}
});