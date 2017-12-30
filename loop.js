// usage: loop(<function>, <delay>, [amount], [callback]);
var loop = function(f, d, a, c) {
  if(!f) throw "Invalid Syntax: Missing Function.";
  if(!d) throw "Invalid Syntax: Missing Delay.";
  if(!f || !d) return;
  
  if(a) {
    for(var i = 0; i < a; i++) {
      setTimeout(f, i*d);
    }
    
    if(c) setTimeout(c, i*d);
  } else {
    setInterval(f, d);
  }
};

module.exports = loop;
