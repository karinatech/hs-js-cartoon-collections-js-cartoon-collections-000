
 
function dwarfRollCall(dwarves) {
	var result = ""
  for (var i = 0; i < dwarves.length; i++) {
   result += (i+1).toString()+ ". " + dwarves[i] + " ";
  }
  return result;
}
function summonCaptainPlanet(planeteerCalls){
 
	var result = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   result.push(planeteerCalls[i] + "!");
 let upper = function (planeteerCalls){
    return planeteerCalls.toUpperCase();
  }
  planeteerCalls.map(upper);
  }
  return result;
}

function summonCaptainPlanet(fruits){
  var result=[];
  for (var i = 0; i < fruits.length; i++) {
   result.push(fruits[i] + "!");
   result[i]= result[i].toUpperCase();
  }
  return result;
  
}
function longPlaneteerCalls(words) {
	var longWords = false;
	
  for (var i = 0; i < words.length; i++) {
    
    if (words[i].length > 4){
      longWords = true;
    }
     return longWords;
   }
}

function findTheCheese (snacks) {
  for (var i = 0; i < snacks.length; i++) {
var j = snacks.includes("cheddar")|| snacks.includes("swiss");
if( snacks.includes("cheddar")=== true ){
  return "cheddar"
   }
   if(snacks.includes("swiss")===true){
     return "swiss"
   }
  }
  return"no cheese!"
}


