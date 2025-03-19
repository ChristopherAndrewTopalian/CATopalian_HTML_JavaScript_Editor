let sayMessage = `<html>
<head>
<title> Say Message </title>

<script>

function sayMessage(whichMessage)
{
    let ourDiv = document.createElement('div');
    ourDiv.innerHTML = whichMessage;
    ourDiv.style.fontWeight = 'bold';
    document.body.append(ourDiv );
}

</script>

</head>

<body>

<button onclick = "sayMessage('Hi');"> Say Message </button>

</body>

</html>
`;