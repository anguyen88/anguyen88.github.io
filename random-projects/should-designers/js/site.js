var jobTitle = [
    "developers",
    "designers",
    "information architects",
    "analysts",
    "IT professionals",
    "network engineers",
    "technical consultants",
    "pilots",
    "pirates",
    "teachers",
    "farmers",
    "parole offices",
    "the pope",
    "priests",
    "baristas",
    "recruiters",
    "managers",
    "writers",
    "Fred Durst"
];

var jobRole = [
    "swindle",
    "code",
    "design",
    "build houses",
    "shine shoes",
    "recruit",
    "dance",
    "act",
    "clean",
    "write",
    "dig",
    "solve complex algebraic equations",
    "vape",
    "vape",
    "do their jobs",
    "make dope espresso art",
    "come up with rad marketing strategies",
    "solution the shit out of problems",
    "devise dope innovative solutions",
    "break stuff"
];


document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        title.innerHTML = jobTitle[Math.floor(Math.random() * jobTitle.length)];
        duty.innerHTML = jobRole[Math.floor(Math.random() * jobRole.length)];
    }
}


var title = document.querySelector('#job-title');
var duty = document.querySelector('#job-role');
var randomizeJobs = function randomizeJobs() {
    title.innerHTML = jobTitle[Math.floor(Math.random() * jobTitle.length)];
    duty.innerHTML = jobRole[Math.floor(Math.random() * jobRole.length)];
};

['button', '.logo'].forEach(function(selector) {
    document.querySelector(selector).addEventListener('click', randomizeJobs);
});