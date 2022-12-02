// within this function the (random) sequence of the questions is initialized and the index is set to zero
function InitSequence() {
	localStorage.clear(); // clear localStorage when there are still attributes
	
    var index = 0; // set index to zero
    localStorage.setItem("index", index); // save the index number to local storage

    // Function to shuffle the sequence
    function shuffleAttributes(attribute) {
        for (var i = attribute.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = attribute[i];
            attribute[i] = attribute[j];
            attribute[j] = temp;
        }
    }

    // all of the questions to be asked
    var questionsList = [ // length should be a multiple of interactionsToUse.length
        "1,Can you insert the number 5?",
        "2,How many fingers do you have?",
        "3,2019 is how many year ago?",
        "4,Two + Six = ?",
        "5,Three - Two = ?",
        "6,One + Six = ?",
        "7,Which places comes after 8th?",
        "8,How many toes do you have?",
        "9,Can you insert the number 1?",
        "10,Can you insert the number 10?",
        "11,What is the best grade you can get?",
        "12,What is the worse grade you can get?",

    ];

    // all of the interactions to be used
    var interactionsToUse = [
        "BezelRotation",
        "MS-tapping",
        "Swiping",
    ];

    // set all the attributes in the interactionList with has the same length as the questions
    var interactionList = []; // make interactionList variable
    for (var j = 0; j < (questionsList.length / (interactionsToUse.length)); j++) { // loop  as many times as questions to use divided by the amount of interactions
        for (var z = 0; z < interactionsToUse.length; z++) {
            var a = interactionsToUse.length * j; // variable to count how many loops done
            interactionList[z + a] = interactionsToUse[z]; // add new interactions to list as array attributes
        }
    }

    // shuffle both the list of the questions and interactionStyles  
    shuffleAttributes(questionsList);
    shuffleAttributes(interactionList);

    // make the newSequence variable
    var newSequence = "";

    // loop to add the objects to the newSequence
    for (var i = 0; i < questionsList.length; i++) {
        newSequence += questionsList[i] + "," + interactionList[i] + ";";
    }
    localStorage.setItem("sequence", newSequence); // save the index number to local storage with name "sequence"
}