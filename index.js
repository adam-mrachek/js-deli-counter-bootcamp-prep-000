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

function currentLine(deliLine) {
  if (deliLine === 0) {
    return "The line is currently empty.";
  } else {
    var line = "The line is currently: ";
    for (var i = 0; i < deliLine.length - 1; i++) {
      line += `${i + 1}. ${deliLine[i]}, `;
    }
  }
  return line;
}
