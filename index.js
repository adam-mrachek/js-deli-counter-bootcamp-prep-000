var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line === 0) {
    return "The line is currently empty.";
  } else {
    var queue = "The line is currently: ";
    for (var i = 0; i < line.length - 1; i++) {
      queue += `${i + 1}. ${deliLine[i]}, `;
    }
  }
  return queue;
}
