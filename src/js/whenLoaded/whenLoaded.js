// whenLoaded.js

function whenLoaded()
{
    loadSounds(sounds);

    makeApp();

    // get reference to input
    let htmlInput = document.getElementById("htmlInput");

    // get reference to output
    let output = document.getElementById("output");

    // add event listener to HTML input textarea
    htmlInput.addEventListener("input", updateOutput);

    //-//

    audioPlay('sfx_blip_001', 1.0);
    ge('htmlInput').value = template001;
    updateOutput();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

