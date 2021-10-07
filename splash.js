//SPERM SCROLL ANIMATION 
const observer20 = new IntersectionObserver(entries => {
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
observer20.observe(document.querySelector('.sperm-wrapper'));

//SPERM TEXT SCROLL ANIMATION 
const observer21 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const boxsperm = entry.target.querySelector('.boxsperm');

        if (entry.isIntersecting) {
            // Add the animation class
            boxsperm.classList.add('ani_boxsperm');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        boxsperm.classList.remove('ani_boxsperm')

    });

});
observer21.observe(document.querySelector('.boxsperm_wrapper'));


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


//SQUID SCROLL ANIMATION 
const observer400 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const squid = entry.target.querySelector('.squid');

        if (entry.isIntersecting) {
            // Add the animation class
            squid.classList.add('ani_squid');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        squid.classList.remove('ani_squid')

    });

});
observer400.observe(document.querySelector('.squid-wrapper'));


//SQUID TEXT SCROLL ANIMATION 
const observer410 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const boxsquid = entry.target.querySelector('.boxsquid');

        if (entry.isIntersecting) {
            // Add the animation class
            boxsquid.classList.add('ani_boxsquid');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        boxsquid.classList.remove('ani_boxsquid')

    });

});
observer410.observe(document.querySelector('.boxsquid_wrapper'));


//ANGLER SCROLL ANIMATION 
const observer850 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const angler = entry.target.querySelector('.angler');
        const light = entry.target.querySelector('.angler_light');

        if (entry.isIntersecting) {
            // Add the animation class
            angler.classList.add('ani_angler');
            light.classList.add('ani_light');

            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        angler.classList.remove('ani_angler')
        light.classList.remove('ani_light')

    });

});
observer850.observe(document.querySelector('.angler-wrapper'));

//ANGLER TEXT SCROLL ANIMATION 
const observer860 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {

        const boxangler = entry.target.querySelector('.boxangler');

        if (entry.isIntersecting) {
            // Add the animation class
            boxangler.classList.add('ani_boxangler');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        boxangler.classList.remove('ani_boxangler')

    });

});
observer860.observe(document.querySelector('.boxangler_wrapper'));


// TWILIGHT TITLE
const observertitle1 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const h3 = entry.target.querySelector('.title');

        if (entry.isIntersecting) {
            // Add the animation class
            h3.classList.add('ani_h3');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        h3.classList.remove('ani_h3')
    });
});
observertitle1.observe(document.querySelector('.h3_wrapper1'));


// MIDNIGHT TITLE
const observertitle2 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const h3 = entry.target.querySelector('.title');

        if (entry.isIntersecting) {
            // Add the animation class
            h3.classList.add('ani_h3');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        h3.classList.remove('ani_h3')
    });
});
observertitle2.observe(document.querySelector('.h3_wrapper2'));


// ABYSS TITLE
const observertitle3 = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        const h3 = entry.target.querySelector('.title');

        if (entry.isIntersecting) {
            // Add the animation class
            h3.classList.add('ani_h3');
            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        h3.classList.remove('ani_h3')
    });
});
observertitle3.observe(document.querySelector('.h3_wrapper3'));