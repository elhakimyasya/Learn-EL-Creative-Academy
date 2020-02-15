new Vue({
	el: '#aplikasi',
	data: {
		nama: '',
		subyek: '',
		ketentuan: false,
		yaAtauTidak: 'Tidak'
	},
	methods: {
		submit() {
			console.log('nama', this.nama);
			console.log('subyek', this.subyek);
			console.log(
				'ketentuan',
				this.ketentuan
				);
			console.log('yaAtauTidak', this.yaAtauTidak);
		}
	}
});