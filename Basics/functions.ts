function add(n1: number, n2: number) {
   return n1 + n2;
}

function printResult(num: number): void { 
   console.log('Result: ' + num);
}

printResult(add(10, 15));

let combineValues : (a: number, b: number) => number;
combineValues = add;

// combineValues = printResult;
//Ustteki yazim saeysinde IDE burada hata verebilir duruma geldi cunku printResult fonksiyonunun parametreleriyle uyusmuyor

console.log(combineValues(8, 8)); 

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
   const result = n1 + n2;
   cb(result);
}

addAndHandle(10, 15, (result) => {
   console.log('Result:'+ result);
});