//FREEDIVER SCROLL ANIMATION 
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const freediver = entry.target.querySelector('.freediver');

        if (entry.isIntersecting) {
            // Add the animation class
            freediver.classList.add('ani_freediver');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        freediver.classList.remove('ani_freediver')
    });

});

observer.observe(document.querySelector('.freediver-wrapper'));

//DIVER SCROLL ANIMATION 

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