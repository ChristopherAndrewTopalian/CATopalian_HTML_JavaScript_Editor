// copyText.js

function copyText()
{
    let textarea = ge("htmlInput");

    // select the text inside the textarea
    textarea.select();

    // copy the selected text to clipboard
    document.execCommand("copy");

    alert("Text copied to clipboard!");
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

