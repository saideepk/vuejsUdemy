new Vue({
  el: "#app",
  data: {
    name: "Saideep",
    link: "http://google.com",
    markup: '<a href="http://in.yahoo.com">Link2</a>',
    counter: 0,
    counter2: 0,
    x: 0,
    y: 0,
    name2: "Hero !"
  },
  methods: {
    sayHello() {
      return this.name;
    },
    changeInput(e) {
      this.name = e.target.value;
    },
    counterIt(step, event) {
      this.counter += step;
    },
    setCoordinates(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
  },
  computed: {
    counterOutput() {
      return this.counter2 > 5 ? "greater than 5" : "Less than 5";
    }
  },
  watch: {
    counter2(value) {
      var that = this;
      setTimeout(function() {
        that.counter2 = 0;
      }, 2000);
    }
  }
});
