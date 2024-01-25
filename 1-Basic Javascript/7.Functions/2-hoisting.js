/*the key difference between function declaration and function expression*/
/*
 hoisting is the process of moving funciton declaration to the top of the file
 & this is done automatically by the javascript engine.

 but the same doesn't work with function expression.
*/


walk();

function walk() {
    console.log('walk');
}



run();

const run = function() {
    console.log('run');
}