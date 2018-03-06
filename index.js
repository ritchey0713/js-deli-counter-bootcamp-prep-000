var katzDeli = [];

function takeANumber(katzDeliLine,name){
  var position = katzDeliLine.length
  katzDeliLine.push(name)
  return "welcome " + name + "." + "You are " + position + "in Line"; 
}