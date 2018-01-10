function dwarfRollCall(dwarves) {
  var dwarfnames = []
  for (var i = 0; i < dwarves.length; i++) {
    dwarfnames.push((i+1) + ". " + dwarves[i] + " ")
  }
  var dwarfstring = dwarfnames.join("")
  return(dwarfstring)
}

function summonCaptainPlanet(planeteerCalls){
  var converted = []
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase()
    converted.push(planeteerCalls[i] + "!")
  }
  return(converted)
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert") {
      return foods[i]
    }
  }
  if (foods !== "cheddar" || "gouda" || "camembert") {
    return "no cheese!"
  }
}
