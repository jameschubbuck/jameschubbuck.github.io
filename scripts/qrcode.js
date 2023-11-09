//requires <script src="https://cdn.jsdelivr.net/npm/qrious@4.0.2"></script>
function generateQRCode() {
    const content = document.getElementById("content").value;
    if (content.trim() === "") {
        alert("Enter content");
        return;
    }

    const qr = new QRious({
        value: content,
    });

    const qrURL = qr.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrURL;
    link.download = "qrcode.png";
    link.click();
}

document.getElementById("generate").addEventListener("click", generateQRCode);

document.getElementById("content").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        generateQRCode();
    }
});