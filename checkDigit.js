// Finding the checkDigit of a barcode
let number = 36000291452;
let strNum = number.toString();
let arr = strNum.split('');
let even = [];
let odd = [];
for(let i = 0; i < arr.length; i++) {
    let counter = i + 1;
    if((counter % 2) == 0) {
 even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }

}

let multiplyOdd = odd.map((x  => x *3));
let sumOdd = multiplyOdd.reduce((acc,val) => acc+val);
let evenNumber = even.map((x => Number(x)) );
let sumEven = evenNumber.reduce((acc,val) => acc + val);
let total = sumOdd+ sumEven;

let remainder = total % 10;
let checkDigit = 10 -remainder;
console.log(` The checkDigit is ${checkDigit}`);
