document.getElementById('generate').addEventListener('click', function () {
    var textValue = document.getElementById("text").value;
    
    // Clear previous QR code
    document.getElementById('qrcode').innerHTML = '';

    // Check if input is empty
    if (textValue.trim() === '') {
        alert('Please enter text to generate the QR code.');
    } else {
        // Generate new QR code
        new QRCode(document.getElementById("qrcode"), {
            text: textValue,
            width: 128,
            height: 128
        });
    }
});
