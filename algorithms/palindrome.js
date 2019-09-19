let str = "A man, a plan, a canal: Panama";
const reg = /^[a-z0-9]+$/i;

str = str.replace(/\W/g, '').toLowerCase();

let rstr = str.split('').reverse().join('');
let isPal = (str === rstr);
console.log(rstr);

console.log(isPal);

isPal = str
          .replace(/\W/g, '')
          .toLowerCase() ===
        str
          .replace(/\W/g, '')
          .toLowerCase()
          .split('')
          .reverse()
          .join('');



console.log(isPal);
