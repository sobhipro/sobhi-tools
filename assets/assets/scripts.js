function convertToUpperCase() {
  let inputText = document.getElementById('inputText').value;
  document.getElementById('outputText').value = inputText.toUpperCase();
}

function convertToLowerCase() {
  let inputText = document.getElementById('inputText').value;
  document.getElementById('outputText').value = inputText.toLowerCase();
}

function reverseText() {
  let inputText = document.getElementById('inputText').value;
  document.getElementById('outputText').value = inputText.split('').reverse().join('');
}
