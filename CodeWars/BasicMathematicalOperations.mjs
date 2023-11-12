
function basicOp(operation, value1, value2)
{
  // Code
  switch (operation){
        case "+":
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*":   
            return value1 * value2;
        case "/":
        return value1 / value2;
  }
  
}




basicOp('+', 4, 7);         // Output: 11
basicOp('-', 15, 18);      // Output: -3
basicOp('*', 5, 5);        // Output: 25
basicOp('/', 49, 7);       // Output: 7


