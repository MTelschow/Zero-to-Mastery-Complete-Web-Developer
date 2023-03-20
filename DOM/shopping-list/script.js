var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("x"));
	li.appendChild(button);
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event){
	event.target.classList.toggle("done");
}

function removeItem(event){
	const item = event.target.parentElement;
	ul.removeChild(item);
}


function clickItem(event){
	if (event.target.tagName === 'SPAN'){
		toggleDone(event);
	}
	else if (event.target.tagName === 'BUTTON'){
		removeItem(event);
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener('click', clickItem);