new Vue({
	el: '#aplikasi',
	data: {
		salam: 'Halo Semuanya!',
		nama: 'Yasya El Hakim',
		jabatan: 'Author',
		gambarOrganisasi: 'https://1.bp.blogspot.com/-3fxYMPSkglE/XXEqoYT86tI/AAAAAAAAGgM/cBLLnuer9kQppe2hH-IwpLSqr4Qsa0U2wCLcBGAs/s1600/ELC.jpg'
	},
	methods: {
		ubahNama() {
			if (this.nama === 'Yasya El Hakim') {
				this.nama = 'Agung Cahyadi';
				this.gambarOrganisasi = 'https://1.bp.blogspot.com/-pJdVpoBJ-Xw/XcAtUqeZb0I/AAAAAAAAHNs/Dm1v55u117k3-qRJir1Ba1218Dg19mT1wCPcBGAYYCw/s1600/VueJS.jpg';
			} else {
				this.nama = 'Yasya El Hakim';
				this.gambarOrganisasi = 'https://1.bp.blogspot.com/-3fxYMPSkglE/XXEqoYT86tI/AAAAAAAAGgM/cBLLnuer9kQppe2hH-IwpLSqr4Qsa0U2wCLcBGAs/s1600/ELC.jpg';
			}
		}
	}
});