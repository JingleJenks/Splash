window.addEventListener("load", loadWelcome);


function loadWelcome() {
    console.log("loadWelcome");
    document.querySelector(".text").addEventListener("click", loadOcean);
}

function loadOcean() {
    console.log("loadOcean");
    document.querySelector(".container").addEventListener("click", Ocean);
}

function Ocean() {
    console.log("scrollOcean");
    document.querySelector("#screen_ocean").classList.remove("hidden");
    document.querySelector("#screen_welcome").classList.remove("welcome_grid");

    document.querySelector("#screen_welcome").classList.add("hidden");
}