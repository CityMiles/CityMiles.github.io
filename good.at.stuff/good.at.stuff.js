
var launchDate = "\nOh hello there! \n\nWe're so glad you're eager to join our new community. We're working hard towards an official launch this Summer ... \n\n Stay tuned for news and updates!"

buttonPress = () => {
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = breakingStory(input)
}

breakingStory = (string) => {
    return `Happy Friday! Just another awesome day in ${string}. =)`
}

dispRules = () => {
    alert(rules)
}

signUp = () => {
    alert(launchDate)
}



































// function buttonPress(){
//     var input = document.getElementById('input').value;
//     document.getElementById('output').innerHTML = breakingStory(input)
// }

// function dispRules(){
//     alert(rules)
// }

function pigLatin(string) {

var ay = 'ay'
var way = 'way'

  if (string.charAt(0) === "e" || string.charAt(0) === "a" || string.charAt(0) === "i" || string.charAt(0) === "o" || string.charAt(0) === "u") {

    return string + way

  } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" && string.charAt(1) === "q" && string.charAt(2) === "u") {

    var newArr = string.split('')
    var firstLetter = newArr.shift()
    var secondLetter = newArr.shift()
    var thirdLetter = newArr.shift()
    var newString = newArr.join('')
    var newPig = newString + firstLetter + secondLetter + thirdLetter + ay

    return newPig

  } else if (string.charAt(0) === "q" && string.charAt(1) === "u") {

    var newArr = string.split('')
    var firstLetter = newArr.shift()
    var secondLetter = newArr.shift()
    var newString = newArr.join('')
    var newPig = newString + firstLetter + secondLetter + ay

    return newPig

  } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" &&
  string.charAt(1) != "e" && string.charAt(1) != "a" && string.charAt(1) != "i" && string.charAt(1) != "o" && string.charAt(1) != "u" &&
  string.charAt(2) != "e" && string.charAt(2) != "a" && string.charAt(2) != "i" && string.charAt(2) != "o" && string.charAt(2) != "u") {

    var newArr = string.split('')
    var firstLetter = newArr.shift()
    var secondLetter = newArr.shift()
    var thirdLetter = newArr.shift()
    var newString = newArr.join('')
    var newPig = newString + firstLetter + secondLetter + thirdLetter + ay

    return newPig

  } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u" &&
  string.charAt(1) != "e" && string.charAt(1) != "a" && string.charAt(1) != "i" && string.charAt(1) != "o" && string.charAt(1) != "u") {

    var newArr = string.split('')
    var firstLetter = newArr.shift()
    var secondLetter = newArr.shift()
    var newString = newArr.join('')
    var newPig = newString + firstLetter + secondLetter + ay

    return newPig

  } else if (string.charAt(0) != "e" && string.charAt(0) != "a" && string.charAt(0) != "i" && string.charAt(0) != "o" && string.charAt(0) != "u") {

    var newArr = string.split('')
    var firstLetter = newArr.shift()
    var newString = newArr.join('')
    var newPig = newString + firstLetter + ay

    return newPig
  }
}

var rules = "PIG LATIN RULES:\n* For words beginning with a vowel, add 'way' to the end.\n\n* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add 'ay'. \n\n* For words beginning with 'y', treat 'y' as a consonant.\n\n* If first consonants include 'qu', move the 'u' along with the 'q'."
