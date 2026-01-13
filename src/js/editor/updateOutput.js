// updateOutput.js

// update output iframe with HTML input
function updateOutput()
{
    let htmlCode = htmlInput.value;

    // style the output side
    htmlCode += "<style>body{ color:white; }</style>";

    let iframeDocument = output.contentDocument;

    iframeDocument.open();
    iframeDocument.write(htmlCode);
    iframeDocument.close();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

