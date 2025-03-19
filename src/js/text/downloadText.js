// downloadText.js

function downloadText()
{
    let textarea = document.getElementById("htmlInput");
    let text = textarea.value;

    // set a default filename
    //let filename = "ourFileName.txt";
    // let filename = "ourFileName.html";
    
    let filename = document.getElementById('fileInput').value;

    filename = fileInput.value.split('\\').pop();

    // create a Blob with the textarea content
    // let blob = new Blob([text], { type: "text/plain" });
    let blob = new Blob([text], { type: "text/html" });

    // create a URL for the Blob
    let url = URL.createObjectURL(blob); 

    // create a link element to trigger the download
    let link = document.createElement("a");
    link.href = url;
    link.download = filename;
    
    // Simulate a click event on the link to trigger the download
    link.click(); 
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

