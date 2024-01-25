
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

/*
const another = {};
for(let key in circle) 
    another[key] = circle[key];
*/


// Object.assign() takes all the properties and funcitons of the object and assign it to an empty object
// const another = Object.assign({}, circle);

// const another = Object.assign({
//     color: 'yellow',
// }, circle);


const another = {...circle};

console.log(another);