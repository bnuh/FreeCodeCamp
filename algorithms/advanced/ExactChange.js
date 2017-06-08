
function checkCashRegister(price, cash, cid) {
  var balance = cash - price;
  var sum = 0;
  var change = [];
  for (var i = 0; i < cid.length; i++){
    sum += cid[i][1];
  }
  if (sum < balance || (sum%balance) !== 0){
    return "Insufficient Funds";
  }
  else if (sum == balance){
    return "Closed";
  }
  while (balance > 0 && sum > 0){
    var tmp = 0;
    if (floor(balance/100) > 0){
      tmp = 0;
      while(balance > 100 && cid[9][1] !== 0){
        balance -= 100;
        tmp += 1;
      }
      change.push(["ONE HUNDRED", (100.00 * tmp)]);
    }
    if (floor(balance/50) > 0){
      tmp = 0;
      while(balance > 50 && cid[8][1] !== 0){
        balance -= 50;
        tmp += 1;
      }
      change.push(["FIFTY", (50.00 * tmp)]);
    } 
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
