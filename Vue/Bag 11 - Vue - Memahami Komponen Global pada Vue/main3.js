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

Vue.component('komponen-tweet', { 
  template: `   
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="tweet.gambar">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{tweet.nama}}</strong>
                <small>{{tweet.username}}</small>
                <br>
                 {{tweet.tweets}}
              </p>
            </div>
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
                <span class="likes">
                  {{tweet.suka}}
                </span>
              </a>
            </div>
          </div>
        </article>
        </div>
        <div class="control has-icons-left">
          <input class="input is-small" placeholder="Tweet balasan anda..." />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>
    </div>
  `,
  props: ['tweet']
});

new Vue({
  el: '#aplikasi',
  data: {
    tweet
  }
});