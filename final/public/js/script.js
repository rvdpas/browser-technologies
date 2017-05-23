// Nooroel Imamdi helped me with this part
// https://github.com/nooroel-imamdi

var groceryList = document.querySelectorAll('.grocerys');
var img = document.querySelectorAll('img');
var input = document.querySelectorAll('input');

function drag(e) {
  e.dataTransfer.setData('id', e.target.id);
}

function dropToggle(event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false); // ie fallback
}

function drop(event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var id = e.dataTransfer.getData('id');
  input[id].click();
}

img.forEach(function(img) {
  img.addEventListener('dragstart', drag);
});

groceryList.forEach(function(e) {
  e.addEventListener('dragover', dropToggle);
});

groceryList.forEach(function(e) {
  e.addEventListener('dragleave', dropToggle);
});

groceryList.forEach(function(e) {
  e.addEventListener('drop', drop);
});
