(function() {
    // if screen is clicked look if all questions are answered
    document.getElementById('b_comp').onclick = function() { // look if button is pressed
        var maxIndex = localStorage.getItem("indexMax"); // get sequence out of localStorage
        var currentIndex = localStorage.getItem("index"); // get the current index out of sequence
        currentIndex++;
        localStorage.setItem("index", currentIndex); // save the index number to local storage
        if (currentIndex <= maxIndex - 1) { // if not all questions are answered go to the next question
            window.location.href = "Questions.html";
        } else { // else go to the completion screen 
        	localStorage.setItem("index", 0); // reset indexNumber
            window.location.href = "Bravo.html#bravo_completed";
        }
    };
}());