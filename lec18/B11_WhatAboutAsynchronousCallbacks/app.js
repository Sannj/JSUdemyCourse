// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

function keyPressHandler() {
    console.log('key press event!');   
}
// listen for the click event
document.addEventListener('click', clickHandler);
document.addEventListener('keypress', keyPressHandler);


waitThreeSeconds();
console.log('finished execution');