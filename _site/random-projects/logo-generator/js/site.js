(function() {
    'use strict';

    var textReflect = function textReflect() {
        var nameValue = document.getElementById("name").value;
        document.getElementById("logo-output").innerHTML = nameValue;
    };
    document.addEventListener('keyup', textReflect);

    var img = document.querySelector('.logo');
    var randomizeImages = function randomizeImages() {
        img.src = 'logos/' + (Math.floor(Math.random() * 47) + 1) + '.png';
    };

    ['button', '.logo'].forEach(function(selector) {
        document.querySelector(selector).addEventListener('click', randomizeImages);
    });

}());