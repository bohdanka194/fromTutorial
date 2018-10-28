
    console.log( "ready!" );

    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';

    // your code 
    document.querySelector('.click-on-me').onclick = function() {
        alert('Ouch! Stop poking me!');
    }

    document.querySelector('.click-on-me').textContent ="ahahahah";


var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png'){
        myImage.setAttribute('src', 'images/js770.jpg');
    } else{
        myImage.setAttribute('src','images/firefox-icon.png');
    }
}