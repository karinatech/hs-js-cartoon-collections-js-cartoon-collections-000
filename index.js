
 
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
  snacks = ["crackers", "cheddar", "thyme"];
 var cheese = ["cheddar", "gouda", "mazarella"];
	for (var i = 0; i < snacks.length; i++) {
		for (var n = 0; n < cheese.length; n++) {

			if ( cheese[n]=== snacks[i]) {
				return snacks[i];
			} else{
		  
		}
	  		  	  
				return "no cheese!";
	  }
   }
}
function findTheCheese (ingredients) {
	ingredients = ["garlic", "rosemary", "bread"];
	 var cheese = ["cheddar", "gouda", "mazarella"];
		for (var g = 0; g < ingredients.length; g++) {
		  	for (var n = 0; n < cheese.length; n++) {
			if ( cheese[n] != ingredients[g]) {
				return "no cheese!";
			}
		  	}
		}
}