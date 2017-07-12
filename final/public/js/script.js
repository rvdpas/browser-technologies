// queryselector polyfill
if (!document.querySelectorAll) {
  document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'), elements = [], element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
  };
}

if (!document.querySelector) {
  document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return (elements.length) ? elements[0] : null;
  };
}

var groceryList = document.querySelectorAll('.grocerys');
var img = document.querySelectorAll('img');
var input = document.querySelectorAll('input');
var title = document.querySelector('title');
console.log(title)

if(document.addEventListener) {
  for (var i=0; i<img.length; i++) {
    img[i].addEventListener('dragstart', drag);
  }
  for (var i = 0; i < groceryList.length; i ++) {
    groceryList[i].addEventListener('dragover', dropToggle);
    groceryList[i].addEventListener('dragleave', dropToggle);
    groceryList[i].addEventListener('drop', drop);
  }
} else {
  title.innerHTML = "Add ingredients by clicking the button";
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

