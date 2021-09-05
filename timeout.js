function doNothing(){
    console.log('Coding in JS');
}
console.log('first');
console.log('second');
// setTimeout(doNothing, 4000);
setTimeout(function doNothing(){
    console.log('Coding in JS');
}, 5000);
setTimeout( () => {
    console.log('Exploring MDN articles');
}, 3000);
console.log('third');
console.log('fourth');
