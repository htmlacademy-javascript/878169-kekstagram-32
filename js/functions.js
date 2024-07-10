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

function meetingBeOnTimeCheck(startTime, endTime, meetingStart, meetingDuration) {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const meetingStartMinutes = timeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + meetingDuration;

  return meetingEndMinutes <= endMinutes && meetingStartMinutes >= startMinutes;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

meetingBeOnTimeCheck('08:00', '17:30', '14:00', 90);
