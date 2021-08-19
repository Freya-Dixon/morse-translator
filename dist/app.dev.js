"use strict";

var translation = document.querySelector('#displayMorse');
console.log(translation);
var inputDisplay = document.querySelector('#getEnglish');
console.log(inputDisplay);
var values = document.querySelector('#getEnglish').value;
console.log(values);
var translateButton = document.querySelector('.translateBtn');
console.log(translateButton);

var getValue = function getValue() {
  var values = document.querySelector('#getEnglish').value;
  var upperCase = values.toUpperCase();
  console.log(upperCase);
  translation.innerHTML = translate(upperCase);
};

translateButton.addEventListener('click', getValue);

var translate = function translate() {
  var valuesTranslate = document.querySelector('#getEnglish').value.toUpperCase();

  switch (valuesTranslate) {
    case "A":
      return "*-";
      break;

    case "B":
      return "-***";
      break;

    case "C":
      return "-*-*";
      break;

    case "D":
      return "-**";
      break;

    case "E":
      return "*";
      break;

    case "F":
      return "**-*";
      break;

    case "G":
      return "--*";
      break;

    case "H":
      return "****";
      break;

    case "I":
      return "**";
      break;

    case "J":
      return "*---";
      break;

    case "K":
      return "-*-";
      break;

    case "L":
      return "*-**";
      break;

    case "M":
      return "--";
      break;

    case "N":
      return "-*";
      break;

    case "O":
      return "---";
      break;

    case "P":
      return "*--*";
      break;

    case "Q":
      return "--*-";
      break;

    case "R":
      return "*-*";
      break;

    case "S":
      return "***";
      break;

    case "T":
      return "-";
      break;

    case "U":
      return "**-";
      break;

    case "V":
      return "***-";
      break;

    case "W":
      return "*--";
      break;

    case "X":
      return "-**-";
      break;

    case "Y":
      return "-*--";
      break;

    case "Z":
      return "--**";
      break;

    case " ":
      return "/";
      break;

    default:
  }
};