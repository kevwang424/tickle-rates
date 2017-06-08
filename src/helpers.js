module.exports = {

  baseAndAgeIncrease: function(age){
    var increase = Math.floor((age - 18) / 5)
    return increase * 20 + 100
  },

  allergiesIncrease: function(amount){
    return (amount * 1.01).toFixed(2)
  },

  sleepApneaIncrease: function(amount){
    return (amount * 1.06).toFixed(2)
  },

  heartDiseaseIncrease: function(amount){
    return (amount * 1.17).toFixed(2)
  },

  femaleDiscount: function(amount){
    return (amount - 12).toFixed(2)
  },

  checkCondition: function(amount, condition){
    switch (condition) {
      case "Allergies":
      return this.allergiesIncrease(amount);
      case "Sleep Apnea":
      return this.sleepApneaIncrease(amount);
      case "Heart Disease":
      return this.heartDiseaseIncrease(amount);
      default:
      return 0;
    }
  }

}
