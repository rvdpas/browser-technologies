var groceryList = document.querySelectorAll('.grocerys');
var img = document.querySelectorAll('img');
var input = document.querySelectorAll('input');

// if foreach isn't supported use a for loop
if (!('forEach' in Array.prototype)) {
    Array.prototype.forEach= function(action, that /*opt*/) {
        for (var i= 0, n= this.length; i<n; i++)
            if (i in this)
                action.call(that, this[i], i, this);
    };
} else {
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
}

function drag(e) {
  e.dataTransfer.setData('id', e.target.id);
}

function dropToggle(event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false); // ie fallback
}

function drop(event) {
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var id = event.dataTransfer.getData('id');
  input[id].click();
}

