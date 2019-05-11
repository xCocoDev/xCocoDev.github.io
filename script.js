const aboutButton = document.getElementById("portfolio");
const gridWrapper = document.getElementById("portfolioGrid");

function portfolioClicked() {
    const currentDisplay = gridWrapper.style.display;
    console.log(currentDisplay);
    //gridWrapper.style.display = currentDisplay === '' ? 'grid' : '';
}

aboutButton.addEventListener("click", portfolioClicked);