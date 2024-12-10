function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct: both arguments are numbers

function addString(a: string, b: string): string{
  return a + b; // Correct string concatenation
}

let stringResult = addString("hello", "world"); //Correct: both arguments are strings