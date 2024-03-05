type NumberOrString = number | string;
type ConversionDescriptor = 'as-number' | 'as-string'

function add(
   input1: NumberOrString,
   input2: NumberOrString,
   resultConversion: ConversionDescriptor
) {
   let result;
   if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
      result = +input1 + +input2;
   } else {
      result = input1.toString() + input2.toString();
   }
   return result;
}

const addedAges = add(10, 15, 'as-number');
console.log(addedAges);

const addedAgesAndNumbers = add('10', 15, 'as-number');
console.log(addedAgesAndNumbers);

const addedNames = add('Max', 'John', 'as-string');
console.log(addedNames);