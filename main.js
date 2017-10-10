function planeSpeed (n) {
    if(n <= 0) return n
    var square = Math.floor(Math.sqrt(n));
    var res = [];
    for(var i = 1; i <= square; i++) {
      res.push(i);
    }
    var rest = n - square * square;
    while (rest >= square) {
      res.push(square);
      rest -= square;
    }
  
    var counter =  square - 1; 
    for(; counter > 0; counter--) {
        res.push(counter);
    }
    if(rest) {
      res.splice(res.lastIndexOf(rest), 0, rest);
    }
    return res;
  }


  submit.onclick = function(e) {
      e.preventDefault();
      var result = planeSpeed(distance.value);
      document.getElementById('speed').innerHTML = result;
  }
  