 const button = document.getElementById('myButton');
 const div = document.getElementById('myDiv');

 button.addEventListener('click', function() {
   div.innerHTML += "<h1 class='bg-info col-4 text-warning'>You clicked the button!</h1>";
 });

 function addItem() {
	var input = document.getElementById("new-item");
	var text = input.value;
	if (text === "") {
		return;
	}
	var li = document.createElement("li");
	li.textContent = text;
	document.getElementById("todo-list").appendChild(li);
	input.value = "";
}