var bingopiece = [
    "Pope winks ;)",
    "Pope X Nutter collaboration",
    "Pope eats a Jim's cheesesteak",
    "Batteries are thrown at the Pope",
    "Pope drinks a citywide",
    "Pope does the whip, and the neh neh",
    "Pope forgives hitchbot destroyers",
    "Pope gets a photo with Rocky Statue",
    "Someone takes a selfie with Pope",
    "Pope condemns SEPTA",
    "Pope does the Philly Taco",
    "Pope kisses liberty bell",
    "Road work not complete by the time Pope arrives",
    "Kid Hazo presents a great pope piece",
    "Pope goes to P.O.P.E",
    "Pope v. Philly Jesus",
    "PPA gives Popemobile a ticket. Fuck you PPA",
    "Pope eats pizza from Pope pizza box",
    "Pope says jawn",
    "Pope drinks an Arctic Splash",
    "Pope up beer garden",
    "Pope absolves John Street of all his sins",
    "Pope says Go Eagles!",
    "Pope blesses the Phanatic",
    "Pope visits Point Breeze"
];


var listItems = '';

var shuffle = function shuffle(array) {
    var size = array.length;
    var rand;
    var temp;
    for (var i = 0; i < size; i += 1) {
        rand = Math.floor(i + Math.random() * (size - i));
        temp = array[rand];
        array[rand] = array[i];
        array[i] = temp;
    }
    return array;
}

shuffle(bingopiece).forEach(function(entry) {
    listItems += '<li class="container"><p>' + entry + '</p></li>';
});

document.getElementById("bingo-board").innerHTML = listItems;