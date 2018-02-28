console.log('timezone picker');

let myInit = {
    mode: 'no-cors',
};

let test = new Request('https://wwsk0groeg.execute-api.eu-central-1.amazonaws.com/Prod/', myInit);
console.log(test);
fetch(test).then(function(response){
    console.log(response);
});