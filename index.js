// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  
  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToGuadalupe();
  sayHelloToLiz();
  sayHelloToSamip();

  function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Goodbye", "Julio");
  
  
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
  
  console.log(say("Howdy", "partner"));
  
  