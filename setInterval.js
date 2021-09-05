console.log('First');
// setInterval(() => {
//     console.log('tick tok tick tok');
// }, 1000);
console.log('Second');

let seconds = 0;
const timeId = setInterval( () => {
    // seconds++;
    console.log(++seconds);
    if( seconds > 15){
        clearInterval(timeId);
    }
}, 1000);
console.log('second');