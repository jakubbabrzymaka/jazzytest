Array.prototype.square = function (){
  var result = this.map(function(v){
      return v*v;
  });
  return result;
};

Array.prototype.cube = function (){
  var result = this.map(function(v){
    return v*v*v;
  });
  return result;
};

Array.prototype.sum = function (){
  var result = new Number();
  this.forEach(function(v){
    result += v;
  });
  return result;
};

Array.prototype.average = function (){
  var result = new Number();
  this.forEach(function(v){
    result += v;
  });
  return result / this.length;
};

Array.prototype.even = function (){
  var result = new Array();
  this.forEach(function(v){
    if(v%2 == 0){
      result.push(v);
    }
  });
  return result;
};

Array.prototype.odd = function (){
  var result = new Array();
  this.forEach(function(v){
    if(v%2 != 0 && v%1 == 0){
      result.push(v);
    }
  });
  return result;
};