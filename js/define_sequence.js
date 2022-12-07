(function() {
    var currentIndex = localStorage.getItem("index"); // get the current index out of sequence
    var mySeq = localStorage.getItem("sequence"); // get sequence out of localStorage

    // fetch variables
    var newQuestionNumber = mySeq.split(";")[currentIndex].split(",")[0]; // split questionNumber out of sequence line
    var newQuestion = mySeq.split(";")[currentIndex].split(",")[1]; // split question out of sequence line
    var newInteractionStyle = mySeq.split(";")[currentIndex].split(",")[2]; // split interactionStyle out of sequence line
    console.log(newQuestionNumber);
    console.log(newQuestion);
    console.log(newInteractionStyle);

    // display variables in the html file
    document.getElementById("q_header").innerHTML = "Question " + (parseInt(currentIndex) + 1);
    document.getElementById("q_content").innerHTML = newQuestion;
    document.getElementById("q_interaction").innerHTML = "Use " + newInteractionStyle;

    // direct to the fitting interactionStyle screen
    document.getElementById('q_button').onclick = function() { // look if button is pressed
        // go go the fitting webPage
        if (newInteractionStyle === "BezelRotation") { // if bezelrotation go to bezelrotation screen
            window.location.href = "Lsc/BezelRotation_LNSc.html";
        } else if (newInteractionStyle === "MS-tapping") { // if MS-tapping go to MS-tapping screen
            window.location.href = "Lsc/MS-tapping_LNSc.html";
        } else if (newInteractionStyle === "Swiping") { // if swiping go to swiping screen
            window.location.href = "Lsc/Swiping_LNSc.html";
        }
    };
}());