{
  //1) any function
  function x(num, num2) {
    return num * num2;
  }

  x(2, 4);

  //   note we don't use it

  // 2 functions using typescript
  function y(num: number, num2: number): number {
    return num * num2;
  }

  y(1, 2);

  // 3 arrow functions using typescript
  const arrowFunction = (num: number, num2: number): number => num * num2;
  arrowFunction(4.5, 5);




  // 4 object method using typescript

  // object => function => method
  const obj = {
    name: "object",
    balance: 0,
    x(num: number): number {
      return this.balance + num;
    },
    fun: (number: number): number => number * number,
    // note: we cant use this method in arrow function bcz of restriction of javascript
  };


  
//   5 map, filter , find , reduce function using typescript
const arr: number[]=[1,2,3,4,5]
const result:number[] = arr.map((item:number):number => item*item)

}
