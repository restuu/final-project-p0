
var itemArr = [];
var priceArr = [];
function inputVar() {
  var form = document.getElementById('itemDetail');
  var itemName = form.item.value;
  var priceTag = form.price.value;
  if (isNaN(parseInt(priceTag))) {
    alert('Input price with number only')
  } else if (itemName.length === 0) {
    alert('Item cannot be empty')
  } else if (priceTag.length === 0) {
    alert('Price cannot be empty')
  } else {
    itemArr.push(itemName);
    priceArr.push(parseInt(priceTag));

    form.item.value = '';
    form.price.value = '';

    console.log(itemArr);
    console.log(priceArr);
  }


  return false;
}

function monthlyBudget(itemArr, priceArr) {
  var mixArr = [];
  for (var i = 0; i < itemArr.length; i++) {
    mixArr[i] = [];
    mixArr[i].push(itemArr[i]);
    mixArr[i].push(priceArr[i]);
  }
  var countBudget = 0;
  for (var i = 0; i < priceArr.length; i++) {
    countBudget += priceArr[i];
  }
  countBudget = countBudget.toString();
  var rupiah = '';
  for (var i = 0; i < countBudget.length; i++) {
    if (i === 1) {
      rupiah += '.' + countBudget[i];
    } else if ((i - 1) % 3 === 0) {
      rupiah += '.' + countBudget[i];
    } else {
      rupiah += countBudget[i]
    }
  }
  mixArr = mixArr.sort(function (a, b) { return b[1] - a[1] ;})
  var ratio = mixArr[0][1] / countBudget * 100;
  document.getElementById('maxBudget').innerHTML =
          'Your highest budget is ' + mixArr[0][0] +
          'With ratio of ' + Math.round(ratio) + '%';
  document.getElementById('result').innerHTML =
          'Your monthly budget is Rp. ' + rupiah;
  return ;
}
