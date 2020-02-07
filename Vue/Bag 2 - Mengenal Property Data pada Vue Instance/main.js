new Vue({
	el: '#aplikasi',
	data: {
		salam: 'Halo Semuanya!',
		nama: 'Yasya El Hakim',
		jabatan: 'Author',
	},
	methods: {
		ubahSalam() {
			this.salam = this.salam === 'Halo Semuanya!' ? 
			'Halo Gaes!' : 
			'Halo Semuanya!';
		}
	}
});
