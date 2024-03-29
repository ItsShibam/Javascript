/*
function start() {
    for(let i=0;i<5;i++) {
        console.log(i);
    }
    console.log(i);
}
start();
*/



// if we use var inplace of let then i is accessable outside the scope also
function start() {
    for(var i=0;i<5;i++) {
        console.log(i);
    }
    console.log(i);
}
start();


/*
    var => function-scoped
    ES6(ES2015): let,const => block-scoped


    If we create a global variable using var then it is attached
    to the window object. But the same is not true for let.
*/