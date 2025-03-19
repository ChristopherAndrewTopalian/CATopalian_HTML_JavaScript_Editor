// openFile.js

function openFile()
{
    let fileInput = document.getElementById('fileInput');
    let textarea = document.getElementById('htmlInput');

    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.onload = function(event) {
        let contents = event.target.result;
        textarea.value = contents;
        updateOutput();
    };

    reader.readAsText(file);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

