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
        window.open("BezelRotation_LNSc.html#BRthree_Lsc", "_self"); // if clicked go to page ##
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
}());