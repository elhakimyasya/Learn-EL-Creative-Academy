new Vue({
  el: '#aplikasi',
  data: {
    km: 0
  },
  computed: {
    m: {
      get() {
        return this.km * 1000;
      },
      set(nilaiBaru) {
        this.km = nilaiBaru/1000;
      }
    }
  }
});