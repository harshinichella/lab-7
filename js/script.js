function init(){
//add your javascrip between these two lines of code
  var button = document.getElementById("entrybutton");
  var message = document.getElementById("entryinput");
  var output = document.getElementById("textoutput")
  button.addEventListener('click', function() {
    alert("Harshini Chellasamy: "+message.value);
    output.innerHTML = message.value;
  });
}
window.addEventListener('load', init);
