module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];

  for (sign of str) {
      for (arr of bracketsConfig) {
      if (sign == arr[0] && sign == arr[1] && sign == stack[stack.length - 1]) { 
          stack.pop();
      } else if (sign == arr[0]) {
          stack.push(sign);
      } else if (sign == arr[1] && stack[stack.length - 1] == arr[0]) {
          stack.pop();
      } else if (sign == arr[1] && stack[stack.length - 1] != arr[0]) {stack.push(sign);}
      }         
  }        
  console.log(stack);
  
  if (stack.length == 0) {
      return true;
  } else {
      return false;
  }
  }
  