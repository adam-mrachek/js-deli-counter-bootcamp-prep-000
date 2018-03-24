var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return deliLine.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
