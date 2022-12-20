// within this function the (random) sequence of the questions is initialized and the index is set to zero
(function() {

    var permissionRequests = ["http://tizen.org/privilege/externalstorage"];
    for (var i = 0; i < permissionRequests.length; i++) {
        var result = tizen.ppm.checkPermission(permissionRequests[i]);
        switch (result) {
            case "PPM_ALLOW":
                console.log("allowed");
                break;
            case "PPM_DENY":
                console.log("denied");
                break;
            case "PPM_ASK":
                console.log("asked");
                tizen.ppm.requestPermission(permissionRequests[i], permissionSuccess, errorCallback);
                break;
        }
    }
function errorCallback(){}
    function permissionSuccess() {
        writeToFile("aaa", "aa", "w");
        localStorage.clear(); // clear localStorage when there are still attributes

        var index = 0; // set index to zero
        localStorage.setItem("index", index); // save the index number to local storage
        var indexTimer = 0;
        localStorage.setItem("indexTimer", indexTimer); // save the index number to local storage
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
        for (var b = 0; b < questionsList.length; b++) {
            newSequence += questionsList[b] + "," + interactionList[b] + ";";
        }
        localStorage.setItem("sequence", newSequence); // save the index number to local storage with name "sequence"
        localStorage.setItem("indexMax", questionsList.length); // save the number of questions in the "sequence"
    }



    function writeToFile(fileName, content, mode) {
        var fileHandleWrite = tizen.filesystem.openFile("documents/" + fileName, mode);
        console.log("File opened for writing");
        fileHandleWrite.writeString(content);
        fileHandleWrite.close();
        console.log("File closed for writing");
    }

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

    //    createFile();

    //    // small checker
    //    var currentIndex = localStorage.getItem("index"); // get the current index out of sequence
    //    var mySeq = localStorage.getItem("sequence"); // get sequence out of localStorage
    //    var TimerIndex = localStorage.getItem("indexTimer"); // get the current index out of sequence
    //
    //    console.log(currentIndex);
    //    console.log(mySeq);
    //    console.log(TimerIndex);

    /* attempt number one*/

    //    /* example code also not working. */
    //    var fileHandleWrite = tizen.filesystem.openFile("documents/file", "w");
    //    console.log("File opened for writing");
    //    fileHandleWrite.writeString("Lorem ipsum dolor sit amet...");
    //    console.log("String has been written to the file");
    //    fileHandleWrite.close();
    ////    /* Opening file for read - this code assumes that there is */
    //    /* a file named "file" in documents directory. */
    //    var fileHandleRead = tizen.filesystem.openFile("documents/file", "r");
    //    console.log("File opened for reading");
    //    var fileContent = fileHandleRead.readString();
    //    console.log("File content: " + fileContent);
    //    fileHandleRead.close();



}());