function once(fn) {
  var running = false;
  return function(){
    if(!running){
      fn.apply(this,arguments);
      running = true;
    }
  }
}