module.exports = function reverse (n) {
    const m = n.toString().split('').reverse().join('')
  
    if (n<0) {
        return Number(m.slice(0, m.length-1));
    } else {
        return Number(m);
    }
  
}



