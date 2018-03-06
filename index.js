var katzDeli = [];

function takeANumber(katzDeliLine,name){
  var spot = katzDeliLine.push(name);
  spot = katzDeliLine.length;
  return "Welcome, " + name + "." + "You are " + spot + "in Line"; 
}