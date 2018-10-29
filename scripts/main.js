
    console.log( "ready!" );

    var myButtin = document.querySelector('button');
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Hello world!';
    function setUserName(){
        var myName = prompt("Please enter your name.");
        localStorage.setItem('name',myName);
        myHeading.textContent='Mozilla is cool, '+myName;
    }

    if(!localStorage.getItem('name')){
        setUserName();
    } else{
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozills is great, '+storedName;
    }

    myButtin.onclick = function(){
        setUserName();
    }

   

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