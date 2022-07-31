//btnClear points to the #clear-button element in the DOM
const btnClear = document.querySelector('#clear-button');

//Adding and event listener: btnClear will react on the click event
//When the btnClear is clicked, then the callback fuction 
//(the 2nd argument of the event listener) will be called. 
btnClear.addEventListener("click", function() {
    console.log("Το κουμπί πατήθηκε");
	document.getElementById("todo-list").innerHTML="";
});

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
	ev.target.classList.toggle('completed');}
}
, false);

var input = document.getElementById("new-item");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var li = document.createElement("li");
        var inputValue = document.getElementById("new-item").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        document.getElementById("todo-list").appendChild(li);
        document.getElementById("new-item").value = "";}
	
});


	//var div = this.parentElement;
    //div.style.display = "none";
//list.addEventListener('dblclick',function(e){

