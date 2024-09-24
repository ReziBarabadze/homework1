//დავალება 1 

let array = [1, 89, -4, -11, 100, -16, 76, 8];



let arrayFilter = array.filter((item) => {
  if (item > 0) {
    return item;
  }
});

let sum = arrayFilter.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(sum);






//დავალება 2

let array2 = ['anna', 'nika', 'gio', 'nika', 'luka', 'nika', 'gio', 'nika', 'mariami', 'nika', 'dato', 'nika'];


let newArray = array2.reduce((accumulator, current) => {
  return accumulator + current;
}, []);

console.log(newArray);




// დავალება 3 



function addAsync(x, y) {
  const promise = new Promise((resolve, reject) => {
    if (x === 10) {
      resolve('warmatebulia')
    } else (y === 5) {
      reject('warumatebelia')
    }
})
};

console.log(addAsync(10, 5));
