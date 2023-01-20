/* global tau */
(function() {
    var page = document.getElementById("selector-page"),
        selector = document.getElementById("selector"),
        selectorComponent,
        clickBound;

    /**
     * click event handler for the selector
     * @param {Event} event
     */
    function onClick(event) {
        var target = event.target;
        if (target.classList.contains("ui-selector-indicator")) {
            return;
        }
    }

    /**
     * pagebeforeshow event handler
     * Do preparatory works and adds event listeners
     */
    page.addEventListener("pagebeforeshow", function() {
        clickBound = onClick.bind(null);
        selectorComponent = tau.widget.Selector(selector);
        selector.addEventListener("click", clickBound, false);
    });

    /**
     * pagebeforehide event handler
     * Destroys and removes event listeners
     */
    page.addEventListener("pagebeforehide", function() {
        selector.removeEventListener("click", clickBound, false);
        selectorComponent.destroy();
    });

    // if clicked submit the answer to the system and go to the bravo screen
    document.getElementById("selector").addEventListener("click", function() {
        var answerBezel = Number(document.getElementsByClassName("ui-selector-indicator-text")[0].innerText); // fetch the submitted number
        localStorage.setItem("answerPart", answerBezel);
        window.location.href = "../Bravo.html#bravo_one"; // if clicked go to page ##
    });
}());