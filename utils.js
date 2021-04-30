const HelloFunc = require('./helloworld');

//console.log(HelloFunc.Hello);
//console.log(HelloFunc.name);

//HelloFunc.Hello();


//setInterval
setInterval(() => {
    HelloFunc.Hello();
}, 1000);

//setTimeout
setInterval(() => {
    console.log(HelloFunc.name);
},5000);

//Local Module
//Global Module
//3rd Party Module/Package