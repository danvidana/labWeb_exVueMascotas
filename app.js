new Vue({
    el: '#exercise',
    data: {
      message: "",
      hasAdopted: false,
      toggle1: true
    },
    methods: {
        returnPet: function() {
            this.hasAdopted = !this.hasAdopted;
            this.message = "";
        },
        adoptPet: function() {
            this.hasAdopted = true;
        }
    }
  });