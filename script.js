const aboutButton       = document.getElementById("about");
const aboutContent      = document.getElementById("aboutId");
const resumeButton      = document.getElementById("resume");
const resumeContent     = document.getElementById("resumeId");
const portfolioButton   = document.getElementById("portfolio");
const portfolioContent  = document.getElementById("portfolioId");
const contactButton     = document.getElementById("contact");
const contactContent    = document.getElementById("contactId");

let currentTabName              = "about";
const websiteContentElements    = [ aboutContent, resumeContent, portfolioContent, contactContent];

function disableAllElementsExceptId(exceptElementId) {
    websiteContentElements.forEach(function(element) {
        if(element === null)
            return;

        let id = element.getAttribute("id");

        if(id === exceptElementId)
            return;

        setDisplayStyle(element, "none");
    });
}

function setDisplayStyle(element, styleName) {
    element.style.display = styleName;
}

function aboutClicked() {
    if(!setCurrentTab("about")) {
        return;
    }

    setDisplayStyle(aboutContent, "initial");
}

function resumeClicked() {
    if(!setCurrentTab("resume")) {
        return;
    }

    setDisplayStyle(resumeContent, "initial");
}

function portfolioClicked() {
    if(!setCurrentTab("portfolio")) {
        return;
    }

    setDisplayStyle(portfolioContent, "grid");
}

function contactClicked() {
    if(!setCurrentTab("contact")) {
        return;
    }

    setDisplayStyle(contactContent, "");
}

function isCurrentTab(tabName) {
    return currentTabName === tabName;
}

function setCurrentTab(elementName) {
    if(isCurrentTab(elementName)) {
        return false;
    }

    currentTabName = elementName;

    disableAllElementsExceptId(elementName + "-content");

    return true;
}

aboutButton.addEventListener("click", aboutClicked);
resumeButton.addEventListener("click", resumeClicked);
portfolioButton.addEventListener("click", portfolioClicked);
contactButton.addEventListener("click", contactClicked);