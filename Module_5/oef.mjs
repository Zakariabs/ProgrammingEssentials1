let a = 4;
console.log('Begin:' + a);

function test(a) {
    a++;
    console.log('In de functie:' + a);
    return a
}

test(a)

a++;
console.log('Einde: ' + a);