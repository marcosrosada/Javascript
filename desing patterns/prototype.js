var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
  }
  
  TeslaModelS.prototype = function() {
  
    var go = function() {
      console.log('Go');
    };
  
    var stop = function() {
      console.log('Stop');
    };
  
    return {
      pressBrakePedal: stop(),
      pressGasPedal: go()
    }
  
  }();
  
  TeslaModelS.pressGasPedal;
  TeslaModelS.pressBrakePedal;