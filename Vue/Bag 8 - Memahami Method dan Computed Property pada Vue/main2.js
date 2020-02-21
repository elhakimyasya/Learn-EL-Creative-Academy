new Vue({
	el: '#aplikasi',
	data: {
		pesan: 'Salam!',
	},
	methods: {
		stringTerbalik(string) {
			return string.split('').reverse().join('');
		},
	}
});