var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  
}

function nowServing(katzDeliLine){
  var name = Steven;
  if (katzDeliLine.length == 0){
  return "There is nobody waiting to be served!"}
  else {
    katzDeliLine.shift(name)
  return `Currently serving ${name}`
    
  }
  
  
  
}