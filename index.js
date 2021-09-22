const hexValuesDict = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function calculateHex() {
  const hexValueLabel = document.getElementById("hex_value");
  let rgbInputValue = document.getElementById("text_input").value.toString();
  // if RGB value is surrounded by quotes, remove them.
  if (isSurroundedByQuotes(rgbInputValue)) {
    rgbInputValue = rgbInputValue.substring(1, rgbInputValue.length - 1);
  }
  // if RGB value contains only a single quote at the start or the end, inform the user that
  // this is not the correct format.
  if (isSurroundedBySingleQuote(rgbInputValue)) {
    hexValueLabel.textContent =
      "Wrong input format. Fix your input and try again.";
    return;
  }

  rgbNumbers = rgbInputValue.split(",");

  if (isValidRgbColor(rgbNumbers)) {
    hexValueLabel.textContent = formHexValue(rgbNumbers);
  } else {
    hexValueLabel.textContent =
      "Wrong input format. Fix your input and try again.";
  }
}

function formHexValue(rgbNumbersArr) {
  let hexValue = "#";

  for (i = 0; i < rgbNumbersArr.length; i++) {
    let firstSymbol = Math.floor(rgbNumbersArr[i] / 16);
    let secondSymbol = ((rgbNumbersArr[i] / 16) % 1) * 16;
    hexValue += hexValuesDict[firstSymbol];
    hexValue += hexValuesDict[secondSymbol];
  }
  return hexValue;
}

function isValidRgbColor(rgbNumbersArr) {
  if (rgbNumbersArr.length != 3) return false;
  for (i = 0; i < 3; i++) {
    if (!Number.isInteger(Number(rgbNumbersArr[i]))) return false;
    if ((rgbNumbersArr[i] > 255) | (rgbNumbersArr[i] < 0)) return false;
  }
  return true;
}

function isSurroundedByQuotes(inputString) {
  return inputString[0] == '"' && inputString[inputString.length - 1] == '"';
}

function isSurroundedBySingleQuote(inputString) {
  return (
    (inputString[0] == '"' && inputString[inputString.length - 1] != '"') ||
    (inputString[0] != '"' && inputString[inputString.length - 1] == '"')
  );
}
