function shortenNumber(suffixes, base) {
  return function(num){
    var numberOfShort = 0;
    var result = num;
    if(/\D/.test(num) == false && num.length > 0){
      for(var i = 1; i < suffixes.length; i++){
        if(num/(Math.pow(base, i)) > 1){
          numberOfShort++;
          result = num/(Math.pow(base, i));
        }
      }
      return Math.floor(result) + suffixes[numberOfShort];
    }
    else{
      return result.toString();
    }   
  }
}