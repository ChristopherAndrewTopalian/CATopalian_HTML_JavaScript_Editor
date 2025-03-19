// makeApp.js

function makeApp()
{
    let mainDiv = ce('div');
    mainDiv.className = 'mainDiv';
    mainDiv.id = 'mainDiv';
    ba(mainDiv);

    //-//

    let container = ce('div');
    container.id = 'container';
    mainDiv.append(container);

    //-//

    let fileInputButton = ce('input');
    fileInputButton.innerHTML = 'fileInput';
    fileInputButton.type = 'file';
    fileInputButton.id = 'fileInput';
    fileInputButton.className = 'buttonStyle001';
    fileInputButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    fileInputButton.oninput = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        openFile();
    };
    fileInputButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
    };
    container.append(fileInputButton);

    //-//

    let htmlInputArea = ce('textarea');
    htmlInputArea.id = 'htmlInput';
    htmlInputArea.style.width = '500px';
    htmlInputArea.placeholder = 'Enter Html, CSS, JS here';
    container.append(htmlInputArea);

    //-//

    let buttonRowContainer = ce('div');
    buttonRowContainer.style.display = 'flex';
    buttonRowContainer.style.flexDirection = 'row';
    container.append(buttonRowContainer);

    //-//

    let copyButton = ce('button');
    copyButton.innerHTML = 'Copy';
    copyButton.id = 'copyButton';
    copyButton.className = 'buttonStyle001';
    copyButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    }
    copyButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        copyText();
    };
    buttonRowContainer.append(copyButton);

    //-//

    let downloadButton = ce('button');
    downloadButton.innerHTML = 'Download';
    downloadButton.id = 'downloadButton';
    downloadButton.className = 'buttonStyle001';
    downloadButton.onmouseover = function()
    {
        audioPlay('sfx_warp_001', 1.0);
    };
    downloadButton.onclick = function()
    {
        audioPlay('sfx_blip_001', 1.0);
        downloadText();
    };
    buttonRowContainer.append(downloadButton);

    //-//

    let evaluateButton = ce('button');
    evaluateButton.id = 'evaluateButton';
    evaluateButton.innerHTML = 'Activate';
    evaluateButton.className = 'buttonStyle001';
    evaluateButton.style.marginLeft = '200px';
    evaluateButton.onclick = function()
    {
        eval(ge('htmlInput').value);
    };
    buttonRowContainer.append(evaluateButton);

    //-//

    let templates =
    [
        {
            name: 'template001',
            location: 'template/template001.js',
            variable: template001
        },
        {
            name: 'sayMessage',
            location: 'template/sayMessage.js',
            variable: sayMessage
        },
    ];

    let scriptButtonContainer = ce('div');
    scriptButtonContainer.id = 'scriptButtonContainer';
    scriptButtonContainer.style.height = '100px';
    scriptButtonContainer.style.padding = '10px';
    scriptButtonContainer.style.overflowY = 'scroll';
    container.append(scriptButtonContainer)

    for (let x = 0; x < templates.length; x++)
    {
        let theButton = ce('button');
        theButton.id = templates[x].name;
        theButton.className = 'buttonStyle001';
        theButton.innerHTML = templates[x].name;

        theButton.onmouseover = function()
        {
            audioPlay('sfx_warp_001', 1.0);
        };

        theButton.onclick = function()
        {
            audioPlay('sfx_blip_001', 1.0);
            ge('htmlInput').value = templates[x].variable;
            updateOutput();
        };

        scriptButtonContainer.append(theButton);

        //-//
    }
        let frameOutput = ce('iframe');
        frameOutput.id = 'output';
        mainDiv.append(frameOutput);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

