function dwarfRollCall(dwarves) {
  var dwarfnames = []
  for (var i = 0; i < dwarves.length; i++) {
    dwarfnames.push((i+1) + ". " + dwarves[i] + " ")
  }
  var halfdwarf = dwarfnames.slice((dwarfnames.length / 2), dwarfnames.length)
  var dwarfstring = halfdwarf.join("")
  return(dwarfstring)





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
<<<<<<< HEAD
}
=======
}
>>>>>>> a3e175bfb2d9d08e0e6e2e75976d6dcef5c41cd1
// return array with words starting with "B"
// if {James, Bobby, Sally}, it'll return Bobby in an array

function withb(words) {
  var output =[]
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b")) {
      output.push(word[i])
    }
  }
  return output
}
