var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var compguess = '';
var wins = 0;
var losses = 0;
var winstext = document.getElementById("wins");
var guesses = 10
var guessestext = document.getElementById("guesses")
var lossestext = document.getElementById("losses")
var guessesmade = 0
var guessesmadetext = document.getElementById("currentguess")

function removeElement() {
    var element = document.getElementById('button');
    element.parentNode.removeChild(element);
}

function gamestart() {
    removeElement()
function compmakeguess(){
    comprandom = [Math.floor((Math.random()) * letters.length)];
    if(comprandom == 0) {
             compguess = 'a'
        console.log(compguess)}
    else if (comprandom == 1) {
         compguess = 'b'
        console.log(compguess)}
    else if (comprandom == 2) {
         compguess = 'c'
    console.log(compguess)}
    else if (comprandom == 3) {
         compguess = 'd'
    console.log(compguess)}
    else if (comprandom == 4) {
         compguess = 'e'
    console.log(compguess)}
    else if (comprandom == 5) {
         compguess = 'f'
    console.log(compguess)}
    else if (comprandom == 6) {
         compguess = 'g'
    console.log(compguess)}
    else if (comprandom == 7) {
         compguess = 'h'
    console.log(compguess)}
    else if (comprandom == 8) {
         compguess = 'i'
    console.log(compguess)}
    else if (comprandom == 9) {
         compguess = 'j'
    console.log(compguess)}
    else if (comprandom == 10) {
         compguess = 'k'
    console.log(compguess)}
    else if (comprandom == 11) {
         compguess = 'l'
    console.log(compguess)}
    else if (comprandom == 12) {
         compguess = 'm'
    console.log(compguess)}
    else if (comprandom == 13) {
         compguess = 'n'
    console.log(compguess)}
    else if (comprandom == 14) {
         compguess = 'o'
    console.log(compguess)}
    else if (comprandom == 15) {
         compguess = 'p'
    console.log(compguess)}
    else if (comprandom == 16) {
         compguess = 'q'
    console.log(compguess)}
    else if (comprandom == 17) {
         compguess = 'r'
    console.log(compguess)}
    else if (comprandom == 18) {
         compguess = 's'
    console.log(compguess)}
    else if (comprandom == 19) {
         compguess = 't'
    console.log(compguess)}
    else if (comprandom == 20) {
         compguess = 'u'
    console.log(compguess)}
    else if (comprandom == 21) {
         compguess = 'v'
    console.log(compguess)}
    else if (comprandom == 22) {
         compguess = 'w'
    console.log(compguess)}
    else if (comprandom == 23) {
         compguess = 'x'
    console.log(compguess)}
    else if (comprandom == 24) {
         compguess = 'y'
    console.log(compguess)}
    else if (comprandom == 25) {
         compguess = 'z'
    console.log(compguess)}
    else {console.log('an error occured!! :(')}
    guessestext.textContent = 'guesses:' + guesses
    guessesmade.textContent = 'guesses made:' + guessesmade
}




document.onkeyup = function(event) {
    var yourguess = event.key
    guessesmadetext.textContent = "guesses made:" + guessesmade
    if (yourguess === compguess) {
        wins++
        guesses=10;
        winstext.textContent = 'wins: ' + wins
        guessesmade = 0
        guessesmade.text = 'guesses made:' + guessesmade
        compguess = ''
        compmakeguess()
    }
    else {
        guesses--
        guessestext.textContent = 'guesses:' + guesses
    }
    if (guesses == 0) {
        losses ++
        lossestext.textContent = "losses: " + losses
        guesses = 10
        guessesmade = 0
        guessesmadetext.textContent = "guesses made:" + guessesmade
        compguess = ''
        compmakeguess()
    }
    guessesmade++
}

}
