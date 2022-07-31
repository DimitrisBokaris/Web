// Στο εξωτερικό αρχείο vouna.js περιέχεται ένας πίνακας πινάκων δύο στοιχείων,
// το πρώτο από τα οποία είναι μια περιγραφή ενός προορισμού σε Ελλληνικό βουνό
// και το δεύτερο ένα σχετικό URL μιας φωτογραφίας αντίστοιχα στον φάκελο ./img.

// File vouna.js contains an array with 2 elements. The 1st is a description of
// a destination in a Greek mountain. The 2nd element is the URL of a photo of
// the destination.

const thumbs = document.querySelectorAll(".mikrografies img");

// Όταν φορτώνει η εφαρμογή, η επιλεγμένη μικρογραφία είναι η 1η στον πίνακα 
// thumbs.
// Κάθε μικρογραφία μπορεί να κλικαριστεί. Όταν γίνεται αυτό θα εκτελείται 
// η συνάρτηση imgActivate()
// Η συνάρτηση, που καλείται όταν γίνει κλικ σε μια από τις εικόνες του πίνακα
// thumbs, έχει σαν όρισμα ένα event object. Η συνάρτηση:
// - εμφανίζει στην περιοχή panel-main τη μικρογραφία που μόλις πατήθηκε
// - φροντίζει ώστε μόνο η μικρογραφία που μόλις πατήθηκε να έχει διαφάνεια 50%

// When the app loads, the selected thumbnail is the first one in the array
// thumbs.
// Each thumbnail can be clicked. If clicked, the function imgActivate() is 
// called which :
// - displays the just clicked image in the area panel-main 
// - makes sure that only the just clicked thumbnail has opacity 50%. 

function imgActivate(e) {
  console.log("1 κλικ");
  console.log(e.target);
  console.log(previmg);
  previmg.classList.toggle('activeThumb');
  e.target.classList.toggle('activeThumb');
  var expandImg = document.getElementById('selected');
  expandImg.src = e.target.src;
  expandImg.style.opacity="1.0"
  expandImg.title=e.target.textContent;
  previmg=e.target;
  var div = document.getElementsByClassName('perigrafi');
  console.log(div);
  div[0].innerHTML = e.target.textContent;
  curindex=e.target.index;
}


var previmg=document.getElementById('selected');
var curindex=0;

var t=document.querySelector('.mikrografies ');
t.onclick=imgActivate;


function newpic(){

  let i =newvouna.length
  let j =Math.floor(Math.random() * i)
  select(j)
  curindex=j;
}


function prevpic(){
  let j;
  if (curindex==0){
    j=15;
  }
  else{
    j =curindex-1;
  }
  curindex=j
  select(j)
}

function nextpic(){
  let j;
  if (curindex==15){
    j=0;
  }
  else{
    j =curindex+1;
  }
  curindex=j
  select(j)
}

function select(j){
  let mountain = document.createElement("img");
  mountain.src=newvouna[j][1];
  mountain.textContent=newvouna[j][0];
  previmg.classList.toggle('activeThumb');
  mountain.classList.toggle('activeThumb');
  var expandImg = document.getElementById('selected');
  expandImg.src = mountain.src;
  expandImg.style.opacity="1.0"
  expandImg.title=mountain.textContent;
  previmg=mountain;
  var div = document.getElementsByClassName('perigrafi');
  div[0].innerHTML = mountain.textContent;
}

// Επιστρέφει τον πίνακα arr με τυχαία διάταξη στοιχείων
// Returns a shuffled copy of array arr
//shuffle array https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}
newvouna=shuffleArray(vouna);


for(let i=0; i<newvouna.length; i++ ){
  let mountain = document.createElement("img");
  mountain.src=newvouna[i][1];
  mountain.textContent=newvouna[i][0];
  mountain.index=i
  t.appendChild(mountain);
}
previmg.src=newvouna[0][1];