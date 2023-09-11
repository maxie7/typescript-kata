export function myCalc(num: string): number {
  // if (!num.length){
  //   return 0;
  // } 
  
  return num.split(',').map(Number).reduce((acc, curr) => acc + curr, 0);
}

/*
Create a simple String calculator with a method signature:

function add(numbers: string): number

The method can take any amount of numbers,
separated by commas,
and will return their sum.
For an empty string it will return 0.

For example "", "1", "1,2", or "1,2,3,4" as inputs.
*/
