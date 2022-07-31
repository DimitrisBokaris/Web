//ο χρόνος τώρα σε ms
//current time in ms
let start = new Date().getTime();

//ο συνολικός χρόνος του παίχτη
//the player's total time
let totalTime = 0;

//ο αριθμός των προπαθειών
//number of attempts 
let attempts = 0;

//το παιχνίδι τελειώνει μετά από τόσες προσπάθειες 
//max attempts
const maxAttempts = 10;


//εμφάνισε τον πρώτο κύκλο
//show the first circle
var startTime, endTime;
document.querySelector("#shape").style.width=0;
document.querySelector("#shape").style.height=0;
document.querySelector("#shape").style.border=0;
//εκκινηση με κουμπι εναρξη

function startfunction(){
    document.querySelector("#shape").style.width=0;
    document.querySelector("#shape").style.height=0;
    document.querySelector("#shape").style.border=0;
    attempts=0;
    totalTime=0;
    document.getElementById("timeTaken").textContent="";
    document.getElementById("totalTime").textContent="";
    appearAfterDelay();
}


//επιστρέφει ένα τυχαίο χρώμα
function getRandomColor() {

    let color = '#';
    //κάντε τις απαραίτητες αλλαγές ώστε η getRandomColor() να επιστρέφει ένα τυχαίο χρώμα, αντί για το κόκκινο που επιστρέφει τώρα
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } 
    //το χρωμα να μην ειναι ασπρο ωστε να ειναι ορατο 
    while (color=="#FFFFFF"){
        color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    }

    return color;
}




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//Εμφανίζει σε τυχαία θέση έναν κύκλο με τυχαία διάμετρο και χρώμα
function makeShapeAppear() {
    //Αντί για σταθερές τιμές, δώστε στις μεταβλητές top, left, width τυχαίες τιμές (που να έχουν νόημα),
    //ώστε οι κύκλοι να εμφανίζονται σε τυχαία θέση και με τυχαία διάμετρο (ούτε τεράστια, ούτε πάρα πολύ μικρή)
    //και να είναι πάντα μέσα στο πλαίσιο
    let circle = document.getElementById("shape");
    circle.style.backgroundColor= getRandomColor();

    let r=getRandomIntInclusive(50,200);
    circle.style.left=getRandomIntInclusive(0,800-r);
    circle.style.top=getRandomIntInclusive(0,500-r);
    circle.style.width=r;
    circle.style.height=r;

    document.querySelector("#shape").style.border='1px solid black';
    document.querySelector("#shape").style.display = "block";   
    startTime = new Date(); 
}

//περιμένει από 0 ως 2 δευτερόλεπτα και εμφανίζει έναν κύκλο
function appearAfterDelay() {
    //προσθέστε κώδικα ώστε το σχήμα να εμφανίζεται μετά από τυχαίο διάστημα 0-2 δευτερολέπτων
    let delayInMilliseconds = getRandomIntInclusive(0,2000);
    setTimeout(makeShapeAppear, delayInMilliseconds);
}

//όταν ο παίχτης κάνει κλικ σε ένα σχήμα πρέπει να γίνουν μια σειρά από πράγματα...
document.querySelector("#shape").onclick = function () {

    endTime = new Date();
    let timeDiff = endTime - startTime;
    timeDiff /= 1000;
    document.getElementById("timeTaken").textContent=timeDiff
    totalTime+=timeDiff;
    attempts+=1;
    if (attempts==10){
        document.getElementById("totalTime").textContent=totalTime;
        attempts=0;
        totalTime=0;
    }
    appearAfterDelay();
    document.querySelector("#shape").style.width=0;
    document.querySelector("#shape").style.height=0;
    document.querySelector("#shape").style.border=0;
}