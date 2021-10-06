// //DIVER SCROLL ANIMATION 
const observer40 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const diver = entry.target.querySelector('.diver');

        if (entry.isIntersecting) {
            // Add the animation class
            diver.classList.add('ani_diver')

            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        diver.classList.remove('ani_diver')

    });

});
observer40.observe(document.querySelector('.diver-wrapper'));

//FREEDIVER SCROLL ANIMATION 
const observer120 = new IntersectionObserver(entries => {
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

observer120.observe(document.querySelector('.freediver-wrapper'));


//SPERM SCROLL ANIMATION 
const observer1000 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const sperm = entry.target.querySelector('.sperm');

        if (entry.isIntersecting) {
            // Add the animation class
            sperm.classList.add('ani_sperm');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        sperm.classList.remove('ani_sperm')
    });

});

observer1000.observe(document.querySelector('.sperm-wrapper'));