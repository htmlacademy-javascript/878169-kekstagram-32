function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

checkStringLength('Hello', 5);

function isPalindrome(str) {
  const normalizedStr = str.replaceAll(' ', '').toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reversedStr;
}

isPalindrome('Улыбок тебе дед макар');

function extractDigitsFromString(input) {
  const inputStr = String(input);
  let digitsStr = '';
  for (const char of inputStr) {
    if (!isNaN(char) && char !== ' ') {
      digitsStr += char;
    }
  }
  const result = parseInt(digitsStr, 10);
  if (!isNaN(result)) {
    return result;
  }
  return NaN;
}

extractDigitsFromString('2023 год');
