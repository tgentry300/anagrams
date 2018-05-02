const result = document.getElementById("result")

function alphabetize(word) {
    return word.toLowerCase().split("").sort().join("").trim();
}

document.getElementById("findButton").onclick = function() {
    const typedText = document.getElementById("input").value;
    const alphabetizedTypedText = alphabetize(typedText);

    for(let word of words) {
        if(alphabetize(word) === alphabetizedTypedText){
            result.textContent += " " + word
        }
        
    }
// document.write(sorted)
}
//    console.log(alphabetize("stairs"))