(function() {
    var indexTimer = localStorage.getItem("indexTimer"); // get the current index out of sequence
    console.log(indexTimer);

    // if timer needs to start
    if (indexTimer === "0") {
        var start = Date.now(); // eturns the number of milliseconds elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.
        localStorage.setItem("startTimer", start); // save the beginning of the timer to local storage
        localStorage.setItem("indexTimer", parseInt(indexTimer) + 1); // save the index number to local storage

        // if timer needs to end
    } else if (indexTimer === "1") {
        var endTimer = Date.now(); // get current time
        var startTimer = localStorage.getItem("startTimer"); // fetch time when timer started
        var timerDifference = endTimer - startTimer; // calculate time difference
        console.log("starting time = " + startTimer);
        console.log("ending time = " +endTimer);
        console.log("time difference = " +timerDifference);
        savePerformence();

        localStorage.setItem("indexTimer", parseInt(indexTimer) - 1); // save the index number to local storage
        console.log(indexTimer);
    }

    // function to save the performence of the participant
    function savePerformence() {
        var currentIndex = localStorage.getItem("index"); // get the current index out of sequence
        var mySeq = localStorage.getItem("sequence"); // get sequence out of localStorage

        // fetch variables
        var newQuestionNumber = mySeq.split(";")[currentIndex].split(",")[0]; // split questionNumber out of sequence line
        var newInteractionStyle = mySeq.split(";")[currentIndex].split(",")[2]; // split interactionStyle out of sequence line

        // save the performence data including index,questionNumber,interactionStyleUsed,timeOfPerformence
        localStorage.setItem("question_performence", currentIndex + "," + newQuestionNumber + "," + newInteractionStyle + "," + timerDifference); // save the index number to local storage
        console.log(localStorage.getItem("question_performence"));
    }
}());