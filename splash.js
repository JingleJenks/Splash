const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    console.log("1");
    entries.forEach(entry => {
        // If the element is visible
        console.log("2");

        if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('ani_freediver');
        }
    });
    console.log("3");

});

observer.observe(document.querySelector('.freediver'));

// window.addEventListener("load", loadWelcome);

// function loadWelcome() {
//     console.log("loadWelcome");
//     document.querySelector(".text").addEventListener("click", loadOcean);
// }

// function loadOcean() {
//     console.log("loadOcean");
//     document.querySelector(".container").addEventListener("click", Ocean);
// }

// function Ocean() {
//     console.log("scrollOcean");
//     document.querySelector("#screen_ocean").classList.remove("hidden");
//     document.querySelector("#screen_welcome").classList.remove("welcome_grid");

//     document.querySelector("#screen_welcome").classList.add("hidden");
// }