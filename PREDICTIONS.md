## Snippet 1
Code: 
console.log(a); var a = 5;
Prediction:undefined
Real output: undefined
Why:
## Snippet 2
code:
console.log(b); let b = 5;
Prediction: ReferrenceError
Real output: ReferrenceError
why: 
## Snippet 3
code:
sayHi(); function sayHi() { console.log('hi'); }
Prediction: hi
Real output: hi
Why: because due to the process of the hoisting the function declaration will be go up write so. So after the function declaration only the function has been called so no problem in the code so it prints the 'hi' 
## Snippet 4
code:
const c = makeCounter(); 
c(); 
c(); 
console.log(c()); 
makeCounter returns () => ++count
prediction: ReferrencError makeCounter is undefined
Real output:ReferrencError makeCounter is undefined
Why: Because the count is declared inside the makeCounter but not the global write so. The function call at the console that is outside will not give the output write.
## Snippet 5
code:
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); 
// then repeat with let
First with the var:
Prediction: 2
            2
            2
Real output:3
            3
            3
Why: It is a global variable so. When i=0 it is like a whiteboard so 0 after the 1 comes then in t =he single board earse 0 and then 1 like similar to the 2. In this way it occurs.

Second with the let:
Prediction:
Prediction: 0
            1
            2
Real output:0
            1
            2
Why: It is a function variable not the global. A new board for every iteration and prints the logs individually.

## Snippet 6
code:
function intro(city) { 
    return `${this.name} from ${city}`;
     }
console.log(intro.call({ name: 'Ravi' }, 'Pune'), intro.bind({ name: 'Meena' })('Delhi'));
Prediction: Ravi from Pune Meena from Delhi
Real output: Ravi from Pune Meena from Delhi
Why: we know that .call will execute at first then after that .bind will execute so.

## Snippet 7
code:
const user = { name: 'Asha', regular() { return this.name; }, arrow: () => this.name };
console.log(user.regular(), user.arrow());
Prediction: Asha undefined
Real output: Asha undefined
Why: As we know that  'this' context is implicitly bound to the object that called it (user). Arrow functions do not have their own this binding

## Snippet 8
code:
console.log(0 == '0', 0 === '0', null == undefined, [] == false);
prediction: true false true true
Real output: true false true true
Why: '==' is not with respective data type, '===' while this is with respect to data type. So in first the values are same so true. In second the values are but not the data type so false. While in third the value is same so true same in the case of fourth as well.

## Snippet 9
code:
console.log([!!'', !!'0', !![], !!{}, !!NaN]);
Prediction: false true true true false
Real output: [false, true , true, true, false]
Why: '!!' is for the type conversion or coersion into the boolean that is true or false. While the '', NaN are falsy so converted into the false, and the remaining or truely so converted to true.

## Snippet 10
code:
console.log([1, 2, 3, 4].filter((n) => n % 2).map((n) => n * 10).reduce((a, b) => a + b, 0));
Prediction: 40
Real output: 40
Why: Because we known that '1' is true and  '0' is false it keeps the true.By the filter we will get the [1,3] that satisfy the condition inside the filter. And by the map, the values inside will update to the [10,30] now with the help of reduce we will return a single value that is by the addition that is 10+30 = 40 tk.
