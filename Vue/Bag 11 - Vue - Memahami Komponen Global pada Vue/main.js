const tweet = [{
  id: 1,
  nama: 'Yasya',
  username: '@Yasya',
  gambar: './images/avatar.png',
  tweets: "Barang siapa yang bersungguh-sungguh, maka dia akan mendapatkan hasilnya.",
  suka: 30,
},
{
  id: 2,
  nama: 'Agung',
  username: '@Agung',
  gambar: './images/avatar.png',
  tweets: 'Barang siapa yang bersabar, maka dia akan mendapatkan keberuntungan.',
  suka: 25,
},
{
  id: 3,
  nama: 'Arman',
  username: '@Arman',
  gambar: './images/avatar.png',
  tweets: 'Barang siapa yang berjalan pada jalannya, maka dia akan sampai.',
  suka: 20,
}
];

new Vue({
  el: '#aplikasi',
  data: {
    tweet
  }
});
