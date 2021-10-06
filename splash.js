// //DIVER SCROLL ANIMATION 
// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//         const diver = entry.target.querySelector('.diver');

//         if (entry.isIntersecting) {
//             // Add the animation class
//             freediver.classList.add('ani_diver');
//             return; //if we added the class, end of function 
//         }
//         //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
//         freediver.classList.remove('ani_diver')
//     });

// });

// observer.observe(document.querySelector('.diver-wrapper'));



//FREEDIVER SCROLL ANIMATION 
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // const freediver = entry.target.querySelector('.freediver');
        const diver = entry.target.querySelector('.diver');

        if (entry.isIntersecting) {
            // Add the animation class
            // freediver.classList.add('ani_freediver');
            diver.classList.add('ani_diver');

            return; //if we added the class, end of function 
        }
        //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
        // freediver.classList.remove('ani_freediver')
        diver.classList.remove('ani_diver')

    });

});

observer.observe(document.querySelector('.freediver-wrapper'));
observer.observe(document.querySelector('.diver-wrapper'));



// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {

//         const freediver = entry.target.querySelector('.freediver');

//         if (entry.isIntersecting) {
//             // Add the animation class
//             freediver.classList.add('ani_freediver');
//             return; //if we added the class, end of function 
//         }
//         //once we are no more interesecting, remove the class so that is ready to be added again when in viewport again 
//         freediver.classList.remove('ani_freediver')
//     });

// });

// observer.observe(document.querySelector('.freediver-wrapper'));