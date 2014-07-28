var o = {os: 0};
Object.defineProperty(o, 'o', {
  get: function () {
    o.os++
    return o;
  }
});
Object.defineProperty(o, 'al', {
  get: function () {
    var goal = 'g'
    for(var i=0; i<this.os; i++){
      goal += 'o'
    }
    return goal + 'al';
  }
});
var g = {
  al: 'gal'
}
Object.defineProperty(g, 'o', {
  get: function () {
    o.os = 0
    return o;
  }
});

console.assert(g.al, 'gal')
console.assert(g.o.al, 'goal')
console.assert(g.o.o.o.o.al, 'gooooal')