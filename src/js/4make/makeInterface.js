// makeInterface.js

function makeInterface()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    ba(mainDiv);

    //-//

    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'CATopalian HTML JavaScript Code Editor';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_HTML_JavaScript_Code_Editor';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontFamily = 'Arial';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'rgb(100, 100, 100)';
    mainDiv.append(titleOfApp);

    //-//

    let fileInputButton = ce('input');
    fileInputButton.textContent = 'fileInput';
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
    fileInputButton.style.display = 'none';
    mainDiv.append(fileInputButton);

    let fileBtn = ce('button');
    fileBtn.textContent = 'Open';
    fileBtn.style.alignSelf = 'flex-start';
    fileBtn.onclick = function()
    {
        fileInputButton.click();
    };
    mainDiv.append(fileBtn);

    //-//

    let container = ce('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'row';
    container.style.marginBottom = '5px';
    mainDiv.append(container);

    //-//

    let htmlInputArea = ce('textarea');
    htmlInputArea.id = 'htmlInput';
    htmlInputArea.style.width = '500px';
    htmlInputArea.placeholder = 'Enter Html, CSS, JS here';
    container.append(htmlInputArea);

    //-//

    let frameOutput = ce('iframe');
    frameOutput.id = 'output';
    container.append(frameOutput);

    //-//

    let buttonRowContainer = ce('div');
    buttonRowContainer.style.display = 'flex';
    buttonRowContainer.style.flexDirection = 'row';
    mainDiv.append(buttonRowContainer);

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
    mainDiv.append(scriptButtonContainer)

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
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

