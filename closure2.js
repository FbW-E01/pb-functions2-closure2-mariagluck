// # JS Closures / Scoping exercises

// 1. What’s the result of executing this code and why.
  
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
//ANSWER:
// It prints: undefined // 2
// undefined : because is the result of console.log(a) but the variable var a = 1; is declared after so it cannot remember it, it is forgotten, if it would be placed before the console.log(a), it would print 1. If instead of var a = 1 it would be let a = 1, it would give you an error telling you to relocate the variable a.
// 2  : because function foo() implies return 2.



// 2. What is result?

  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);

  console.log(result); // ANSWER: it prints 5 because the other values are not playing a part in result, basically, result is a = 5;

// 3. What is the result of the following code? Explain your answer.

  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
   console.log(obj.prop.getFullname());
 
   var test = obj.prop.getFullname;
  
   console.log(test());

  //ANSWER: it prints:

// Aurelio De Rosa , because this is the result of console.log(obj.prop.getFullname), it is accessing the method inside the object and because it is nested the console.log is targeting first the obj, then the prop key-object, and then returns the value inside the key fullname ("Aurelio De Rosa"), as the method getFullname requires: getFullname: function() { return this.fullname; } . 
//ANSWER:
// undefined , undefined is printed because the console.log(test()); implies console.log(obj.prop.getFullname) but was declared as a variable var, and doesnt recognize it or remember it for being out of the scope.
//If we would want to print Aurelio De ROsa again, we should use something like this:
 let bindedTest = test.bind(obj.prop);

 console.log(bindedTest());

// 4. What will you see in the console for the following example?

  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);   
  
  //// 
// ANSWER: 
// it prints 1 , because the console.log(a) is just console.logging variable a which is outside the function a = 1; and b() is not console.logging anything. If you console.log b() it will print undefined.