new Vue({
	el: '#aplikasi',
	data: {
		name: 'Memuat...',
		email: 'Memuat...',
		company: {
			name: 'Memuat...',
			catchPhrase: 'Memuat...',
		}
	},
	created() {
		axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
			const data = response.data;
			const penggunaRandom = response.data[Math.floor(Math.random() * data.length) ];

			this.name = penggunaRandom.name;
			this.email = penggunaRandom.email;
			this.company.name = penggunaRandom.company.name;
			this.company.catchPhrase = penggunaRandom.company.catchPhrase;
		});
	},
});
