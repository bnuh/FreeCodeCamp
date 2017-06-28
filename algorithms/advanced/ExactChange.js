function checkCashRegister(price, cash, cid) {
  var change = [];
  var list = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  var subtotal = (cash-price)*100;
  var currency = [1,5,10,25,100,500,1000,2000,10000];
  var total = cid.map(function(v) {return v[1]; }).reduce(function(a,b) {return a + b;});
  if (total*100 == subtotal){
    return "Closed";
  }
  else if (total*100 < subtotal){
    return "Insufficient Funds";
  }
  else {
    total *= 100;
    for (var i = cid.length-1; i >= 0; i--){
      if (cid[i][1] > 0 && subtotal%currency[i] < subtotal){
        temp = [];
        temp = [list[i][0],0];
        while (cid[i][1] > 0 && subtotal%currency[i] < subtotal) {
          subtotal -= currency[i];
          total -= currency[i];
          temp[1] += currency[i]/100;
        }
        change.push(temp);
      }
      // CID denomination is too high to make change?
    }
  }
  return change;
}
