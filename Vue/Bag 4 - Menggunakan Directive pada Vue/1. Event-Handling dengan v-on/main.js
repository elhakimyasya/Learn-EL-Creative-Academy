new Vue({
	el: '#aplikasi',
	data: {
		salam: 'Halo Semuanya!',
		peringatan: ''
	},
	methods: {
		ubahSalam() {
			this.salam = this.salam === 'Halo Semuanya!' ?
			'Halo Gaes!' :
			'Halo Semuanya!';
		},
		pesanSalamPeringatan() {
			this.peringatan = 'Anda telah mengetik sesuatu...';
		},
		pesanEnterPeringatan() {
			this.peringatan = 'Anda telah mengetik sesuatu dan menekan tombol Enter...';
		},
	}
});
