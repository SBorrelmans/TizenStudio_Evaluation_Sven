/*global tau */
(function() {
    var page = document.getElementById("hsectionchangerPage"),
        changer = document.getElementById("hsectionchanger"),
        sectionLength = document.querySelectorAll("section").length,
        elPageIndicator = document.getElementById("pageIndicator"),
        sectionChanger,
        pageIndicator,
        pageIndicatorHandler;

    /**
     * pagebeforeshow event handler
     * Do preparatory works and adds event listeners
     */


//
//    document.addEventListener('rotarydetent', function(e){
//    	e.preventDefault(); 
//    	return;
//     });
//    
    page.addEventListener("pagebeforeshow", function() {
        // make PageIndicator
        pageIndicator = tau.widget.PageIndicator(elPageIndicator, {
            numberOfPages: sectionLength,
            maxPage: 10,
            layout: "linear",
        });

        pageIndicator.setActive(4);
        // make SectionChanger object
        sectionChanger = tau.widget.SectionChanger(changer, {
            circular: false,
            orientation: "horizontal",
            useBouncingEffect: true
        });
    });

    /**
     * pagehide event handler
     * Destroys and removes event listeners
     */
    page.addEventListener("pagehide", function() {
        // release object
        sectionChanger.destroy();

    });

    /**
     * sectionchange event handler
     * @param {Event} e
     */
    pageIndicatorHandler = function(e) {
        pageIndicator.setActive(e.detail.active);
    };

    changer.addEventListener("sectionchange", pageIndicatorHandler, false);

    // reference part
    document.getElementById("swiping_atrribute1").addEventListener("click", function() {
        localStorage.setItem("answerPart", "1");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute2").addEventListener("click", function() {
        localStorage.setItem("answerPart", "2");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute3").addEventListener("click", function() {
        localStorage.setItem("answerPart", "3");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute4").addEventListener("click", function() {
        localStorage.setItem("answerPart", "4");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute5").addEventListener("click", function() {
        localStorage.setItem("answerPart", "5");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute6").addEventListener("click", function() {
        localStorage.setItem("answerPart", "6");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute7").addEventListener("click", function() {
        localStorage.setItem("answerPart", "7");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute8").addEventListener("click", function() {
        localStorage.setItem("answerPart", "8");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute9").addEventListener("click", function() {
        localStorage.setItem("answerPart", "9");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });

    document.getElementById("swiping_atrribute10").addEventListener("click", function() {
        localStorage.setItem("answerPart", "10");
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });
}());