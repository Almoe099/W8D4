// function sum(){
//     let total = 0
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }

// function sum(...args){
//     let total = 0
//     for (let i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)

// Function.prototype.myBind = function (ctx) {
//   let that = this;
//   const args = Array.from(arguments).slice(1);
//   return function () {
//     const callArgs = Array.from(arguments);
//     return that.apply(ctx, args.concat(callArgs));
//   };
// };

// Function.prototype.myBind = function (ctx, ...args) {
//   let that = this;
//   return function (...callArgs) {
//     return that.apply(ctx, args.concat(callArgs));
//   };
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat('Markov');
// const pavlov = new Dog('Pavlov');

// markov.says('meow', 'Ned');
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, 'meow', 'Kush')();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)('meow', 'a tree');
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, 'meow')('Markov');
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays('meow', 'me');
// // Pavlov says meow to me!
// // true

// function curriedSum(numArgs) {
//   let numbers = [];
//   return function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       console.log(numbers.reduce((acc, ele) => acc + ele));
//     } else {
//       return _curriedSum;
//     }
//     return _curriedSum;
//   };
// }

Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let that = this;

  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length < numArgs) {
      return _curriedSum;
    } else {
      return that(...numbers);
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30
// console.log(sumThree.curry(3));
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
