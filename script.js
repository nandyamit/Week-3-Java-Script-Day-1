// Change the values and operators below to test your algorithm meets all conditions
const x = 10;
const expression1 = (x < 25);
const expression2 = (x > 9);

// Write Your JavaScript Code Here


if (expression1 && expression2 ) {
    console.log  ("True ✅ True ✅");
}


if (expression1 || expression2 ) {
    console.log  ("True ✅ False ❌");
}

if (expression2) { 
    console.log ("False ❌ True ✅");
}

if(expression1 || expression2) {
    console.log ("False ❌ False ❌");
}

//if (hungerLevel < 50) {
  //  console.log("I'm full!");
  //}
