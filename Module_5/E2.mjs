


let start;
let end;
let deler1;
let deler2;


start = 1;
end = 100;
deler1 = 2;
deler2 = 4;


for (let i = start ; i <= end; i++) {
    
    
    if (i % deler1  == 0  && i % deler2 == 0 )
        console.log(i + "Deelbaar");
}